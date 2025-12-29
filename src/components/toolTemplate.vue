<template>
<!--  <ArticleList />-->
  <Suspense>
    <template #default>
      <ArticleList />
    </template>
    <template #fallback>
      <el-empty description="description" />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import {defineAsyncComponent,} from 'vue'
import {useRoute} from "vue-router"

const route = useRoute()
const ArticleList = defineAsyncComponent(() => import(`@/components/tools/${route.params.name}.vue`))
// const ArticleList = defineAsyncComponent({
//   loader: () => import('@/components/tools/ArticleList.vue'),
//   loadingComponent: () => import('@/components/tools/Loading.vue'),
//   errorComponent: () => import('@/components/tools/NotFound.vue'),
//   delay: 200,
// })
</script>

<style scoped>

</style>