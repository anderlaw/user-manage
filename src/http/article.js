import service from './config'

export function getArticlelist(){
  return service({
    method: 'get',
    url: '/article/list'
  })
}
export function createArticle(option){
  return service({
    method: 'post',
    url: '/article/add',
    data:option
  })
}
export function articleInfo(option){
  return service({
    method: 'get',
    url: '/article/info',
    params:option
  })
}
