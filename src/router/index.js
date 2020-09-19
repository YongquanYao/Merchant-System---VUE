import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/layout.vue'
import info from '../pages/info.vue'
import comnpany from '../pages/company.vue'
import cloud from '../pages/cloud.vue'
import setting from '../pages/setting.vue'
import table from '../pages/table.vue'
import home from '../pages/home.vue'
import analysis from '../pages/analysis.vue'

Vue.use(Router)


const routes = [
  // {
  //   //Reset the index path
  //   path: '/'},
  {
    //Home page
    path: '/',
    component: resolve => require(['../pages/index'], resolve),
    meta: {
      title: 'home'
    }
  },
  {
    // merchant info
    path:'/home',
    component: Layout,
    children: [
      {
        path:'/home',
        component: home,
      },
      {
        path:'/home/info',
        component: info
      },
      {
        path:'/home/company',
        component: comnpany
      },
      {
        // merchant's companys info
        path:'/home/table',
        component: table
      },
      {
        // merchant's companys info
        path:'/home/analysis',
        component: analysis
      },
      {
        // merchant's companys info
        path:'/home/cloud',
        component: cloud
      },
      {
        // merchant's user login information
        path:'/home/setting',
        component: setting
      }
    ]
  },
]
const router = new Router({routes})

export default router
