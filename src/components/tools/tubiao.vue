<template>
  <h1>七天访问量</h1>
  <div ref="qitian" id="qitian" style="width: 100%;height:500px;"></div>
  <div ref="shiyong" id="shiyong" style="width: 100%;height:500px;"></div>
  <div ref="ip" id="ip" style="width: 100%;height:500px;"></div>
</template>


<script>

import * as echarts from 'echarts'
import { defineComponent, reactive } from 'vue'
import axios from 'axios';

export default defineComponent({



  mounted() {
    // this.$echarts调用 初始化
  axios.get('https://tools.ckapp.top:60000/javaht/getlogs',{
     
      })
.then(function(response){
  if(response.data.code==0){
    let datas=response.data.data
    let kays=[]
    let values=[]

  for(var i=0;i<datas.length;i++){
   kays.push(datas[i].day)
   values.push(datas[i].logscont)
}
let myChart = echarts.init(document.getElementById("qitian"));
     
    // 绘制图表
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: kays
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: values,
          type: 'line'
        }
      ]
    });
  }else{
    alert(response.data.message)
  }
  
 
})
.catch(function (error){
  
  alert(error);
})










axios.get('https://tools.ckapp.top:60000/javaht/gettoolslog',{
    })
.then(function(response){
if(response.data.code==0){
  let datas1=response.data.data
  
let datamap=[]
for(var j=0;j<datas1.length;j++){
  datamap.push({value:datas1[j].frequency,name:datas1[j].toolss})
}


    let myChart1 = echarts.init(document.getElementById("shiyong"));
    myChart1.setOption({
      title: {
    text: '工具使用比例',
    subtext: 'tools',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      type: 'pie',
      radius: '50%',
      data:datamap,
        
      
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
 });
}else{
    alert(response.data.message)
  }
  
 
})
.catch(function (error){
  
  alert(error);
})


axios.get('https://tools.ckapp.top:60000/javaht/getippart',{
    })
    .then(function(response){
      if(response.data.code==0){
 let datas2=response.data.data
 let data1=[]
let data3='内网'
 let data4='外网'

data1.push({value:datas2.privateip,name:data3})
data1.push({value:datas2.publicip,name:data4})
  



 let myChart2 = echarts.init(document.getElementById("ip"));
    myChart2.setOption({
      title: {
    text: '内外网ip比例',
    subtext: 'ip',
    left: 'center'
  },
  tooltip: {
    trigger: 'item1'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From 1',
      type: 'pie',
      radius: '50%',
      data:data1,
      
          

        
      
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
    });
  }else{
    alert(response.data.message)
  }
  
 
})
.catch(function (error){
  
  alert(error);
})

  }
})

  
  
</script>

<style></style>