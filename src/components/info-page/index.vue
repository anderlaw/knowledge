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
      <div class="clearfix">
        <div class="fl" style="width:16%;display:inline-block;">
          <img src="../../assets/compony-logo.png" width="100%" alt="">
        </div>
        <div class="fr"  style="width:84%;display:inline-block;height:122px;">
          <div class="clearfix" style="padding-left:10px;line-height:1.5;">
            <!-- 名称 -->
            <div class="strong" style="font-size:18px;">{{ mainData.companyInfo.companyCorpName }}</div>

            <!-- 基础信息 -->
            <div style="font-size:12px;">
              <div>
                <span style="color:#a0a0a0;">上市详情:</span>
                <span style="color:#0084ff;">{{ mainData.companyInfo.companyCorpName }}({{ mainData.companyCode }})</span>
              </div>
              <div>
                <div class="inline-item">
                  <span style="color:#a0a0a0;">电话:</span>
                  <span style="color:#000;">{{ mainData.companyInfo.companyPhone }}</span>
                </div>
                <div class="inline-item">
                  <span style="color:#a0a0a0;">官网:</span>
                  <span style="color:#000;">{{ mainData.companyInfo.companyWebsite }}</span>
                </div>
              </div>
              <div>
                <div class="inline-item">
                  <span style="color:#a0a0a0;">邮箱:</span>
                  <span style="color:#000;">{{ mainData.companyInfo.companyEmai }}</span>
                </div>
                <div class="inline-item">
                  <span style="color:#a0a0a0;">地址:</span>
                  <span style="color:#000;">{{ mainData.companyInfo.companyAddress }}</span>
                </div>
              </div>
              <div>
                <span style="color:#a0a0a0;">简介:</span>
                <span class="strong">{{ mainData.companyInfo.companyIntroduction ? mainData.companyInfo.companyIntroduction.substring(0,100)+'...':'' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- tab-box -->
      <div class="clearfix">
        <!-- <div class="fl tab-box">
          <div style="display:inline-block;line-height:20px;vertical-align:middle;">
            <span class="iconfont icon-f14"></span><br>
            <span>1小时前更新</span>
          </div>
        </div> -->
        <!-- <div class="fl tab-box">
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
        </div> -->
      </div>
      <!-- 信息栏目 -->
      <div style="text-align:center;">
        <div :class="{ 'anchor-link':true,'active':anchorActive == 'gs' }" @click='jumpToAnchor("gs")'>
          工商信息
        </div>
        <div :class="{ 'anchor-link':true,'active':anchorActive == 'gd' }" @click='jumpToAnchor("gd")'>
          股东信息
        </div>
        <div :class="{ 'anchor-link':true,'active':anchorActive == 'syr' }" @click='jumpToAnchor("syr")'>
          最终受益人
        </div>
        <div :class="{ 'anchor-link':true,'active':anchorActive == 'fx' }" @click='jumpToAnchor("fx")'>
          风险事件
        </div>
      </div>
      <!-- 工商信息 -->
      <Table id="gs">
        <template slot="title">
          工商信息
        </template>
        <template slot="content">
          <table style="border: 1px solid #bcbcbc;width:100%;border-collapse: collapse;" border="1" cellspacing="0" >
            <thead style="line-height:40px;font-size:16px;">
              <tr>
                <th colspan="2">法定代表人信息</th>
                <th colspan="2" >企业图谱</th>
                <th colspan="2">关联图谱</th>
              </tr>
            </thead>
            <tbody style="font-size:14px;">
              <!-- 第一行 -->
              <tr style="text-align:center;">
                <td colspan="2">
                  <span class="iconfont icon-yonghu" style="font-size:50px;"></span>
                  <span style="font-size:18px;">
                    {{ mainData.companyInfo.companyName }}
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
                  <el-button @click="jumtoScopa()" size="mini" type="primary" style="margin:14px 0;">
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
                <td>{{ mainData.companyInfo.companycapital }}</td>
                <td>实缴资本:</td>
                <td>{{ mainData.companyInfo.companySjcapital }}</td>
                <td>经营状态:</td>
                <td>{{ mainData.companyInfo.companyStatus==1?'存续':'吊销' }}</td>
              </tr>
              <tr class="bg-section">
                <td>成立日期:</td>
                <td>{{ mainData.companyInfo.companyHzDate }}</td>
                <td>统一社会信用码:</td>
                <td>{{ mainData.companyInfo.companyUniscid }}</td>
                <td>纳税人识别号:</td>
                <td>{{ mainData.companyInfo.companyTaxpayers }}</td>
              </tr>
              <tr class="bg-section">
                <td>注册号:</td>
                <td>{{ mainData.companyInfo.companyRegNo }}</td>
                <td>组织机构代码:</td>
                <td>{{ mainData.companyInfo.companyOrganCode }}</td>
                <td>公司类型:</td>
                <td>{{ mainData.companyInfo.companyCorpType }}</td>
              </tr>
              <tr class="bg-section">
                <td>所属行业:</td>
                <td>{{ mainData.companyInfo.companyIndustry }}</td>
                <td>核准日期:</td>
                <td>{{ mainData.companyInfo.companyHzDate }}</td>
                <td>登记机关:</td>
                <td>{{ mainData.companyInfo.companyOrganizers }}</td>
              </tr>
            </tbody>
          </table>
        </template>
      </Table>
      <!-- 股权信息 -->
      <Table id="gd">
        <template slot="title">
            股权信息
        </template>
        <template slot="content">
          <el-table
            :data="mainData.shareholder"
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
          </el-table>
        </template>
      </Table>
      <!-- 最终受益人信息 -->
      <Table id="syr">
        <template slot="title">
          最终受益人
        </template>
        <template slot="content">
          <el-table
            :data="mainData.beneficiaries"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="shareholderName"
              label="公司名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shareholderType"
              label="受益人">
            </el-table-column>
            <el-table-column
              prop="shareholderNumber"
              label="受益所有人类型">
            </el-table-column>
            <el-table-column
              prop="shareholderProportion"
              label="股权占比">
            </el-table-column>
            <el-table-column
              prop="shareholderProportion"
              label="任职类型">
            </el-table-column>
            <el-table-column
              prop="shareholderProportion"
              label="受益人说明">
            </el-table-column>
            <el-table-column
              prop="shareholderProportion"
              label="条文依据">
            </el-table-column>
          </el-table>
        </template>
      </Table>
      <!-- <Shouyiren id="syr" :tableData="mainData.beneficiaries">
      </Shouyiren> -->
      <!-- 股东信息 -->
      <!-- <Table id="gd" :mainData="guquanData">
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
      </PeopleTable> -->
    </div>
  </div>
</template>

<script>
import Table from '@/components/table'
import Shouyiren from '@/components/merge-table'
import PeopleTable from '@/components/table-renyuan'

import { getInfoGongShang , getInfoGuQuan} from '@/http/info'
export default {
  components:{ Table, Shouyiren, PeopleTable },
  data(){
    return {
      keyWord:'',
      anchorActive:'gd',
      mainData:{
        beneficiaries:[],
        companyInfo:{},
        guquan:[],
        shareholder:[]
      }
    }
  },
  methods:{
    handleSearch(){
      this.$router.push({
        path:'/search',
        query:{
          filterType:'companyCorpName',
          keyWord:this.keyWord
        }
      })
    },
    jumtoScopa(){
      this.$router.push({
        path:'/scope',
        query:{
          id:this.$route.query.id
        }
      })
    },
    jumpToAnchor(id){
      this.anchorActive = id;
      let top = document.getElementById(id) ? document.getElementById(id).offsetTop:null;

      if(top === null){
        return;
      }
      window.scrollTo({
        top:top,
        behavior:'smooth'
      })
    }
  },
  mounted(){
    getInfoGongShang(this.$route.query.id).then(res=>{
      if(res.data.flag == true){
        //成功
        this.mainData = res.data.data;
      }
    });

  }
}
</script>

<style scoped>
  .wrap--content{
    width:1000px;
    margin:0 auto;
    padding-top: 10px;
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
