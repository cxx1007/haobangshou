<template>
  <h3>食物热量查询</h3>
  <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      type="card"
  >
    <el-tab-pane label="按名称查找" name="first">
      <div>
        <el-input
            v-model="input"
            size="large"
            placeholder="Please Input"
            :suffix-icon="Search"
        />
      </div>
      <div v-if="data.length !== 0">
        <el-card v-for="d in data" class="box-card" :body-style="{ padding: '5px' }">
          <div class="text-box">
            <h4>
              {{ d.labelss }}
            </h4>
            <p>
              热量：{{ d.calories }} {{ d.unit }}
            </p>
          </div>
        </el-card>
      </div>
      <el-empty v-else description="空既是空"/>
    </el-tab-pane>
    <el-tab-pane label="按类别查找" name="second">
      <el-tabs v-model="activeType">
        <el-tab-pane
            v-for="(item, index) in ['五谷类,豆类', '蔬菜类' ,'水果类' ,'肉类' ,'蛋类','水产类' ,
                                      '奶类' ,'油脂类','糕点小吃', '糖类','饮料类','茵藻类','菜肴','其他']"
            :key="index+1"
            :name="index+1"
            :label="item"
        >
          <el-table
              v-loading="loading"
              element-loading-text="Loading..."
              :element-loading-spinner="svg"
              element-loading-svg-view-box="-10, -10, 50, 50"
              element-loading-background="rgba(122, 122, 122, 0.8)"

              :data="tableData" stripe style="width: 100%">
            <el-table-column prop="labelss" label="名称"/>
            <el-table-column prop="calories" label="卡路里"/>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
  </el-tabs>

</template>

<script setup lang="ts">
import {Search} from '@element-plus/icons-vue'
import {ref, watch} from "vue";
import axios from "axios";
import type {TabsPaneContext} from 'element-plus'

const input = ref('')
const data = ref([])
const activeName = ref('first')
const activeType = ref(-1)
let tableData = ref([])
const loading = ref(true)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
axios.defaults.baseURL = 'https://tools.ckapp.top:60000/javaht'

    axios.get("https://tools.ckapp.top:60000/javaht/addlog?actions=今天吃什么")
 
const handleClick = (tab: TabsPaneContext, event: Event) => {
  activeType.value = 1
}

watch(input,
    newInput => {
      if (newInput === "") {
        data.value = []
        return
      }
      axios.get('/api/searchcalories', {
        params: {
          keywords: newInput
        }
      }).then(function (response) {
        data.value = response.data
      }).catch(function (error) {
        data.value = []
      })
    })

watch(activeType, newType => {
  tableData.value = []
  loading.value = true
  axios.get('/api/getcaloriesbytype', {
    params: {
      type: newType
    }
  }).then(function (response) {
    tableData.value = response.data
    loading.value = false
  })
})
</script>

<style scoped>
.el-card {
  margin-top: 10px;
}

.text-box {
  margin: 10px;
}

.text-box h4 {
  font-size: 2em;
  font-weight: bold;
  margin: 0;
}

.text-box p {
  color: grey;
  margin: 0;
}
</style>