<template>
<div style="height:100%;">
  <div class="top_section">
    <div class="header_bg"></div>
    <div class="header" style="width:900px;margin:0 auto;">
      <router-link to="/" class="img_box">
        <img src="../../assets/logo.png" alt="">
        <span style="color:#fff;vertical-align:2px;">企业知识图谱</span>
      </router-link>
      <div class="login-register">
        <span @click="loginClick" class="login">登录</span>
        /
        <span @click="registerClick" class="register">注册</span>
      </div>
    </div>
    <div class="search-wrapper" style="width:800px;margin:0 auto;text-align:center;">
      <h1 style="color:#fff;letter-spacing:4px;">企业知识图谱</h1>
      <div class="labels">
        <span :class="{ label__item:true,active:currentLabel === '' }" @click="switchLabel('')">全部</span>
        <span :class="{ label__item:true,active:currentLabel === '企业名' }" @click="switchLabel('企业名')">企业名</span>
        <span :class="{ label__item:true,active:currentLabel === '法人/股东' }" @click="switchLabel('法人/股东')">法人/股东</span>
        <span :class="{ label__item:true,active:currentLabel === '高管' }" @click="switchLabel('高管')">高管</span>
        <span :class="{ label__item:true,active:currentLabel === '品牌/产品' }" @click="switchLabel('品牌/产品')">品牌/产品</span>
        <span :class="{ label__item:true,active:currentLabel === '地址/电话' }" @click="switchLabel('地址/电话')">地址/电话</span>
        <span :class="{ label__item:true,active:currentLabel === '经营范围' }" @click="switchLabel('经营范围')">经营范围</span>
      </div>
      <div class="search-box" style="margin-top:30px;">
        <div style="display:inline-block;position:relative;">
          <input type="text" v-model="keyWord" style="padding:12px 22px;width:500px;border-radius:4px;border: 0px;outline:none" placeholder="请输入公司名称、人名、品牌名称等关键词">
          <span class="search-btn" @click="doSearch"> 搜索 </span>

          <!-- 定位热点信息 -->
          <!-- <div class="hot">
            <span class="title">
              热点搜索/
            </span>
            <span>NNNN</span>
            <span>NNNN</span>
            <span>NNNN</span>
            <span>NNNN</span>
            <span>NNNN</span>
            <span>NNNN</span>
            <span>NNNN</span>
            <span>NNNN</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <div style="width:1000px;margin:0 auto;height:40%;">
    <filterSection/>
  </div>
</div>
</template>

<script>
import filterSection from  '@/components/filters'
export default {
  components:{ filterSection },
  data(){
    return {
      currentLabel:'',
      keyWord:''
    }
  },
  methods:{
    loginClick(){

    },
    registerClick(){

    },
    switchLabel(label){
      this.currentLabel = label
    },
    doSearch(){
      this.$router.push({
        path:'/search',
        query:{
          filterType:this.currentLabel,
          keyWord:this.keyWord
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
  height: 60%;
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
</style>
