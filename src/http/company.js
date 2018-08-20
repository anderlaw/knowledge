import service from './config.js'
//获取node列表
export function getCompany(option){
  return service({
    method: 'get',
    url: '/company/getCompanyInfoAll',
    params:option
  })
}
