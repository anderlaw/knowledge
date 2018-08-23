<template>
  <div id="guquan" style>

  </div>
</template>

<script>
import renderGuquan from '@/utils/guquan'
import  data from './data.js'
export default {
  methods:{

  },
  mounted(){
    renderGuquan(data,'#guquan');
  }
}
</script>

<style>
  .node rect {
    cursor: pointer;
    fill-opacity: 0.5;
    stroke: #ccc;
    stroke-width: 1.5px;
  }

  .node text {
    font: 10px sans-serif;
    pointer-events: none;
  }

  .link {
    fill: none;
    stroke: #abcdf3;
    stroke-width: 1.5px;
  }
</style>
