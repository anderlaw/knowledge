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
          style="padding:8px 10px;width:300px;border-radius:2px 0px 0px 2px;border: 0px;outline:none" @keyup.enter="handleSearch" placeholder="请输入公司名称"><div class="search-btn" @click="handleSearch"> 搜索 </div>
        </div>
      </div>
    </div>
    <!-- 简介基础信息 -->
    <div class="wrap--content">
      <div class="clearfix">
        <div class="fl" style="width:16%;display:inline-block;">
          <img :src="loadImg(mainData.Name)" width="100%" alt=""/>
        </div>
        <div class="fr"  style="width:84%;display:inline-block;height:122px;">
          <div class="clearfix" style="padding-left:10px;line-height:1.5;">
            <!-- 名称 -->
            <div class="strong" style="font-size:18px;">{{ mainData.Name }}</div>

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
                <div class="inline-item" style="width:400px;">
                  <span style="color:#a0a0a0;">官网:</span>
                  <span style="color:#000;">{{ mainData.ContactInfo.WebSite ? mainData.ContactInfo.WebSite[0].Url : ''}}</span>
                </div>
              </div>
              <div>
                <div class="inline-item">
                  <span style="color:#a0a0a0;">邮箱:</span>
                  <span style="color:#000;">{{ mainData.ContactInfo.Email }}</span>
                </div>
                <div class="inline-item" style="width:400px;">
                  <span style="color:#a0a0a0;">地址:</span>
                  <span style="color:#000;">{{ mainData.Address }}</span>
                </div>
              </div>
              <div>
                <span style="color:#a0a0a0;">简介:</span>
                <span class="strong">{{ mainData.introduction?mainData.introduction.substring(0,150):""}} ...</span>
              </div>
            </div>
          </div>
        </div>
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
          风险传导
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
                <th colspan="2">股权结构图</th>
              </tr>
            </thead>
            <tbody style="font-size:14px;">
              <!-- 第一行 -->
              <tr style="text-align:center;">
                <td colspan="2">
                  <span class="iconfont icon-yonghu" style="font-size:50px;"></span>
                  <span style="font-size:18px;">
                    {{ mainData.Name }}
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
                  <el-button @click="openGuquan = true" size="mini" type="primary" style="margin:14px 0;">
                    <span class="iconfont icon-chakan"></span>
                      查看详情
                  </el-button>
                </td>
              </tr>
              <tr class="bg-section">
                <td>注册资本:</td>
                <td>{{mainData.RegistCapi}}</td>
                <td>实缴资本:</td>
                <td>{{ mainData.RegistCapi }}</td>
                <td>经营状态:</td>
                <td>{{ mainData.Status }}</td>
              </tr>
              <tr class="bg-section">
                <td>成立日期:</td>
                <td>{{ mainData.StartDate }}</td>
                <td>统一社会信用码:</td>
                <td>{{ mainData.CreditCode}}</td>
                <td>纳税人识别号:</td>
                <td>{{ mainData.CreditCode }}</td>
              </tr>
              <tr class="bg-section">
                <td>注册号:</td>
                <td>{{ mainData.No }}</td>
                <td>组织机构代码:</td>
                <td>{{ mainData.OrgNo }}</td>
                <td>股票类型:</td>
                <td>{{ mainData.StockType }}</td>
              </tr>
              <tr class="bg-section">
                <td>所属行业:</td>
                <td>{{ mainData.Industry.Industry}}</td>
                <td>核准日期:</td>
                <td>{{ mainData.CheckDate }}</td>
                <td>登记机关:</td>
                <td>{{ mainData.BelongOrg }}</td>
              </tr>
               <tr class="bg-section">
                 <td>经营范围:</td>
                <td colspan="5">{{ mainData.Scope }}</td>

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
            :data="mainData_guquan.children"
             max-height="300"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="股东名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="StockType"
              label="股份类型">
            </el-table-column>
            <el-table-column
              prop="SubConAmt"
              label="持股数（股）">
            </el-table-column>
            <el-table-column
              prop="FundedRatio"
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
            :data="mainDate_shouyiren"
            max-height="150"
            border
            style="width: 100%">
            <el-table-column
              prop="CompanyName"
              label="公司名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="OperName"
              label="受益人">
            </el-table-column>
            <el-table-column
              prop="FindMatched"
              label="受益人说明">
            </el-table-column>
            <el-table-column
              prop="Remark"
              label="条文依据">
            </el-table-column>
          </el-table>
        </template>
      </Table>
      <!-- 风险传导 -->
      <Table id="fx">
        <template slot="title">
          风险传导
        </template>
        <template slot="content">
          <!--  -->
          <div style="margin-top:10px;">
            <el-select size="small" @change="switchLayout" v-model="cytoLayouType" placeholder="请选择">
              <el-option label="网格排列" value="breadthfirst"/>
              <el-option label="自动排列" value="random"/>
              <el-option label="层次排列" value="cose"/>
              <el-option label="环形排列" value="concentric"/>
            </el-select>
            <div id="fengxianChart">

            </div>
          </div>

        </template>
      </Table>
      <!-- 对外投资 -->
      <Table>
        <template slot="title">
          对外投资
          <span style="font-size:10px;">
          </span>
        </template>
        <template slot="content">
          <el-table
            :data="mainData.Partners"
            max-height="300"
            border
            style="width: 100%">
            <el-table-column
              prop="StockName"
              label="被投资企业名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="StockType"
              label="企业类型">
            </el-table-column>
            <el-table-column
              prop="RealCapi"
              label="注册资本">
            </el-table-column>
            <el-table-column
              prop="CapiDate"
              label="成立日期">
            </el-table-column>
          </el-table>
        </template>
      </Table>

      <Table>
        <template slot="title">
          主要人员
          <span style="font-size:10px;">
            {{ mainData.Employees.length }}
          </span>
        </template>
         <template slot="content">
          <el-table
            :data="mainData.Employees"
             max-height="300"
            border
            style="width: 100%;margin-bottom: 20px">
            <el-table-column

              width="60"
              type="index"
              label="序号"
              >
            </el-table-column>
            <el-table-column
              prop="Name"
              label="名称"
              >
            </el-table-column>
             <el-table-column
              prop="Job"
              label="职位"
              >
            </el-table-column>
          </el-table>
        </template>
      </Table>
    </div>
    <!-- 股权对话框 -->
    <el-dialog
      title="股权图谱"
      :visible.sync="openGuquan"
      @open="renderGuquan"
      width="40%">
      <div id="guquan" style="text-align:center;">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="openGuquan = false">关闭</el-button>
      </span>
    </el-dialog>
    <!-- 风险传导图谱 -->
    <el-dialog

      title="风险传导图谱"
      :visible.sync="openFengxian"
      @open="renderFengxian"
      width="70%">
      <div id="fengxian" ref="fengxian" style="text-align:center;height:420px;">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" @click="openFengxian = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Table from '@/components/table'
import Shouyiren from '@/components/merge-table'
import PeopleTable from '@/components/table-renyuan'

import { getInfoGongShang , getInfoGuQuan} from '@/http/info'
import renderGuquan from '@/utils/guquan'
import renderFengxian from '@/utils/fengxian'
//test data
import testData from './data.js'
let cytoscape = require('cytoscape');
export default {
  components:{ Table, Shouyiren, PeopleTable },
  data(){
    return {
      keyWord:'',
      anchorActive:'gd',
      mainData:{
        Employees:[],
        companyInfo:{},
        guquan:[{}],
        shareholder:[],
        Industry:{ Industry:'' },
        ContactInfo:{WebSite:[{}]}
      },
      //股权对话框
      openGuquan:false,
      mainData_guquan:[],
      mainDate_shouyiren:[],
      mainData_shixin:[],
      //风险传导对话框
      openFengxian:false,
      mainData_fengxian:{},
      cytoIns:null,
      cytoLayouType:'breadthfirst'
    }
  },
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
    },
    renderGuquan(){
      this.$nextTick(function(){
        renderGuquan(this.mainData_guquan,'#guquan')
      })

    },
    renderFengxian(){
      this.$nextTick(function(){
        renderFengxian(this.mainData_fengxian,'#fengxian')
      })
    },
    showFengxian(parent,child){
      let renderData = {};
      renderData.Name = parent;
      renderData.children = this.mainData.Branches.slice(0,20);
      renderData.children[(renderData.children.length/2).toFixed(0)] = {
        name:child,
        danger:true,//添加自定义属性将该节点标红
      };
      renderData = JSON.parse(JSON.stringify(renderData).replace(/Name/g,'name'));
      this.mainData_fengxian = renderData;
      this.openFengxian = true;
    },
    //风险图表
    renderFengxianChart(){
      var result = {}
      result.nodes = testData.nodes.map(item=>{
          return { data:item };
      })
      result.edges = testData.links.map(item=>{
          return { data:item };
      })

      result = JSON.stringify(result).replace(/from/g,'source').replace(/to/g,'target');
      result = JSON.parse(result);
      console.log(result)
      this.cytoIns = cytoscape({
            container: document.getElementById('fengxianChart'),
            elements: result,
            style:cytoscape.stylesheet()
            .selector('node')
            .style({
                'content': 'data(name)',
                'font-size':15,
                'width':20,
                'height':20,
                'text-background-opacity':0.6,
                'text-background-color':'#cfe3f1',
                'text-background-shape' : 'roundrectangle',
                'text-background-padding':'4px',
                'color':'#2e2b2b',
                'background-color': function( ele ){
                    let riskValue = ele.data('properties').riskValue;
                    if(riskValue > 0){
                        return '#ff0015'
                    }else{
                        return "#69c0fe"
                    }
                }
            }).selector('edge')
            .style({
                'curve-style': function( ele ){
                    let riskValue = ele.data('properties');
                    return 'bezier';
                },
                'control-point-step-size':20,
                'control-point-distance':200,
                'width':1.4,
                'target-arrow-shape':'triangle',
                'line-color': '#9dbaea',
                'target-arrow-color': '#9dbaea'
            }),
            layout: {
                name: 'breadthfirst',
                fit: true,
            }
        });
    },
    //切换布局
    switchLayout(value){
      this.cytoIns.layout({
          name: value
      }).run();
    }
  },
  mounted(){
    this.renderFengxianChart();
    getInfoGongShang(this.$route.query.id).then(res=>{
      if(res.data.flag == true){
        //成功

        this.mainData = JSON.parse(res.data.data.companyInfo.companyGsxx).Result;
        console.log(this.mainData,11111111111111)
        this.mainData_guquan = JSON.parse(res.data.data.guquan[0].children).Result;
        //记录投资图谱
        sessionStorage.setItem('mainData_touzi',JSON.stringify(JSON.parse(res.data.data.touzitupu[0].children).Result))
        //失信
         this.mainData_shixin = JSON.parse(res.data.data.shixin[0].discreSx).Result;
         //受益人
        this.mainDate_shouyiren=[JSON.parse(res.data.data.beneficiaries[0].beneficiaryR).Result];
        console.log(this.mainData_shixin[0].Name)
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
  .bg-section td{
    padding:6px;
  }
  .bg-section td:first-child{
    width:80px;
  }
  .link{
    cursor: pointer;
  }
  .link:hover{
    text-decoration: underline;
  }
  /* 风险 图表 */
  #fengxianChart{
    height:600px;
  }
</style>
