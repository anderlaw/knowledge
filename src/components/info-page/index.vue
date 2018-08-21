<template>
  <div style="height:100%;">
    <div class="search__bar">
      <div class="search__bar__layout">
        <router-link to="/" style="float:left;">
          <img src="../../assets/logo.png" alt="" style="height:2.4ex;">
          <span style="color:#fff;vertical-align:3px;">企业知识图谱</span>
        </router-link>
        <div style="float:right;">
          <input type="text"
          v-model="keyWord"
          style="padding:8px 10px;width:300px;border-radius:2px 0px 0px 2px;border: 0px;outline:none" @keyup.enter="handleSearch" placeholder="请输入公司名称、人名、品牌名称等关键词"><div class="search-btn" @click="handleSearch"> 搜索 </div>
        </div>
      </div>
    </div>
    <!-- 简介基础信息 -->
    <div class="wrap--content">
      <div class="clearfix" >
        <div class="fl" style="width:16%;display:inline-block;">
          <img src="../../assets/compony-logo.png" width="100%" alt="">
        </div>
        <div class="fr"  style="width:84%;display:inline-block;height:122px;">
          <div class="clearfix">
            <!-- 名称 -->
            <div class="strong" style="font-size:18px;">{{ mainData.Name }}</div>
            <!-- 按钮操作 -->
            <div class="fr">
              <div class="button default">
                <span class="iconfont icon-shenhebijijishibenxiezi"></span>
                <span>笔记</span>
              </div>
              <div class="button default">
                <span class="iconfont icon-duibi"></span>
                <span>对比</span>
              </div>
              <div class="button default">
                <span class="iconfont icon-guanzhu"></span>
                <span>关注</span>
              </div>
              <div class="button default">
                <span class="iconfont icon-jiankong"></span>
                <span>监控</span>
              </div>
            </div>
            <!-- 基础信息 -->
            <div style="font-size:12px;">
              <div>
                <span style="color:#a0a0a0;">上市详情:</span>
                <span style="color:#0084ff;">{{ mainData.Name }}({{ mainData.StockNumber }})</span>
              </div>
              <div>
                <div class="inline-item">
                  <span style="color:#a0a0a0;">电话:</span>
                  <span style="color:#000;">{{ mainData.ContactInfo.PhoneNumber }}</span>
                </div>
                <div class="inline-item">
                  <span style="color:#a0a0a0;">官网:</span>
                  <span style="color:#000;">{{ mainData.ContactInfo.WebSite.Url }}</span>
                </div>
              </div>
              <div>
                <div class="inline-item">
                  <span style="color:#a0a0a0;">邮箱:</span>
                  <span style="color:#000;">{{ mainData.ContactInfo.Email }}</span>
                </div>
                <div class="inline-item">
                  <span style="color:#a0a0a0;">地址:</span>
                  <span style="color:#000;">{{ mainData.Address }}</span>
                </div>
              </div>
              <div>
                <span style="color:#a0a0a0;">简介:</span>
                <span class="strong">数据缺省</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- tab-box -->
      <div class="clearfix">
        <div class="fl tab-box">
          <div style="display:inline-block;line-height:20px;vertical-align:middle;">
            <span class="iconfont icon-f14"></span><br>
            <span>1小时前更新</span>
          </div>
        </div>
        <div class="fl tab-box">
          <div style="display:inline-block;line-height:20px;vertical-align:middle;">
            <img src="../../assets/compony-logo.png" style="height:70px;" alt="">
            <div style="display:inline-block;font-size:12px;line-height:20px;vertical-align:18px;">
              <div>
                <span style="color:#a0a0a0;">产品信息:</span>
                <span style="color:#0084ff;" class="strong">海通证券</span>
              </div>
              <div>
                <span style="color:#a0a0a0;">融资历程:</span>
                <span style="color:#0084ff;text-decoration:underline;">2</span>
                <span style="color:#a0a0a0;">竞品数量:</span>
                <span style="color:#0084ff;text-decoration:underline;">2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fl tab-box">
          <div style="display:inline-block;line-height:20px;vertical-align:middle;">
            <img src="../../assets/compony-logo.png" style="height:70px;" alt="">
            <div style="display:inline-block;font-size:12px;line-height:20px;vertical-align:18px;">
              <div>
                <span style="color:#a0a0a0;">投资机构:</span>
                <span style="color:#0084ff;" class="strong">海通证券</span>
              </div>
              <div>
                <span style="color:#a0a0a0;">投资动态:</span>
                <span style="color:#0084ff;text-decoration:underline;">2</span>
                <span style="color:#a0a0a0;">管理基金:</span>
                <span style="color:#0084ff;text-decoration:underline;">2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fl tab-box">
          <div style="display:inline-block;line-height:20px;vertical-align:middle;">
            <img src="../../assets/compony-logo.png" style="height:70px;" alt="">
            <div style="display:inline-block;font-size:12px;line-height:20px;vertical-align:18px;">
              <div>
                <span style="color:#a0a0a0;">股权穿透:</span>
              </div>
              <div>
                <span style="color:#a0a0a0;">挖掘深层股权结构</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 信息栏目 -->
      <div style="text-align:center;">
        <div class="anchor-link active">
          工商信息
        </div>
        <div class="anchor-link">
          最终受益人
        </div>
        <div class="anchor-link">
          股东信息
        </div>
        <div class="anchor-link">
          风险事件
        </div>
      </div>
      <!-- 信息块 -->
      <!-- <Table>
        <template slot="title">
          工商信息
        </template>
      </Table> -->
      <MergeTable :mainData="mainData"/>
      <!-- 股东信息 -->
      <Table :mainData="guquanData">
        <template slot="title">
          股东信息
          <span style="font-size:10px;">
            （数据来源:上市信息）
          </span>
        </template>
      </Table>
      <PeopleTable :mainData="mainData.Employees">
        <template slot="title">
          主要人员
          <span style="font-size:10px;">
            {{ mainData.Employees.length }}
          </span>
        </template>
      </PeopleTable>
    </div>
  </div>
</template>

<script>
import Table from '@/components/table'
import MergeTable from '@/components/merge-table'
import PeopleTable from '@/components/table-renyuan'

import { getInfoGongShang , getInfoGuQuan} from '@/http/info'
export default {
  components:{Table,MergeTable,PeopleTable},
  data(){
    return {
      keyWord:'',
      mainData:{
        "Partners":[],
        "ContactInfo": {
          "WebSite": [{
            "Name": null,
            "Url": "www.htsec.com"
          }],
          "PhoneNumber": "021-23219000",
          "Email": "haitong@htsec.com"
        },
        "Industry": {
          "IndustryCode": "J",
          "Industry": "金融业",
          "SubIndustryCode": "67",
          "SubIndustry": "资本市场服务",
          "MiddleCategoryCode": "671",
          "MiddleCategory": "证券市场服务",
          "SmallCategoryCode": "6712",
          "SmallCategory": "证券经纪交易服务"
        },
        "Employees":[]
      },
      guquanData:[]
    }
  },
  methods:{
    handleSearch(){

    },
  },
  mounted(){
    getInfoGongShang().then(res=>{
      if(res.data.Status == 200){
        //成功
        this.mainData = res.data.Result;
      }
    });
    getInfoGuQuan().then(res=>{
      //股权信息.
      if(res.data.Status == 200){
        //成功
        this.guquanData = res.data.Result.Children;
      }
      console.log(res);
    })
  }
}
</script>

<style scoped>
  .wrap--content{
    width:1000px;
    margin:0 auto;

  }
  .anchor-link{
    display:inline-block;
    width:200px;
    font-size:14px;
    line-height: 20px;
    padding: 10px 0;
    border-bottom:3px solid #000;
    color:#000;
    cursor: pointer;
  }
  .anchor-link.active{
    border-bottom:3px solid #0084ff;
    color:#0084ff;
  }
  .table{

  }
</style>
