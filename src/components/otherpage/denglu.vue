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
        <label class="yhm"><h3>用户名:</h3></label><br>
        <input 
         class="name" 
         type="text" 
         
          
         placeholder="请输入用户名" >
     </div>
  <div>
        <label class="mm"><h3>密码:</h3></label><br>
  <el-input
    v-model="pass"
   
    type="password"
    style=" position: relative;
     width: 290px;
     height: 30px;
     top: 10px;"
      maxlength="18"
    placeholder="请输入密码"
    show-password
  />
      </div>
    
        <button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br> <button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br><button class="tg"></button><br>
      </form>
    <router-Link to="/otherpage/whateataddpage" ><el-button @click="submitdenglu()"  class="login"  type="primary"  style="width: 50%;" >登录</el-button><br></router-Link>
 
    <router-link to="/otherpage/zhuce" class="zhuce1">没有账号?去注册一个</router-link>
       <router-view></router-view>
   
   
     
     
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
  




export default defineComponent({
  data() {
      return {
        pass:"",
        url:['/login1.png',
             '/login2.png',
             '/login3.png'
      ]
      };
    },
  methods:{
    
    submitdenglu(){
      
      axios.post('https://tools.ckapp.top:60000/javaht/login',{
      username:document.getElementByld("name").value,
      password:pass
      })
.then(function(response){
  
  if(response.data.code=0){

   alert("登录成功");
   
 }else{
   alert("登录失败");
 }
})
.catch(function (error){
  
  alert("网络异常");
})
} 
}
}
  
)
 



</script>

<style>
   .name{
     position: relative;
     width: 280px;
     height: 30px;
     top: 30px;

   }
   
   
   .login{
    position: relative;
    left: 70px;
    bottom: 200px;
   }
   .zhuce1{
    position: relative;
    bottom: 175px;
    left: 70px;
   }
   .tg{
    opacity: .0;
   }
   .h1{
    position: relative;
    left: 120px;
    top: 30px;
   }
   .yhm{
    position: relative;
    top: 50px;
   }
   .mm{
    position: relative;
    top: 30px;
   }
</style>