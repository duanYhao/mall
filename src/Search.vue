<template>
    <div class="container">
        <header-bar title="搜索"></header-bar>
        <mt-search v-model="value" @keyup.enter.native="search(value)"></mt-search>
        <mt-navbar v-model="selected">
            <mt-tab-item id="shop">店铺</mt-tab-item>
            <mt-tab-item id="product">商品</mt-tab-item>
        </mt-navbar>
        <mt-cell title="热门搜索">
            <span style="color: green">换一批</span>
        </mt-cell>
        <badges :array="hot"  @search="boforeSearch"></badges>
        <mt-cell title="历史搜索">
            <span style="color: green" @click="clear">清除</span>
        </mt-cell>
        <badges :array="history" @search="boforeSearch"></badges>
    </div>
</template>
<style lang="less" scope>
    .container{
        padding-top: 40px;
    }
    .mint-cell-wrapper{
        font-size: 12px;
    }
    .mint-search{
        height: auto;
    }
</style>
<script>
    import badges from './components/badges'
    import headerBar from './components/headerBar'
    export default{
        data(){
            return {
                value:'',
                selected:'shop',
                hot:['飞机','水桶','面包','牛奶','花生','飞机','水桶','面包','牛奶','花生'],
                history:['飞机','水桶','面包','牛奶','花生']
            }
        },
        methods:{
            clear(){
                this.history = [];
            },
            boforeSearch(e){
                this.search(e.keywords);
            },
            search(key){
                if(key){
                    console.log(this.selected+'-'+key)
                    this.$router.push({path:'/searchResult',query:{key:key}})
                }
            }
        },
        components:{
            badges,
            headerBar
        }
    }
</script>