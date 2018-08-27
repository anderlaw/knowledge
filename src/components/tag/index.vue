<template>
  <div class="tag-box">
    <div style="margin-left:16px;font-size:18px;font-weight:bold;">公司</div>
    <div class="item clearfix">
      <div class="title">企业类型</div>
      <div class="children">
        <span class="item">有限责任公司</span>
        <span class="item">股份有限公司</span>
        <span class="item">国企</span>
        <span class="item">外商投资企业</span>
        <span class="item">独资企业</span>
        <span class="item">合伙制企业</span>
        <span class="item">个体工商户</span>
      </div>
    </div>
    <div class="item clearfix">
      <span class="title">企业状态</span>
      <div class="children">
        <span class="item">正常(191)</span>
        <span class="item">存续(191)</span>
        <span class="item">迁出(191)</span>
        <span class="item">吊销(191)</span>
        <span class="item">仍注册(191)</span>
        <span class="item">已告解散(191)</span>
        <span class="item">不再是独立的实体(191)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tag-box{
  border: 1px solid #eaeef1;
  line-height: 30px;
  padding: 10px;

  margin-bottom: 10px;
}
.title{
  width: 100px;
  box-sizing: border-box;
  padding-left: 20px;
  float: left;
  font-size: 13px;
  color: #9a9a9a
}
.children{
  margin-left: 100px;
  font-size: 14px;

}
.children .item{
  margin: 0 10px;
  padding: 4px 6px;
  cursor: pointer;
  word-break:keep-all;
}
.children .item:hover{
  color:#fff;
  background-color: #128cec;
}
</style>
