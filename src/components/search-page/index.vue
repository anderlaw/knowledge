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
    <div style="width:1000px;margin:0 auto;text-align:left;">
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
          <div class="fl" style="width:80%;">
            <searchItem :itemInfo="item"/>
          </div>
          <div class="fl" style="width:20%;height:100%;text-align:center;">
            <span v-if="item.companyStatus == 1" class="tag register">
              仍注册
            </span>
            <span v-if="item.companyStatus == 2" class="tag operate">
              存续
            </span>
            <span v-if="item.companyStatus == 3" class="tag operate">
              吊销
            </span>
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
//http
import { getCompany } from '@/http/company'
export default {
  components:{searchBar,searchItem},
  data(){
    return {
      keyWord:'',
      companyList:[],
      totalNumber:0,
      currentPage:1,
      currentSize:10,
      filterType:'companyCorpName'
    }
  },
  methods:{
    handleSearch(){
      this.filterType = "companyCorpName";
      this.getCompany();
    },
    getCompany(){
      getCompany({
        [this.filterType]:this.keyWord,
        pageNumber:this.currentPage,
        pageSize:this.currentSize
      }).then(res=>{
        console.log(res)
        if(res.data.flag){
          this.companyList = res.data.data.companyInfo;
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
    initFilterType_keyWord(){
      if(this.$route.query){
        if(sessionStorage.getItem('filterType'))
        this.filterType = this.$route.query.filterType;
        this.keyWord = this.$route.query.keyWord;
      }
    }
  },
  computed:{

  },
  mounted() {
    this.initFilterType_keyWord();
    this.getCompany();
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
