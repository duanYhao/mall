<template>
  <div class="set">
      <header-bar title="设置"></header-bar>
      <mt-button size="large" plain @click="unLogin">注销</mt-button>
  </div>    
</template>
<style lang="less" scoped>
.set{
    padding: 40px 10px 0;
    box-sizing: border-box;
}
.mint-button{
    margin: 50px 0;
}
</style>
<script>
    import {mapMutations} from 'vuex'
    import headerBar from './components/headerBar'
    export default{
        name:'setting',
        methods:{
            // ...mapMutations(['unLogin'])
            unLogin(){
                this.$store.state.isLogin = false;
                sessionStorage.setItem('isLogin','');
                this.$router.go(-1);
            }
        },
        components:{
            headerBar
        }
    }
</script>