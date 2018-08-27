import service from './config'

export function getUserlist(){
  return service({
    method: 'get',
    url: '/user/list',
    data:{
    }
  })
}
