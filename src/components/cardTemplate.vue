<template>
  <router-link :to="data.url">
    <!--    TODO-->
    <el-card shadow="hover"  >
      <!--      <div style="height: 100%; width: 100%;">-->
      <!--        <img :src="data.icon" v-if="data.icon" alt=""/>-->
      <!--        <p>{{ data.name }}</p>-->
      <!--        <p>{{ data.desc }}</p>-->
      <!--      </div>-->
      <!--    <div style="display: inline-block"></div>-->
      <div style="height: 100%; width: 20%; display: inline-block" >
        <img :src="data.icon" v-if="data.icon" alt=""/>
      </div>
      <div style="height: 100%; width: 75%; display: inline-block; margin-left: 5%">
        <p style="font-weight:bold ; font-size: 30px">{{ data.name }}</p>
        <p>{{ data.desc }}</p>
      </div>

    </el-card>
  </router-link>

</template>

<script lang="ts" setup>
import {ref} from 'vue'

const props = defineProps({
  data: Object,
})
</script>

<style scoped>
.el-card {
  display: inline-block;
  margin: 10px 10px 10px 10px;
  height: 100px;
  width: 300px;
}

img {
  height: 50px;
}

p {
  margin: 0px 0px 0px 0px;
}
</style>