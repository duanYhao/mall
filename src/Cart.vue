<template>
  <div class="cart">
        <header-bar title="购物车" :showMenu=true></header-bar>
        <div v-if="isLogin">
            <div class="cart_pro_list" v-for="(item,index) in cartList" :key="index">
            <div class="shop"><span class="check"></span>{{item.shop}}</div>
            <div class="proItem" v-for="(item2,index2) in item.list" :key="index2">
                <span class="check"></span>
                <div class="pro">
                    <div class="img"><img v-lazy="item2.img" alt=""></div>
                    <div class="info">
                        <div class="title">{{item2.title}}</div>
                        <div class="operate">
                            <span class="price">￥<span>{{item2.price | before}}</span>{{item2.price | after}}</span>
                            <div class="count">
                                <span class="min disable" @click="min">-</span>
                                <input type="number" onkeyup="value=value.replace(/[^\d]/g,'')" class="num" v-model="num">
                                <span class="add" @click="add">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pay">
            <div class="all" @click="chooseAll"><span class="check" :class="{checked:checkAll}"></span>全选</div>
            <div class="total">合计：<span> ￥{{total}}</span></div>
            <div class="btn">去结算<span>({{totalNum}})</span></div>
        </div>
    </div>
     <div v-if="!isLogin" class="unLogin">
         <p>当前未登陆,登录以同步购物车数据</p>  
         <router-link to="/login">
             <mt-button type="default" size="large">去登陆</mt-button>
         </router-link>
     </div>
  </div>
</template>
<style lang="less" scoped>
    .cart{
        padding: 40px 0 49px;
        box-sizing: border-box;
    }
    .check{
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid #ddd;
        border-radius: 50%;
        margin-right: 10px;
        &.checked{
            border-color: transparent;
            background: url('../static/images/checked.png') no-repeat center center/cover;
        }
    }
    .pay{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        height: 48px;
        line-height: 48px;
        border-top: 1px solid #eee;
        background: #fff;
        .mint-checklist-title{
            margin: 0;
        }
        div{
            height:100%;
        }
        .all{
            width: 100px;
            padding-left: 10px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #666;
        }
        .total{
            color: #333;
            flex: 1;
            span{
                font-weight: bold;
            }
        }
        .btn{
            width: 30%;
            background: #e93b3d;
            color: #fff;
            font-size: 14px;
            text-align: center;
            span{
                font-size: 12px;
            }
        }
    }
    .cart_pro_list{
        padding: 10px 10px 0;
        box-sizing: border-box;
        .shop{
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .proItem{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 5px;
            .check{
                width: 16px;
                height: 16px;
            }
            .pro{
                flex: 1;
                display: flex;
                flex-direction: row;
                box-shadow: 0 0 5px 1px #eee;
                padding: 10px;
                box-sizing: border-box;
                .img{
                    width: 40%;
                    margin-right: 10px;
                    img{
                        width: 100%;
                    }
                }
                .info{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .title{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        font-size: 12px;
                        height: 36px;
                        line-height: 18px;
                    }
                    .operate{
                        display: flex;
                        flex-direction: row;
                        display: flex;
                        justify-content: space-between;
                        .price{
                            color: #e93b3d;
                            font-size: 12px;
                            span{
                                font-size: 16px;
                            }
                        }
                        .count{
                            span{
                                display: inline-block;
                                line-height: 20px;
                                text-align: center;
                                font-size: 16px;
                                &.min,&.add{
                                    padding: 0 2px;
                                }
                            }
                            .num{
                                width: 30px;
                                background-color: #eee;
                                font-size: 12px;
                                outline: none;
                                border: none;
                                text-align: center;
                                padding: 3px 0;
                                box-sizing: border-box;
                            }
                            .disable{
                                color: #ddd;
                            }
                        }
                    }
                }
            }
        }
    }
    .unLogin{
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        padding: 20px;
        box-sizing: border-box;
        p{
            text-align: center;
            color: #999;
            margin-bottom: 40px;
        }
    }
</style>
<script>
    import headerBar from './components/headerBar'
    import {mapState,mapMutations,mapGetters} from 'vuex'
    export default {
        name:'cart',
        data(){
            return {
                total:'0',
                totalNum:0,
                num:1,
                checkAll:false,
                cartList:[
                    {
                        shop:'吃吃吃的店',
                        list:[
                            {
                                img:'http://img2.imgtn.bdimg.com/it/u=2592291942,1465121090&fm=27&gp=0.jpg',
                                title:'呵呵呵呵呵呵呵呵呵哈哈哈哈哈嘿嘿嘿哈哈嘿哈哈嘿',
                                price:'23.99'
                            }
                        ]
                    },
                    {
                        shop:'玩玩玩的店',
                        list:[
                            {
                                img:'http://img3.imgtn.bdimg.com/it/u=1508375298,1704816399&fm=200&gp=0.jpg',
                                title:'略略略略略略略略',
                                price:'33.99'
                            },
                            {
                                img:'http://img5.imgtn.bdimg.com/it/u=118515751,3058693864&fm=27&gp=0.jpg',
                                title:'呵呵了',
                                price:'199.89'
                            },
                            {
                                img:'http://img5.imgtn.bdimg.com/it/u=118515751,3058693864&fm=27&gp=0.jpg',
                                title:'呵呵了',
                                price:'199.89'
                            }
                        ]
                    }
                ]
            }
        },
        components:{
            headerBar
        },
        computed:{
            isLogin(){
                return sessionStorage.getItem('isLogin') || this.$store.state.isLogin;
            },
            // ...mapState(['isLogin'])
        },
        methods:{
            // ...mapMutations(['getLogin']),
            chooseAll(){
                this.checkAll = !this.checkAll;
            },
            min(){

            },
            add(){

            }
        }
    }
</script>