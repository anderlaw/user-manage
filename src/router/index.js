import Vue from 'vue'
import Router from 'vue-router'
import MainBox from '@/components/main'
import LoginPage from '@/components/login'
import HomePage from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component:MainBox,
      children:[
        { path:'/',component:HomePage }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
  ]
})
