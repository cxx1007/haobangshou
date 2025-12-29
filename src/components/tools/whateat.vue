<template>
  <h3>今天吃什么</h3>
  <el-select v-model="valuebuild" class="m-2" placeholder="请选择食堂" size="large">
    <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
  <br><br>
  <el-select v-model="valuefloor" class="m-2" placeholder="请选择楼层" size="large">
    <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
  <br><br>
  <el-checkbox v-model="shoptype" label="排除早餐店、奶茶店、鸡公煲" size="large" checked/>
  <br><br>
  <el-button @click="submitchoose()" type="primary">随机一个</el-button>
  <br>
  <hr>
  <h3 style="text-align: center;">实时店铺排名</h3>
  <table id="table1" style="width: 100%;">
    <tr>
<th>排名</th>
<th>店铺名</th>
<th>点赞数</th>
</tr>
  </table>
  <hr>
  <br>
  <h3 style="text-align: center;">近期评论</h3>
  <div id="flag1"></div>
  <router-link to="/otherpage/denglu" ><el-button  type="primary" style="width: 100%;">我也要评论评价</el-button></router-link>
  <router-view></router-view>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted,getCurrentInstance } from "vue";


export default {
  beforeCreate(){
    axios.get("https://tools.ckapp.top:60000/javaht/addlog?actions=今天吃什么")
  },
  data() {
    return {
      valuebuild: '',
      valuefloor: '',
      baseurl:'https://tools.ckapp.top:60000/javaht',
      shoptype:'',
      shoptyperesalt:'',
      options1: [
        {
          value: '1',
          label: '学一',
        }, {
          value: '2',
          label: '学二',
        },
      ], options2: [
        {
          value: '1',
          label: '一楼',
        }, {
          value: '2',
          label: '二楼',
        },
      ]
    };
  },
  methods: {
    submitchoose() {
      if (this.valuebuild === '' || this.valuefloor === '') {
        alert('请先选择食堂和楼层')
      } else {
        if(this.shoptype){
          this.shoptyperesalt="on"
        }else{
          this.shoptyperesalt="off"
        }
        axios.get(this.baseurl+"/api/randonshop?build="+this.valuebuild+"&floor="+this.valuefloor+"&type="+this.shoptyperesalt).then(function(response){
          alert("今天吃"+response.data)
        }).catch(function(error){
          alert("服务器连接失败，请联系管理员！！")
        })
      }
    }
  },setup(props){
    const baseurls='https://tools.ckapp.top:60000/javaht'
    onMounted(() => {
      axios.get(baseurls+"/api/getuplist").then(function(response){
     var table1s=document.getElementById("table1");
     for(var i=0;i<10;i++){
        var tr=document.createElement('tr');
        tr.innerHTML='<td>'+i+'</td>'+'<td>'+response.data[i].name+'</td>'+'<td>'+response.data[i].value+'</td>';
        table1s.appendChild(tr);
     }
      }).catch(function(error){
          alert("服务器连接失败，请联系管理员！！")
        })
        axios.get(baseurls+"/api/getnewshopsuppust").then(function(response){
          var flag1=document.getElementById("flag1");
          for(var i=0;i<3;i++){
          var div1=document.createElement('div');
          div1.innerHTML="<span style=\"font-size: 1.2em;\">"+response.data[i].username+"</span> <span style=\"font-size: 0.5em;\">"+response.data[i].suppustshop+"  "+response.data[i].timess+"</span><br><span>"+response.data[i].suppusttext+"</span><br><br>";
          flag1.appendChild(div1)
          }
        })
    });
  }
}
</script>

<style>
td{
text-align: center;
}
</style>