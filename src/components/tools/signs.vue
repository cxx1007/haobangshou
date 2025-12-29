<template>
  <h3>电子签名</h3>
  <hr>
  <div id="app">
    <VueSignaturePad  height="200px" ref="signaturePad" />
    <div>
      <hr>
      <el-button type="success" @click="save">下载</el-button>
      <el-button type="warning" @click="undo">回退</el-button>
      <el-button type="danger" @click="clears">清空</el-button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { VueSignaturePad } from 'vue-signature-pad';
import axios from "axios";



export default defineComponent({
  name: 'MySignaturePad',
  components: { VueSignaturePad },
  beforeCreate(){
    axios.get("https://tools.ckapp.top:60000/javaht/addlog?actions=今天吃什么")
  },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    clears(){
      this.$refs.signaturePad.clearSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      if(isEmpty){
        alert("无法下载空签名")
      }else{
      let link = document.createElement('a')
      link.href = data
      link.download = 'signs.png'
      link.click()
      }
    }
  }
});
</script>