<template>
  <div class="table">
    <div class="table__title">
      <slot name="title">
      </slot>
    </div>
    <slot name="content">
    </slot>
    <!-- <el-table
      :data="tableData"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="shareholderName"
        label="股东名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="shareholderType"
        label="股份类型">
      </el-table-column>
      <el-table-column
        prop="shareholderNumber"
        label="持股数（股）">
      </el-table-column>
      <el-table-column
        prop="shareholderProportion"
        label="持股比例">
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
export default {
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
