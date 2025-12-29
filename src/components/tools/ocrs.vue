<template>
    <p style="text-align: center;">您要上传的图片</p>
    <div>
      <div class="image-container">
        <img v-if="imageUrl" :src="imageUrl" class="uploaded-image">
        <div v-else class="default-image" @click="handleUpload">
          <span>+</span>
        </div>
        <input type="file" ref="fileInput" style="display:none" @change="handleFileChange">
      </div>
    </div>
   
  
  <span id="flag2"></span>
  <br><br>
  <div style="text-align: center;">
    <el-button type="primary" @click="submitsss()">开始识别</el-button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    beforeCreate(){
    axios.get("https://tools.ckapp.top:60000/javaht/addlog?actions=今天吃什么")
  },
    data() {
      return {
        file: null,
        imageUrl: '',
        baseurl:'https://tools.ckapp.top:60000/javaht',
        flag1:true,
        captchacode:''
      };
    },
    methods: {
      handleUpload() {
        this.$refs.fileInput.click();
      },
      handleFileChange(e) {
        this.file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
      },
      submitsss(){
          const that =this;
        
        
        axios.post("https://tools.ckapp.top:60000/pyht/api/ocr",{imgbase64s:this.imageUrl.split(',')[1]}).then(function(response){
          that.$imgurl.value=that.imageUrl
          that.$datass.value=response.data
          that.$router.push({path:"/otherpage/ocrshowdata"})
        })
        
    }}
  };
  </script>
  
<style>
.image-container {
  width: 60%;
  margin: 0 auto;
}
.upload-container {
  text-align: left;
  margin-bottom: 10px;
}
.upload-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007aff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.image-preview {
  text-align: left;
}
.uploaded-image {
  width: 100%;
}
.default-image {
  text-align: left;
  border: 2px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #ccc;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
}
.default-image span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
  