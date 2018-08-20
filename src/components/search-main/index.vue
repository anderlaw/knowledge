<template>
  <div style="height:100%;">
    <searchBar @searchEvent="handleSearch"/>
    <router-view></router-view>
  </div>
</template>

<script>
import searchBar from '@/components/search-bar'
import searchItem from '@/components/search-item'
export default {
  components:{searchBar,searchItem},
  data(){
    return {

    }
  },
  methods:{
    handleSearch(searchWord){
      console.log(searchWord)
    },
    jumpToInfo(){
      this.$router.push({
        path:'/info'
      })
    }
  }
}
</script>

<style scope>
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
}
.tag .operate{
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
