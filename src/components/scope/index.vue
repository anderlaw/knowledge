<template>
<div style="height:100%;">
  <div class="search__bar">
    <div class="search__bar__layout">
      <router-link to="/" style="float:left;">
        <img src="../../assets/logo.png" alt="" style="height:2.4ex;">
        <span style="color:#fff;vertical-align:3px;">企业知识图谱</span>
      </router-link>
      <div style="float:right;">
        <input type="text"
        v-model="keyWord"
        style="padding:8px 10px;width:300px;border-radius:2px 0px 0px 2px;border: 0px;outline:none" @keyup.enter="handleSearch" placeholder="请输入公司名称、人名、品牌名称等关键词"><div class="search-btn" @click="handleSearch"> 搜索 </div>
      </div>
    </div>
  </div>
  <div class="navbar">
    <!-- <span @click="switchType('企业图谱')" :class="{ navbar__item:true,active:currentType=='企业图谱' }">
      企业图谱
    </span> -->
    <span @click="switchType('投资图谱')" :class="{ navbar__item:true,active:currentType=='投资图谱' }">
      投资图谱
    </span>
    <span @click="switchType('关系图谱')" :class="{ navbar__item:true,active:currentType=='关系图谱' }">
      关系图谱
    </span>
  </div>
  <div class="chart_bg" id="scope">
  </div>
</div>
</template>

<script>
let echarts = require('echarts');
import dataTest from './data.js';
export default {
  data(){
    return {
      keyWord:'',
      currentType:'投资图谱',
      myChart:null,
    }
  },
  methods:{
    handleSearch(){
      this.$router.push({
        path:'/search',
        query:{
          keyWord:this.keyWord
        }
      })
    },
    switchType(type){
      this.currentType = type;
    },
    renderTouzi(){
      this.myChart.showLoading();
      let string = sessionStorage.getItem('mainData_touzi').replace(/Children/g,'children');
      let data = JSON.parse(string).Node;
      console.log(data)
      this.$nextTick(()=>{
        this.myChart.hideLoading();
        this.myChart.setOption({
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',

                    data: [data],

                    top: '18%',
                    bottom: '14%',

                    layout: 'radial',

                    symbol: 'emptyCircle',

                    symbolSize: 7,

                    initialTreeDepth: 3,

                    animationDurationUpdate: 750

                }
            ]
        });
      })

    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById('scope'));
    this.renderTouzi();
  }
}
</script>

<style scoped>
  .navbar{
    z-index:10000;
    font-size: 16px;
    position:fixed;top:60px;width:100%;
  }
  .navbar__item{
    color:#3d4144;
    padding:6px 0;
    cursor: pointer;
    margin: 0 20px;
  }
  .navbar__item.active{
    border-bottom: 2px solid #4a8bed;
    color:#4a8bed;
  }
</style>
