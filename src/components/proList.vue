<template>
    <ul class="clear"  
        :class="{line:type}"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <router-link tag="li" v-for="(item,index) in list" :key="index"  :to="{name:'proDetail',query:{id:item.id}}">
            <div class="img"><img v-lazy="item.pic" alt=""></div>
            <div class="text">
                <div class="name"> {{item.name}}</div>
                <div class="price">
                    <span>￥</span>{{item.price | before}}<span>{{item.price | after}}</span> 
                    <del v-if="item.oldPrice">￥{{item.oldPrice}}</del>
                    <div class="sold">
                        <span class="num" v-if="item.sold">{{item.sold}}人付款</span> 
                        <span class="locate" v-if="item.locate">{{item.locate}}</span> 
                    </div>
                </div>
            </div>
        </router-link>
    </ul>
</template>
<style lang="less" scoped>
    @import "../assets/base.less";
    ul{
        background: #eee;
    }
    li{
        float: left;
        width: 49%;
        margin: 0 2% 5px 0;
        background: #fff;
        padding: 0 0 5px;
        transition: all .2s ease-in;
        &:nth-child(2n){
            margin-right: 0;
        }
        .img{
            min-height:100px;
        }
        img{
            width: 100%;
        }
        .name{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 12px;
            height: 34px;
            line-height: 17px;
            padding: 0 4px;
        }
        .text{
            position: relative;
        }
        .price{
            width: 100%;
            color: @font-red;
            padding: 0 4px;
            box-sizing: border-box;
            span{
                font-size: 12px;
            }
            del{
                font-size: 12px;
                color: #ccc;
                margin-left: 5px;
            }
            .sold{
                color: #ccc;
                font-size: 12px;
                margin-top: 5px;
                .locate{
                    float: right;
                }
            }
        }
    }
    .line{
        li{
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            padding: 5px 5px 0;
            box-sizing: border-box;
            .img{
                width:50%;
                border-radius: 10px;
                overflow: hidden;
            }
            .text{
                flex: 1;
            }
            img{
                width: 100%;
            }
            // del{
                // display: none;
            // }
            // .sold{
            // }
            .price{
                position: absolute;
                bottom: 5px;
            }
            .name{
                -webkit-line-clamp:3;
                height: 51px;
                font-size: 14px;
            }
        }
    }
</style>
<script>
    export default{
        name:'proList',
        props:[
            'list',
            'type'
        ],
        data(){
            return{
            }
        },
        methods:{
            loadMore(){
                this.$emit('loadData')
            }
        },
        watch:{
            isLine:function(oldVal,newVal){
                console.log(oldVal,newVal)
            }
        }
    }
</script>