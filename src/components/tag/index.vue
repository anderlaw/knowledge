<template>
  <div class="tag-box">
    <div style="margin-left:16px;font-size:18px;font-weight:bold;">公司</div>
    <div class="item clearfix">
      <div class="title">企业类型</div>
      <div class="children">
        <span :class="{ item:true,active:enterpriseType == '有限责任公司' }" @click="enterpriseType = '有限责任公司'">有限责任公司</span>
        <span :class="{ item:true,active:enterpriseType == '股份有限公司' }" @click="enterpriseType = '股份有限公司'">股份有限公司</span>
        <span :class="{ item:true,active:enterpriseType == '国企' }" @click="enterpriseType = '国企'">国企</span>
        <span :class="{ item:true,active:enterpriseType == '外商投资企业' }" @click="enterpriseType = '外商投资企业'">外商投资企业</span>
        <span :class="{ item:true,active:enterpriseType == '独资企业' }" @click="enterpriseType = '独资企业'">独资企业</span>
        <span :class="{ item:true,active:enterpriseType == '合伙制企业' }" @click="enterpriseType = '合伙制企业'">合伙制企业</span>
        <span :class="{ item:true,active:enterpriseType == '个体工商户' }" @click="enterpriseType = '个体工商户'">个体工商户</span>
      </div>
    </div>
    <div class="item clearfix">
      <span class="title">注册资本</span>
      <div class="children">
        <span :class="{ item:true,active:companycapital == 1 }" @click="companycapital = 1">500万以下</span>
        <span :class="{ item:true,active:companycapital == 2 }" @click="companycapital = 2">500~1000万</span>
        <span :class="{ item:true,active:companycapital == 3 }" @click="companycapital = 3">1000~5000万</span>
        <span :class="{ item:true,active:companycapital == 4 }" @click="companycapital = 4">5000万以上</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      companycapital:'',
      enterpriseType:''
    }
  },
  watch:{
    companycapital(val){
      this.$emit('tagChange',{
        companycapital:val,
        enterpriseType:this.enterpriseType
      })
    },
    enterpriseType(val){
      this.$emit('tagChange',{
        companycapital:this.companycapital,
        enterpriseType:val
      })
    }
  }
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
.children .item.active{
  color:#fff;
  background-color: #128cec;
}
</style>
