import service from './config.js'
//获取node列表
export function getInfoGongShang(option){
  return service({
    method: 'get',
    url: '/info/gongshang',
    params:option
  })
}
