import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function getAbsolutePath () {
  let path = location.pathname
  return path.substring(0, path.lastIndexOf('/') + 1)
}

export default new Router({
  // mode:'history',
  base:getAbsolutePath (),
  routes: [
    {
      path:'/',
      component:resolve => require(['@/index'],resolve),
      children:[
        {
          path: '/',
          name: 'home',
          meta:{
            keepAlive:false,
            posi:0
          },
          component: resolve => require(['@/Home'],resolve)
        },
        {
          path: 'sort',
          name: 'sort',
          meta:{
            keepAlive:true,
            posi:1
          },
          component: resolve => require(['@/Sort'],resolve)
        },
        {
          path: 'mine',
          name: 'mine',
          meta:{
            keepAlive:false,
            posi:3
          },
          component: resolve => require(['@/Mine'],resolve)
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      meta:{
        keepAlive:true,
        posi:2
      },
      component: resolve => require(['@/Cart'],resolve)
    },
    {
      path:'/search',
      name:'search',
      meta:{
        keepAlive:false,
        posi:11
      },
      component:resolve => require(['@/search'],resolve)
    },
    {
      path:'/proDetail/:id',
      name:'proDetail',
      meta:{
        keepAlive:true,
        posi:13
      },
      component:resolve => require(['@/proDetail'],resolve)
    },
    {
      path:'/searchResult',
      name:'searchResult',
      meta:{
        keepAlive:false,
        posi:12
      },
      component:resolve => require(['@/searchResult'],resolve)
    },
    {
      path:'/login',
      name:'login',
      meta:{
        keepAlive:true,
        posi:31
        
      },
      component:resolve => require(['@/login'],resolve)
    },
    {
      path:'/setting',
      name:'setting',
      meta:{
        keepAlive:false,
        posi:32
      },
      component:resolve => require(['@/setting'],resolve)
    },
    {
      path:'/order/:sel',
      name:'order',
      meta:{
        keepAlive:false,
        posi:33
      },
      component:resolve => require(['@/orders'],resolve)
    },
    {
      path:'/ceshi',
      name:'ceshi',
      meta:{
        keepAlive:false,
        posi:34
      },
      component:resolve => require(['@/ceshi'],resolve)
    },
    {
      path:'/reckoning',
      name:'reckoning',
      meta:{
        keepAlive:false,
        posi:35
      },
      component:resolve => require(['@/reckoning'],resolve)
    },
    {
      path:'*',
      name:'notFound',
      component:resolve => require(['@/notFound'],resolve)
    }
  ]
})
