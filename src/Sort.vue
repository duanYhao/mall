<template>
  <div class="sort">
        <router-link :to="{name:'search'}">
            <mt-search></mt-search>
        </router-link>
        <ul class="navList">
            <li :class="{active:item.id==i}" v-for="item in sortList" :key="item.id" @click="getSort(item.id)">{{item.tag}}</li>
        </ul>
        <div class="sortContent">
            <div class="topImg">
                <img v-lazy="banner" alt="">
            </div>
            <div class="itemContent" v-for="i in 3" :key="i">
                <p>热卖分类</p>
                <ul class="clear">
                    <router-link tag="li" v-for="item in 4" :key="item" :to="{name:'searchResult'}">
                        <img v-lazy="hot" alt="">
                        <span>aaa</span>
                    </router-link>
                </ul>
            </div>
        </div>
  </div>
</template>
<style lang="less" scoped>
body,html{
    overflow: hidden;
    box-sizing: border-box;
}
.sort{
    position: relative;
    padding: 52px 0 56px;
    box-sizing: border-box;
}
.mint-search{
    height: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
.navList{
    position: absolute;
    left: 0;
    top: 52px;
    bottom: 0;
    width: 86px;
    overflow-y: auto;
    font-size: 14px;
    background: #eee;
    li{
        position: relative;
        height: 46px;
        line-height: 46px;
        text-align: center;
        &.active{
            background: #fff;
            color: #e93b3d;
            &:before{
                content: '';
                position: absolute;
                width: 5px;
                height: 20px;
                background: #e93b3d;
                left: 0;    
                top: 50%;
                margin-top: -10px;
            }
        }
    }
}
.sortContent{
    position: absolute;
    left: 86px;
    top: 52px;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    .topImg{
        padding: 10px;
        box-sizing: border-box;
        img{
            width: 100%;
        }
    }
}
.itemContent{
    padding: 0 10px;
    box-sizing: border-box;
    p{
        padding: 20px 0 10px;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: bold;
    }
    ul{
        li{
            width: 32%;
            text-align: center;
            float: left;
            margin-right: 2%;
            margin-bottom: 10px;
            font-size: 12px;
            &:nth-child(3n){
                margin-right: 0;
            }
            img{
                width: 100%;
            }
        }
    }
}
</style>
<script>
    export default {
        name:'sort',
        data(){
            return {
                i:1,
                banner:'http://img2.imgtn.bdimg.com/it/u=1685133278,1550736444&fm=27&gp=0.jpg',
                hot:'http://img1.imgtn.bdimg.com/it/u=2613383406,425906203&fm=27&gp=0.jpg',
                sortList:[
                    {
                        tag:'国际名牌',
                        id:1
                    },
                    {
                        tag:'居家',
                        id:2
                    },
                    {
                        tag:'食品',
                        id:3
                    },
                    {
                        tag:'数码',
                        id:4
                    },
                    {
                        tag:'海外',
                        id:5
                    },
                    {
                        tag:'数码',
                        id:6
                    },
                    {
                        tag:'海外',
                        id:7
                    },
                    {
                        tag:'女鞋',
                        id:8
                    },
                    {
                        tag:'男鞋',
                        id:9
                    },
                    {
                        tag:'男装',
                        id:10
                    },
                    {
                        tag:'全球购',
                        id:11
                    },
                    {
                        tag:'奢侈品',
                        id:12
                    }
                ]
            }
        },
        methods:{
            getSort(item){
                this.i = item;
            }
        }
    }
</script>