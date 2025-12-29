<template>
<p>你希望添加的功能</p>
<el-input
    v-model="advicetitle"
  /><br><br>
  <p>请描述一下你希望实现的功能的具体内容</p>
  <el-input
    v-model="advicetext"
    :rows="4"
    type="textarea"
  />
  <p>验证码</p>
  <el-input v-model="captchacode" style="width: 55%;vertical-align:middle;" @click="loadcaptcah()" />&nbsp;
  <span id="flag2"></span>
  <br><br>
  <el-button @click="submitadvice()" type="primary" style="width: 100%;">提交建议</el-button>
</template>
<script>
import axios from 'axios';
import router from "@/router";
export default{
    data(){
        return{
            baseurl:'https://tools.ckapp.top:60000/javaht',
            capchatoken:"",
            advicetext:"",
            advicetitle:"",
            captchacode:"",
            flag1:true
        };
    },methods:{
        loadcaptcah(){
            const that =this;
            if(that.flag1){
            axios.get(this.baseurl+"/api/getcaptcha").then(function(response){
              var flag2=document.getElementById("flag2");
              var span1=document.createElement('span');
              span1.innerHTML="<img src=\""+response.data[1]+"\" style=\"width: 35%;vertical-align:middle\">";
              flag2.append(span1);
              that.capchatoken=response.data[0];
              that.flag1=false
            }).catch(function(error){
              alert("验证码加载失败")
            });
        }
        },submitadvice(){
            const that =this;
            axios.get(that.baseurl+"/api/globaladvice?tokens="+that.capchatoken+"&resalts="+that.captchacode+"&advicetitle="+that.advicetitle+"&advicetext="+that.advicetext).then(function(response){
            if(response.data=="sucesess"){
              alert("提交成功");
              router.go(-1);
            }else if(response.data=="capcha false"){
              alert("验证码错误或者过期")
            }else{
              alert("未知错误")
            }
          }).catch(function(error){
              alert("网络错误")
            });
        }
    }
}
</script>