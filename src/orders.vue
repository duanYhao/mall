<template>
  <div class="order">
        <header-bar title="订单" :showMenu=true></header-bar>
        <mt-navbar v-model="selected">
            <mt-tab-item id="all">全部</mt-tab-item>
            <mt-tab-item id="pay">待付款</mt-tab-item>
            <mt-tab-item id="send">待发货</mt-tab-item>
            <mt-tab-item id="get">待收货</mt-tab-item>
            <mt-tab-item id=finish>已完成</mt-tab-item>
        </mt-navbar>
  </div>
</template>
<style lang="less" scoped>
.order{
    padding:40px 0 0;
    box-sizing: border-box;
}
</style>
<script>
    import headerBar from './components/headerBar'
    export default{
        name:'order',
        data(){
            return {
                selected:''
            }
        },
        mounted(){
            // console.log(this.$route)
            this.selected = this.$route.params.sel;
        },
        components:{
            headerBar
        }
    }
</script>