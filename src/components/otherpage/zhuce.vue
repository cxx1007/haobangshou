<template>

 <div>
    <div class="block text-center">
    <span class="demonstration">
      
    </span>
    <el-carousel height="150px">

      <el-carousel-item v-for="item in url " :key="item">
       
       <el-image :src="item" :fit="fit" />
        
        
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
   <form action="">
    <div>
        <button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br> <button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br>
      </div>
      
      <div>
        <label class="n1"><h3>用户名:</h3></label><br>
        <input class="name1" type="text" id="name1" name="name" placeholder="请输入用户名" >
      </div>
      <div>
        <label class="n1"><h3>密码:</h3></label><br>
        <el-input class="pass1" type="password" show-password v-model="pass1"   maxlength="18"  placeholder="请输入密码" />
      </div>
      <div>
        <label class="n1"><h3>确认密码:</h3></label><br>
        <el-input class="pass1" type="password" show-password  v-model="pass2"  maxlength="18"  placeholder="请确认密码"/>
      </div>
      <router-link :to="'/otherpage/denglu'" style="text-decoration: none;"><el-button @click="submitcreate" class="create" type="primary" style="width: 50%;">注册</el-button></router-link>
        <router-link :to="'/otherpage/denglu'" class="denglu1">已有账号?去登录</router-link>
       <router-view></router-view>
      </form>
</template>
<script>
import axios from 'axios';


export default {
  data() {
      return {
        pass1:"",
        pass2:"",
        url:['/login1.png',
             '/login2.png',
             '/login3.png'
      ]
      };
    },
  methods:{
    submitcreate(){
      axios.post('https://tools.ckapp.top:60000/javaht',{
      username:document.getElementByld("name1").value,
      password:pass1
  })
.then(function(response){
  
  if(response.data.code=0){
   alert("注册成功");
 }else{
   alert("注册失败");
 }
})
.catch(function (error){
  
  alert("网络异常");
})
          
    }
  }



}






</script>


<style>
   .name1{
     position: relative;
     width: 290px;
     height: 30px;
     bottom: 250px;

   }
   .pass1{
     position: relative;
     width: 290px;
     height: 30px;
     bottom: 250px;

   }
   .create{
    position: relative;
    left: 70px;
    bottom: 200px;
   }
   .denglu1{
    position: relative;
   right: 70px;
   bottom: 150px;
   }
   .h11{
    position: relative;
    left: 115px;
    bottom: 275px;
   }
   .n1{
    position: relative;
    bottom: 225px;
   }
</style>