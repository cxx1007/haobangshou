<template>

  <div style="margin-top: 10px;display: none;">
    <el-space  spacer="|">
      <el-check-tag
          v-for="([name, checked], index) in tags"
          :checked="checked"
          @click="onChange(index, tags)">
        <!--        style="margin-right: 8px">-->
        {{ name }}
      </el-check-tag>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted} from 'vue'

const props = defineProps({
  tags: Array,
})
const emit = defineEmits(['response'])


const onChange = (index, tags) => {
  tags[index][1] = !tags[index][1]
  for(var i=0;i< tags.length;i++){
    if(tags[i][1]&&i!=index){
      tags[i][1] = !tags[i][1]
    }
  }
}

onMounted(()=>{
props.tags[0][1]=true;
})
</script>

<style scoped>

</style>