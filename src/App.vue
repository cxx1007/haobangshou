<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div>
          <a href="/"><el-image style="width: 100px; height: 100px;margin-top: 20px" src="/logo.png" fit="fill"/></a>
          <span style="padding-left: 100px;"><img id="imgs" src="" style="width: 10%;"> {{ locals }} {{ weathers }}</span>
          
        </div>
      </el-header>
     
      <el-main>
        <router-Link :to="'/tools/tubiao'" ><el-button  style="position: relative; background-color: white; left:250px ; bottom: 20px;"  >数据</el-button></router-Link>
 
        <div class="roundedRectangle">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>
        <div style="text-align: center">
          <div>"好帮手"-智能工具匣</div>
  <div>&copy; 2024</div>
  </div>
  </el-footer>
    </el-container>
    <el-backtop :right="100" :bottom="100"/>
  </div>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue'
const weathers=ref("")
const locals=ref("")
axios.get("https://apia.aidioute.cn/weather/").then((response)=>{
 weathers.value= response.data["data"]["weather"]["weather"]
 locals.value=response.data["data"]["location"]["area"]
 const imgss=document.getElementById("imgs")
 if(weathers.value=="晴"){
  imgss.src="/sun-solid.svg"
  document.body.style.backgroundImage="linear-gradient(#fa897b, #ffdd94)"
 }else if(weathers.value=="多云" || weathers.value== "阴"){
  imgss.src="/cloud-solid.svg"
  document.body.style.backgroundImage="linear-gradient(#6190e8, #a7bfe8)"
 }else {
  imgss.src="/cloud-showers-heavy-solid.svg"
  document.body.style.backgroundImage="linear-gradient(#8b8b8b,#eaeaea)"
 }
})
</script>

<style scoped>
/*.el-header {*/
/*  position: relative;*/
/*  background-color: var(--el-color-primary-light-7);*/
/*  color: var(--el-text-color-primary);*/
/*}*/

.roundedRectangle {
  margin-top: 50px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  border-width: 1px;
  border-style: solid;
  border-radius: 15px;
  border-color: #000 #000 #000 #000;
}

.box-card {
  margin: 20px 20px 20px 20px;
  max-width: 200px;
  min-width: 100px;
  display: inline-block;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
