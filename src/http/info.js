import service from './config.js'
//获取info，工商信息
export function getInfoGongShang(id){
  return service({
    method: 'get',
    url: '/company/getCompanyById',
    params:{
      companyId:id
    }
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
