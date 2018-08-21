<template>
  <div class="table">
    <div class="table__title">
      <slot name="title">
      </slot>
    </div>
    <el-table
      :data="mainData"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="Name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="Job"
        label="职务">
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
export default {
  props:['mainData'],
  data(){
    return {

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
</style>
