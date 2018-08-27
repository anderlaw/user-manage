import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/login'
import HomePage from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
  ]
})
