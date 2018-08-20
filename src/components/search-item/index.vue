<template>
  <div class="clearfix" style="width:100%;box-sizing:border-box;border-right:1px solid #f2f2f2;">
    <div class="fl" style="width:20%;">
      <img style="width:100%;vertical-align:middle;" src="../../assets/compony-logo.png" alt="">
    </div>
    <div class="fl" style="width:80%;box-sizing:border-box;padding-left:10px;font-size:14px;">
      <div class="company-title" @click="jumpToInfo">{{ itemInfo.companyCorpName }}</div>
      <div class="clearfix">
        <div class="info_item">
          <span class="key">董事长</span>
          <span class="value" style="color:#142c63;">{{ itemInfo.companyName }}</span>
        </div>
        <div class="info_item">
          <span class="key">股本</span>
          <span class="value">{{ itemInfo.companycapital }}</span>
        </div>
        <div class="info_item">
          <span class="key">邮箱</span>
          <span class="value">{{ itemInfo.companyEmail }}</span>
        </div>
        <div class="info_item">
          <span class="key">电话</span>
          <span class="value">{{ itemInfo.companyPhones }}</span>
        </div>
      </div>
      <div>
        <span class="key">地址 </span>
        <span class="value">{{ itemInfo.companyAddress }}</span>
      </div>
      <!-- <div>
        股票简称:海通证券
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props:['itemInfo'],
  methods:{
    jumpToInfo(){
      this.$router.push({
        path:'/info'
      })
    },
  }
}
</script>

<style scoped>
  .company-title{
    cursor:pointer;font-size:18px;font-weight:bold;line-height:30px;
  }
  .company-title:hover{
    text-decoration: underline;
  }
  .info_item{
    float: left;
    width: 33.33%;
  }
  .key{
    color: #888;
  }
  .value{
    color: #000;
  }
</style>
