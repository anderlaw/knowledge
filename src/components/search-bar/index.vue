<template>
  <div class="search__bar">
    <div class="search__bar__layout">
      <div style="float:left;">
        <img src="../../assets/logo.png" alt="" style="height:2.4ex;">
        <span style="color:#fff;vertical-align:3px;">企业知识图谱</span>
      </div>
      <div style="float:right;">
        <input type="text"
        v-model="inputValue"
        style="padding:8px 10px;width:300px;border-radius:2px 0px 0px 2px;border: 0px;outline:none" @keyup.enter="doSearch" placeholder="请输入公司名称、人名、品牌名称等关键词"><div class="search-btn" @click="doSearch"> 搜索 </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      inputValue:'',
    }
  },
  methods:{
    doSearch(){
      this.$emit('searchWillDo',this.inputValue)
    }
  }
}
</script>

<style scoped>

</style>
