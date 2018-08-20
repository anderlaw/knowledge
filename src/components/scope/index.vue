<template>
  <div class="chart_bg" id="scope">

  </div>
</template>

<script>
let cytoscape = require('cytoscape');
import dataTest from './data.js';
export default {
  data(){
    return {
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
  },
  methods:{
    renderScape(){

    }
  }
}
</script>

<style>

</style>
