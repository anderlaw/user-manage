import Vue from 'vue'
import Router from 'vue-router'
import MainBox from '@/components/main'
import LoginPage from '@/components/login'
import HomePage from '@/components/home'
import InfoPage from '@/components/info'
import WritePage from '@/components/write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component:MainBox,
      children:[
        { path:'/',component:HomePage },
        { path:'/write',component:WritePage },
        { path:'/info',component:InfoPage },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
  ]
})
