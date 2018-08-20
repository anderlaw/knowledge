import Mock from './config'

Mock.mock(/bcc\/addZu\.do/,'get',options=>{
  console.log(options)
  return {
    statusCode:200
  }
})
