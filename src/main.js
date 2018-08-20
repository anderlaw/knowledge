// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入elementui

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
Vue.use(ElementUI);

Vue.config.productionTip = false
import service from './http/config'
service.defaults.baseURL = baseUrl;//设置 接口地址
import './style.css'
// if(process.env.NODE_ENV==='development'){
//   require('./mock');
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
