<template>
  <div class="table">
    <div class="table__title">
      <span>工商信息</span>
    </div>
    <table style="border: 1px solid #bcbcbc;width:100%;border-collapse: collapse;" border="1" cellspacing="0" >
      <thead style="line-height:40px;font-size:16px;">
        <tr>
          <th colspan="2">法定代表人信息</th>
          <th colspan="2">企业关联图谱</th>
          <th colspan="2">股权结构图</th>
        </tr>
      </thead>
      <tbody>
        <!-- 第一行 -->
        <tr style="text-align:center;">
          <td colspan="2">
            <span class="iconfont icon-yonghu" style="font-size:50px;"></span>
            <span style="font-size:18px;">
              周杰
            </span>
            <br>
            <el-button size="mini" type="primary" style="margin:14px 0;">
              <span class="iconfont icon-chakan"></span>
              查看人物图谱
            </el-button>
          </td>
          <td colspan="2">
            <img src="../../assets/scope-icon.png" alt="">
            <br>
            <el-button size="mini" type="primary" style="margin:14px 0;">
              <span class="iconfont icon-chakan"></span>
              查看详情
            </el-button>
          </td>
          <td colspan="2">
            <img src="../../assets/relation.png" alt="">
            <br>
            <el-button size="mini" type="primary" style="margin:14px 0;">
              <span class="iconfont icon-chakan"></span>
                查看详情
            </el-button>
          </td>
        </tr>
        <tr class="bg-section">
          <td>注册资本:</td>
          <td>1312132</td>
          <td>实缴资本:</td>
          <td>1312132</td>
          <td>经营状态:</td>
          <td>1312132</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
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
