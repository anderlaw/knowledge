<template>
  <div class="table">
    <div class="table__title">
      <span>工商信息</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['mainData'],
  data() {
      return {

      }
  },
  watch:{
    mainData(){
    }
  }
}
</script>

<style scoped>
  .table{
    position: relative;
    padding-top: 40px;
  }
  .table__title{
    padding-left: 10px;
    color: #eff1f5;
    z-index: 100;
    position: absolute;
    top: 10px;
    left: -12px;
    width: 100%;
    background: url(../../assets/title-bg.png) no-repeat left top/30% 100%;
    line-height: 40px;
  }
  table td, table th{
    border: 1px solid #bcbcbc;
  }
  .bg-section td:nth-child(odd){
    background-color:#f9f9f9;
  }
   .bg-section td{
     line-height: 30px;
     padding-left: 10px;
   }
</style>
