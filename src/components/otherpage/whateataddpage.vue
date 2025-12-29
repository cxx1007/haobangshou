<template>
  <p>您的昵称</p>
  <el-input v-model="nicename" />
  <p>搜索想要点赞的商家</p>
<el-select
      v-model="shopvalue"
      filterable
      placeholder=""
      loading-text="加载中..."
      :loading="loading1"
      @visible-change="getselectdata"
      style="width: 100%;"
    >
      <el-option
        v-for="(item,index) in selectdata"
        :key="index"
        :label="item"
        :value="item"
      />
    </el-select>
    <p>您的评价</p>
    <el-input
    v-model="suppusttext"
    :rows="4"
    type="textarea"
  /><br>
  <p>验证码</p>
  <el-input v-model="captchacode" style="width: 55%;vertical-align:middle;"/>&nbsp;
  <span id="flag1"></span>
  <br><br>
  <el-button @click="submitsuppost()" type="primary" style="width: 100%;">提交评价</el-button>
</template>
<script>
import axios from 'axios';
import router from "@/router";
import Cookies from 'js-cookie';


export default {
  data() {
    return {
        selectdata:[],
        shopvalue:"",
        baseurl:'https://tools.ckapp.top:60000/javaht',
        loading1:false,
        nicename:"",
        suppusttext:"",
        flag2:true,
        captchacode:"",
        capchatoken:""
        
    };
  },
  mounted() {
  Cookies.set('user', 'cookie');
},
  methods: {

        getselectdata(val){
          if(this.flag2){
            const that =this;
            that.loading1=true;
            axios.get(this.baseurl+"/api/getshopname").then(function(response){
                that.selectdata=response.data;
                that.loading1=false;
            }).catch(function(error){
                console.log(error)
                alert("加载失败");
                that.loading1=false;
            });
            axios.get(this.baseurl+"/api/getcaptcha").then(function(response){
              var flag1=document.getElementById("flag1");
              var span1=document.createElement('span');
              span1.innerHTML="<img src=\""+response.data[1]+"\" style=\"width: 35%;vertical-align:middle\">";
              flag1.append(span1);
              that.capchatoken=response.data[0];
              that.flag2=false
            }).catch(function(error){
              alert("验证码加载失败")
            });
        }
      },
        submitsuppost(){
          if (this.captchacode==""||this.nicename==""||this.shopvalue==null||this.suppusttext==null){
            alert("请保证所有项不为空")
          }else{
          axios.get(this.baseurl+"/api/addshopsuppust?tokens="+this.capchatoken+"&resalts="+this.captchacode+"&username="+this.nicename+"&suppustshop="+this.shopvalue+"&suppusttext="+this.suppusttext).then(function(response){
            if(response.data==true){
              alert("提交成功");
              const user = Cookies.get('user');
              console.log(user);
              router.push('/tools/whateat');
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
}
</script>