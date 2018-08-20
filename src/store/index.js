/**
 * Created by david.chen on 2017/10/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import searchBar from './search-bar'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    searchBar,
  }
})
