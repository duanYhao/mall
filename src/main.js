// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import filter from './api/filters'
import mintui from './api/mintui'
import store from './vuex/store'
import axios from 'axios'



Vue.config.productionTip = false

Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

router.afterEach((to,from,next)=>{
  // window.scrollTo(0,0);
})


//跳转到登陆页
router.beforeEach((to,from,next)=>{
  // console.log(to,from);
  if(to.name==='cart'){
    // if(!store.state.isLogin){
    //   alert('请先登录');
    //   return
    // }
    // return next({path:'/login'});
  }
  next();
})

if(process.env.NODE_ENV==='production'){
  console.log('this is productuin')
}else{
  console.log('this is development')
}