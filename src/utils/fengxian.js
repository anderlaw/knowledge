let echarts = require('echarts');
export default function(data,selector){
  let mychart = echarts.init(document.querySelector(selector));
  mychart.setOption({
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'tree',

            data: [data],

            top: '1%',
            left: '13%',
            bottom: '1%',
            right: '25%',
            symbolSize: 10,

            label: {
                normal: {
                    //position: 'left',
                    position: ['50%','50%'],
                    verticalAlign: 'middle',
                    align: 'right',
                    offset:[-5,0],
                    fontSize: '16px',
                    formatter:function(val){
                      if(val.data.danger === true){
                        return "{danger|"+ val.data.name +"}";
                      }else{
                        return val.data.Name
                      }
                    },
                    rich:{
                      danger:{
                        color:'red',
                        fontSize:'20px',
                        fontWeight:'bold'
                      }
                    }
                },

            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
  });
}

