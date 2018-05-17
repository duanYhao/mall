<template>
  <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
          <img v-if="selected=='home'" slot="icon" src="../assets/images/home_sel.png">
          <img v-else slot="icon" src="../assets/images/home.png">
          首页
      </mt-tab-item>
      <mt-tab-item id="sort">
        <img v-if="selected=='sort'" slot="icon" src="../assets/images/sort_sel.png">
        <img v-else slot="icon" src="../assets/images/sort.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img v-if="selected=='cart'" slot="icon" src="../assets/images/cart_sel.png">
        <img v-else slot="icon" src="../assets/images/cart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img v-if="selected=='mine'" slot="icon" src="../assets/images/mine_sel.png">
        <img v-else slot="icon" src="../assets/images/mine.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
</template>
<style>
.mint-tabbar{
    position: fixed;
    bottom: 0;
}
</style>
<script>
    export default {
        name:'tabbar',
        data(){
            return{
                selected:'home'
            }
        },
        created(){
          this.selected = sessionStorage.getItem('selected') || 'home';
          console.log('create')
        },
        watch:{
          $route(to,from,next){
            if(to.name==='cart'){
              sessionStorage.setItem('selected',from.name)
            }
            if(from.name==='cart'){
              this.selected = sessionStorage.getItem('selected');
            }
          },
          selected(val,oldVal){
            this.selected!='cart' &&  sessionStorage.setItem('selected',val)
            val === 'home' && (val='/')
            this.$router.push({
              path:val
            })
          }
        }
    }
</script>
