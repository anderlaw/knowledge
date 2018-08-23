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
    <span @click="switchType('企业图谱')" :class="{ navbar__item:true,active:currentType=='企业图谱' }">
      企业图谱
    </span>
    <span @click="switchType('投资图谱')" :class="{ navbar__item:true,active:currentType=='投资图谱' }">
      投资图谱
    </span>
    <span @click="switchType('关系图谱')" :class="{ navbar__item:true,active:currentType=='关系图谱' }">
      关系图谱
    </span>
    <span @click="switchType('股权结构图')" :class="{ navbar__item:true,active:currentType=='股权结构图' }">
      股权结构图
    </span>
  </div>
  <div class="chart_bg" id="scope">
  </div>
</div>
</template>

<script>
let cytoscape = require('cytoscape');
import dataTest from './data.js';
export default {
  data(){
    return {
      keyWord:'',
      currentType:'企业图谱'
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
    }
  },
  mounted() {
    var cy = cytoscape({
          container: document.getElementById('scope'), // container to render in
          // elements:this.dataTest,
          elements:dataTest,
          style:[
              {
                  selector:'node',
                  style:{
                      'background-color':'#666',
                      'content':'data(name)',
                      'text-valign': 'center',
                      'text-halign': 'center',
                      'border-width':'2',
                      'height':'100px',
                      'width':'100px',
                      'border-color':'#4da5e7',
                      'border-opacity':'0.6',
                      'text-max-width':'200px',
                      'text-wrap':'wrap'
                  }
              },
              {
                  selector: 'edge',
                  style: {
                      'font-size':'10px',
                      // 'background-color': '#61bffc',
                      // 'line-color': '#61bffc',
                      // 'target-arrow-color': '#61bffc',
                      // 'transition-property': 'background-color, line-color, target-arrow-color',
                      // 'transition-duration': '0.5s'
                      'curve-style': 'bezier',
                      'width': 2,
                      'mid-target-arrow-shape': 'triangle',
                      'line-color': '#9dbaea',
                      'target-arrow-color': '#9dbaea'
                  }
              }
          ],
          layout:{
              name: 'concentric',
              animate:true,
              animationDuration: 500,
              fit: true,
              padding: 30,
              startAngle: 1 * Math.PI,
              clockwise: true,
              equidistant: true,
              ready: function(){
                  console.log('graph is ready')
              },
              stop:function(){
                  console.log('graph is stop')
              },
              idealEdgeLength: 100,//线的长度

              refresh: 20,

              randomize: false,
              componentSpacing: 100,
              nodeRepulsion: 400000,
              edgeElasticity: 100,
              nestingFactor: 5,
              gravity: 80,
              numIter: 1000,
              initialTemp: 200,
              coolingFactor: 0.95,
              minTemp: 1.0
          },
          pan: { x: 10, y: 10 },
      });
      //设置不同节点的背景色
      cy.elements('node[nodeType = 0]').style({backgroundColor:'red'});
      cy.elements('node[nodeType = 1]').style({backgroundColor:'pink'});
      cy.elements('node[nodeType = 2]').style({backgroundColor:'orange'});
      //设置不同线条的颜色
      // cy.elements('edge[lineType = 0]').style({'line-color':'orange','mid-source-arrow-color':'green','content':'董事'});
      // cy.elements('edge[lineType = 1]').style({'line-color':'red','content':'投资'});
      cy.on('click','node',function(ev){
          console.log(ev.target._private.data.id);
          //把所有parentid
          //弹出操作
          //所有的节点变灰色
          cy.elements().style({opacity:0.7});
          ev.target.style({opacity:1})

          //某个节点变
      })
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
