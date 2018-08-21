import service from './config.js'
//获取info，工商信息
export function getInfoGongShang(option){
  return service({
    method: 'get',
    url: '/info/gongshang',
    params:option
  })
}
//获取info，股权结构
export function getInfoGuQuan(option){
  return service({
    method: 'get',
    url: '/info/guquan',
    params:option
  })
}
