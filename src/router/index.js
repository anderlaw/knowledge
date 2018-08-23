import Vue from 'vue'
import Router from 'vue-router'

//公共的searchBar
import SearchMain from '@/components/search-main'
//页面
import HomePage from '@/components/home'
import SearchPage from '@/components/search-page'
import InfoPage from '@/components/info-page'
import scopePage from '@/components/scope'
import Guquan from '@/components/guquan'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage
    },
    {
      path: '/info',
      name: 'info',
      component: InfoPage
    },
    {
      path: '/scope',
      name: 'scope',
      component: scopePage
    },
    {
      path: '/guquan',
      name: 'guquan',
      component: Guquan
    },
  ]
})
