import service from './config'

export function getUserlist(){
  return service({
    method: 'get',
    url: '/user/list',

  })
}
export function createUser(option){
  console.log(option)
  return service({
    method: 'get',
    url: '/user/add',
    params:option
  })
}
