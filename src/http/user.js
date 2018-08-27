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
export function deleteUser(id){
  return service({
    method: 'get',
    url: '/user/delete',
    params:{
      user_id:id
    }
  })
}
export function updateUser(option){
  return service({
    method: 'get',
    url: '/user/update',
    params:option
  })
}
