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
          style="padding:8px 10px;width:300px;border-radius:2px 0px 0px 2px;border: 0px;outline:none" @keyup.enter="getCompany" placeholder="请输入公司名称"><div class="search-btn" @click="getCompany"> 搜索 </div>
        </div>
      </div>
    </div>
    <div style="width:1000px;margin:14px auto 0;text-align:left;">
      <search-tag @tagChange="handleTagChange($event)"/>
      <span>为您查到 <span style="color:red;">{{totalNumber}}</span> 家符合条件的企业</span>
      <div class="clearfix table__head">
        <div class="fl table__head__left">
          公司
        </div>
        <div class="fl table__head__right">
          状态
        </div>
      </div>
      <div class="table__content clearfix">
        <div class="table__item" :key="index" v-for="(item,index) in companyList">
          <div class="fl" style="width:80%;height:100%;">
            <searchItem :itemInfo="item"/>
          </div>
          <div class="fl" style="width:20%;height:100%;line-height:115px;text-align:center;">

            <span style="color:red;" v-if="checkStatus(item.companyGsxx.Result.Status) == 0"> {{ item.companyGsxx.Result.Status }} </span>
            <span style="color:green;" v-else> {{ item.companyGsxx.Result.Status }} </span>

          </div>
        </div>
      </div>
      <div style="text-align:right;padding:10px 0;margin-bottom:20px;">
        <el-pagination
          style="padding:0px;"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="currentSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNumber">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import searchBar from '@/components/search-bar'
import searchItem from '@/components/search-item'
import searchTag from '@/components/tag'
//http
import { getCompany } from '@/http/company'
export default {
  components:{searchBar,searchItem,searchTag},
  data(){
    return {
      keyWord:'',
      companyList:[],
      totalNumber:0,
      currentPage:1,
      currentSize:10,
      tagParams:null,
    }
  },
  filters:{

  },
  methods:{
    checkStatus(value){
      if(value.indexOf('在业') !=-1 || value.indexOf('在营') !=-1|| value.indexOf('开业') !=-1|| value.indexOf('在册') != -1 || value.indexOf('存续') !=-1){
        return 1
      }else{
        return 0
      }
    },
    dealJSONToObj(data){
      this.companyList.forEach(item=>{
        item.companyGsxx = JSON.parse(item.companyGsxx);
      })
    },
    getCompany(){
      getCompany(
        Object.assign({
        companyCorpName:this.keyWord,
        pageNumber:this.currentPage,
        pageSize:this.currentSize
      },this.tagParams)
      ).then(res=>{
        console.log(res)
        if(res.data.flag){
          //
          this.companyList = res.data.data.companyInfo;
          this.dealJSONToObj();
          console.log(this.companyList)
          this.totalNumber = res.data.data.total;
          console.log(this.companyList,this.totalNumber)
        }
      })
    },
    handleSizeChange(size){
      this.currentSize = size;
      this.getCompany();
    },
    handleCurrentChange(page){
      this.currentPage = page;
      this.getCompany();
    },
    handleTagChange(obj){
      console.log(obj)
      this.tagParams = obj;
      this.getCompany()
    },
    initFilterType_keyWord(){
      if(this.$route.query){
        this.keyWord = this.$route.query.keyWord;
      }
    },
    getHomeDataFromSesstionOrReload(){
      let data = JSON.parse(sessionStorage.getItem('dataFromHome'));
      if(data){
        //数据应该来自主页
        if(data.flag){
          //
          this.companyList = data.data.companyInfo;
          this.dealJSONToObj();
          this.totalNumber = data.data.total;
          //删除sessiont
          sessionStorage.removeItem('dataFromHome')
        }
      }else{
        //数据应该来自本页
        this.getCompany();
      }
    }
  },
  computed:{

  },
  mounted() {
    this.initFilterType_keyWord();
    this.getHomeDataFromSesstionOrReload();
  },
}
</script>

<style scoped>
.table__head{
  background-color:#f9f9f9;line-height:30px;
}
.table__head__left{
  width:80%;font-weight:bold;color:#142c63;font-size:15px;
  padding-left:20px;
  box-sizing: border-box;
}
.table__head__right{
  width:20%;font-weight:bold;color:#142c63;font-size:15px;
  text-align: center;
}
.table__content{
  margin-top: 5px;
  border: 1px solid #bcbcbc;
}
/* 状态标记 */
.tag{
  display:inline-block;
  -webkit-transform:rotate(335deg);
  transform:rotate(335deg);
  font-weight:bold;
  font-size:12px;
  padding:6px 20px;
  vertical-align:-50px;
}
.tag.operate{
  border:1px solid #62d897;
  color:#62d897;
}
.tag.register{
  border:1px solid #668bb4;
  color:#668bb4;
}
.table__item{
  height: 140px;
  box-sizing: border-box;
  padding: 12px 10px;
}
.table__item:not(:last-child){
  border-bottom: 1px solid #bcbcbc;
}
</style>
