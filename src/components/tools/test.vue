<template>
  <p>测试用页面</p>
  <div> {{ article }}</div>
</template>

<script setup>
// API call
const getArticleInfo = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    title: 'Vue3 中使用 defineAsyncComponent 延迟加载组件',
    author: 'lio'
  }
}

const article = await getArticleInfo()
</script>

<style scoped>
p {
  background-color: #e66465;
}
</style>