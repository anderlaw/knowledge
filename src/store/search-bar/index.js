export default {
  state: {
    searchOption:{
      searchWords:'',
    }
  },
  getters: {
    getSearchOption(state) {
      return state.searchOption;
    }
  },
  mutations: {
    updateSearchOption(state,data){
      state.searchOption = data;
    }
  }
}
