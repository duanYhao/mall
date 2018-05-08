<template>
  <div id="app">
    <transition :name="animate">
        <router-view class="slide"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    
  },
  data(){
    return {
      selected:'首页',
      animate:''
    }
  },
  watch:{
      $route(to,from){
          // console.log(to,from);
          if(to.meta.posi>from.meta.posi){
              this.animate = 'slide-to-left'
          }else{
              this.animate = 'slide-to-right'
          }
      }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import './assets/base.less';
@import './assets/reset.less';
body,html{
  height: 100%;
}
#app {
  height: 100%;
  box-sizing: border-box;
  font-family: 'Hiragino Sans GB','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

//替换mint的默认样式
.mint-tabbar{
  background-image: none;
  background: #ffffff;
  border-top: 1px solid @border-color ;
  color: @font-light-color;
}
.mint-header{
  background-color: @bar-bg-color;
}
.mint-tabbar > .mint-tab-item.is-selected{
  background-color: #fff;
  color: @bar-bg-color;
}
.mint-navbar{
  margin-bottom: 3px;
}
.mint-button{
  font-size: 16px;
}





// 为你推荐
.recommend{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    color: #707070;
    font-size: 14px;
    background: #eee;
    img{
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }

//绝对定位可解决过渡时页面跳动闪烁
.slide{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

    .slide-to-left-enter-to,.slide-to-left-leave{
        transform: translate3d(0,0,0)
    }
    .slide-to-left-enter-active,.slide-to-left-leave-active{
        transition: all .5s ease-in-out;
    }
    .slide-to-left-enter{
        transform: translate3d(100%,0,0);
        opacity: 0;
    }
    .slide-to-left-leave-to{
        opacity: 0;
        transform: translate3d(-100%,0,0)
    }

    .slide-to-right-enter-to,.slide-to-right-leave{
        transform: translate3d(0,0,0)
    }
    .slide-to-right-enter-active,.slide-to-right-leave-active{
        transition: all .5s ease-in-out;
    }
    .slide-to-right-enter{
        transform: translate3d(-100%,0,0);
        opacity: 0;
    }
    .slide-to-right-leave-to{
        opacity: 0;
        transform: translate3d(100%,0,0)
    }
</style>
