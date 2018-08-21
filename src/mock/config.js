const Mock = require('mockjs');
Mock.setup({
  //配置项
  timeout:1000,//指定被拦截的 Ajax 请求的响应时间，单位是毫秒
})
export default Mock
