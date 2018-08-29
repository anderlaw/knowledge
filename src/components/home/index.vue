<template>
<div style="height:100%;">
  <div class="top_section">
    <div class="header_bg"></div>
    <div class="header" style="width:900px;margin:0 auto;">
      <router-link to="/" class="img_box">
        <img src="../../assets/logo.png" alt="">
        <span style="color:#fff;vertical-align:2px;">企业知识图谱</span>
      </router-link>
    </div>
    <div class="search-wrapper" style="width:800px;margin:110px auto 0;text-align:center;">
      <h1 style="color:#fff;letter-spacing:4px;">企业知识图谱</h1>
      <div class="labels">
        <span :class="{ label__item:true,active:currentLabel === 'companyCorpName' }" @click="switchLabel('companyCorpName')">企业名</span>
        <span :class="{ label__item:true,active:currentLabel === 'companyName' }" @click="switchLabel('companyName')">法人/股东</span>
        <span :class="{ label__item:true,active:currentLabel === 'companyIndustry' }" @click="switchLabel('companyIndustry')">行业</span>
        <span :class="{ label__item:true,active:currentLabel === 'companyAddress' }" @click="switchLabel('companyAddress')">地址</span>
      </div>
      <div class="search-box" style="margin-top:30px;">
        <div style="display:inline-block;position:relative;">
          <input type="text" v-model="keyWord" @keyup.enter="doSearch" style="padding:12px 22px;width:500px;border-radius:4px;border: 0px;outline:none" placeholder="请输入公司名称查询">
          <span class="search-btn" @click="doSearch"> 搜索 </span>
        </div>
      </div>
      <!-- 热搜 -->
      <div style="margin-top:20px;color:#fff;font-size:14px;">
        热搜:
        <span class="resou" @click="jumpto('海通证券股份有限公司')">海通证券股份有限公司</span>
        <span class="resou" @click="jumpto('中信')">中信</span>
        <span class="resou" @click="jumpto('华泰')">华泰</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import filterSection from  '@/components/filters'
import { getCompany } from '@/http/company'
export default {
  components:{ filterSection },
  data(){
    return {
      keyWord:'',
      currentLabel:'companyCorpName',
    }
  },
  methods:{
    doSearch(){
      this.$router.push({
        path:'/search',
        query:{
          keyWord:this.keyWord
        }
      })
    },
    switchLabel(label){
      this.currentLabel = label;
    },
    jumpto(keyword){
      this.$router.push({
        path:'/search',
        query:{
          keyWord:keyword
        }
      })
    },
    doSearch(){
       getCompany({
        [this.currentLabel]:this.keyWord,
        pageNumber:1,
        pageSize:10
      }).then(res=>{
        console.log(res)
        if(res.data.flag){
          sessionStorage.setItem('dataFromHome',JSON.stringify(res.data));
          this.$router.push({
            path:'/search',
            query:{
              keyWord:this.keyWord
            }
          })
        }
      })
    }
  },
  watch:{
    currentLabel(newVal){
      //更新变化了
    }
  }
}
</script>

<style>
/* top背景设置 */
.top_section{
  height: 100%;
  background-image: url('../../assets/head_bg.jpg');
  background-repeat:no-repeat;
  background-size: 100% 100%;
}
/* header背景设置 */
.header_bg{
  height: 50px;
  background-image: linear-gradient(to bottom,#061e55,#052c6e);
  -webkit-filter: opacity(50%); /* Chrome, Safari, Opera */
  filter: opacity(50%);
  box-shadow: 0px 2px 2px 2px #020d29;
  position: fixed;
  top:0px;
  left: 0px;
  width: 100%;
  z-index: 10;
}
/* header元素 */
.header{
  position: relative;
  height: 50px;
  line-height: 50px;
  z-index: 12;
}
header::after{
  display: block;
  content: '';
  clear: both;
}
.header .img_box{
  cursor: pointer;
  display: inline-block;
  padding: 0px 6px;
  float: left;
}
.header img{
    height: 2.2ex;
}
.header .login-register{
  float: right;
  color: #47bcff;
}
.login-register .register{
  color: #47bcff;
  text-decoration: none;
  cursor: pointer;
}
.login-register .login{
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
/* 检索区域 */
/* 标签 */
.labels{
  font-size:14px;
}
.label__item{
  color:#c3c9d7;
  padding:6px 20px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.label__item.active{
  color:#142c63;
  border-radius:3px;
  background-color:#fff;
}
.label__item.active::after{
  display: inline-block;
  content: '';
  border: 8px solid transparent;
  border-top: 8px solid #fff;
  /* border-top-color:#fff; */
  position: absolute;
  width: 0px;
  left: calc(50% - 8px);
  bottom: -16px;
}
/* button */
.search-btn{
  cursor: pointer;
  color:#FFF;padding:10px 40px;background-color:red;
  border-radius:4px;
  background-image:linear-gradient(135deg,#a2fff5,#47bcff);
}
.hot{
  color: #95b6d3;
  font-size: 13px;
  text-align: left;
  word-spacing: 10px;
  position: absolute;
  top: 80px;
}
.hot > .title{
  color: #fff;
}
.resou{
  color: #bac2c7;
  margin:0 10px;
  cursor: pointer;
}
.resou:hover{
  text-decoration: underline;
}
</style>
