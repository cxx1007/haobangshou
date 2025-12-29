<template>
    <h3>称谓计算器</h3>
  <p>我的性别</p>
  <el-radio-group v-model="sexselects" >
    <el-radio-button :label="1">男</el-radio-button>
    <el-radio-button :label="0">女</el-radio-button>
  </el-radio-group>
  <p>称呼方式</p>
  <el-radio-group v-model="callways" >
    <el-radio-button :label=false>我称呼对方</el-radio-button>
    <el-radio-button :label=true>对方称呼我</el-radio-button>
  </el-radio-group>
  <br><br>
  <el-input
    v-model="showtodo"
    :rows="2"
    type="textarea"
    disabled
  /><br><br>
  <el-button-group>
    <el-button type="primary" @click="addtext('父')">父</el-button>
    <el-button type="primary" @click="addtext('母')">母</el-button>
    <el-button type="primary" @click="addtext('夫')">夫</el-button>
    <el-button type="primary" @click="addtext('妻')">妻</el-button>
    <el-button type="primary" @click="addtext('兄')">兄</el-button>
  </el-button-group>
  <br><br>
  <el-button-group>
  <el-button type="primary" @click="addtext('弟')">弟</el-button>
    <el-button type="primary" @click="addtext('姐')">姐</el-button>
    <el-button type="primary" @click="addtext('妹')">妹</el-button>
    <el-button type="primary" @click="addtext('子')">子</el-button>
    <el-button type="primary" @click="addtext('女')">女</el-button>
</el-button-group>
<br><br>
<el-button type="warning" @click="backshow()">回退</el-button>
<el-button type="danger" @click="cleanshow()">清除</el-button>
<br><br>
<el-input
    v-model="showresalt"
    :rows="2"
    type="textarea"
    disabled
  />
</template>
<script lang="ts">
import axios from 'axios';
export default{
  beforeCreate(){
    axios.get("https://tools.ckapp.top:60000/javaht/addlog?actions=今天吃什么")
  },
    data(){
        return{
            sexselects:1,
            callways:false,
            showtodo:"我",
            flag1:false,
            showresalt:"我"
        };
    },methods:{
        addtext(namess){
            const that =this;
            var addtexts="";
            if(that.flag1){
                addtexts+="的"
            }else{
                that.flag1=true;
                that.showtodo=""
            }
            switch (namess){
                case "父":
                addtexts+="爸爸";
                break;
                case "母":
                addtexts+="妈妈";
                break;
                case "夫":
                addtexts+="老公";
                break;
                case "妻":
                addtexts+="老婆";
                break;
                case "兄":
                addtexts+="哥哥";
                break;
                case "弟":
                addtexts+="弟弟";
                break;
                case "姐":
                addtexts+="姐姐";
                break;
                case "妹":
                addtexts+="妹妹";
                break;
                case "子":
                addtexts+="儿子";
                break;
                case "女":
                addtexts+="女儿";
                break;
            };
            that.showtodo+=addtexts;
            that.showresalt=relationship({text:that.showtodo,sex:that.sexselects,reverse:that.callways})
            if(that.showresalt==""){
                that.showresalt="你的关系太远了，怎么称呼你决定！"
            }
        },
        cleanshow(){
            const that =this;
            that.showtodo="我";
            that.showresalt="我";
            that.flag1=false;
        },
        backshow(){
            const that =this;
            that.showtodo=that.showtodo.slice(0, -3);
            if(that.showtodo==""){
                that.showtodo="我";
                that.flag1=false;
                that.showresalt="我";
            }else{
            that.showresalt=relationship({text:that.showtodo,sex:that.sexselects,reverse:that.callways})
            if(that.showresalt==""){
                that.showresalt="你们的关系太远了，怎么称呼你决定！"
            }
            }
        }
    },mounted() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://passer-by.com/relationship/dist/relationship.min.js';
    document.body.appendChild(s);
  },
}
</script>