import Vue from 'vue'
import Router from 'vue-router'
import info from '../pages/info.vue'
import comnpany from '../pages/company.vue'


Vue.use(Router)


const routes = [
  {
    //Reset the index path
    path: '/', redirect: 'home'},
  {
    //Home page
    path: '/home',
    component: resolve => require(['../pages/home'], resolve),
    meta: {
      title: 'home'
    }
  },
  {
    // merchant info
    path:'/home/info',
    component: info
  },
  {
    // merchant's companys info
    path:'/home/company',
    component: comnpany
  },
  
]
const router = new Router({routes})

export default router
