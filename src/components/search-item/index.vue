<template>
  <div class="clearfix" style="height:100%;width:100%;box-sizing:border-box;border-right:1px solid #f2f2f2;">
    <div class="fl" style="width:20%;height:100%;">
      <img :src="loadImg(itemInfo.companyGsxx.Result.Name)" style="height:100%;width:100%;" alt=""/>
    </div>
    <div class="fl" style="width:80%;box-sizing:border-box;padding-left:10px;font-size:14px;">
      <div class="company-title" @click="jumpToInfo(itemInfo.companyId)">{{ itemInfo.companyCorpName }}</div>
      <div class="clearfix">
        <div class="info_item">
          <span class="key">董事长</span>
          <span class="value" style="color:#142c63;">: {{ itemInfo.companyGsxx.Result.OperName }}</span>
        </div>
        <div class="info_item">
          <span class="key">股本</span>
          <span class="value">: {{ itemInfo.companyGsxx.Result.RegistCapi }}</span>
        </div>
        <div class="info_item">
          <span class="key">邮箱</span>
          <span class="value">: {{ itemInfo.companyGsxx.Result.ContactInfo.Email }}</span>
        </div>
        <div class="info_item">
          <span class="key">电话</span>
          <span class="value">: {{ itemInfo.companyGsxx.Result.ContactInfo.PhoneNumber }}</span>
        </div>
      </div>
      <div>
        <span class="key">地址 </span>
        <span class="value">: {{ itemInfo.companyGsxx.Result.Address }}</span>
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
  loadImg(name){
    let img = null;
    try{
      img = require('../../assets/'+name+'.jpg');
    }catch(e){
      img = require('../../assets/no_image.jpg');
    }finally{

    }
    
    return img;
  },
    jumpToInfo(id){
      this.$router.push({
        path:'/info',
        query:{
          id:id
        }
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
