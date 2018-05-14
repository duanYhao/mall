<template>
  <div class="mine">
      <div class="head">
            <img v-if="$store.state.isLogin" class="bg" src="http://img3.imgtn.bdimg.com/it/u=292356331,3559617158&fm=27&gp=0.jpg" alt="">
            <div class="img">
                <img v-if="!$store.state.isLogin" src="http://img1.imgtn.bdimg.com/it/u=1290280613,2049723008&fm=27&gp=0.jpg" alt="">
                <img v-if="$store.state.isLogin" src="http://img3.imgtn.bdimg.com/it/u=292356331,3559617158&fm=27&gp=0.jpg" alt="">
            </div>
            <div class="info">
                <router-link v-if="isLogin" tag="p" :to="{path:'/setting'}" class="name">小猪佩奇</router-link>
                <div class="btn" v-if="!isLogin">
                    <router-link tag="span" to="/login">登录</router-link>
                    <router-link tag="span" to="/login">注册</router-link>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="part1">
                <p class="title">我的订单</p>
                <ul class="clear">
                    <router-link tag="li" to="/order/pay">
                        <span class="pay"></span>待付款
                    </router-link>
                    <router-link tag="li" to="/order/send">
                        <span class="send"></span>待发货
                    </router-link>
                    <router-link tag="li" to="/order/get">
                        <span class="get"></span>待收货
                    </router-link>
                    <router-link tag="li" to="/order/finish">
                        <span class="finish"></span>已完成
                    </router-link>
                </ul>
            </div>
            <div class="part2">
                <p class="title">生活▪发现</p>
                <ul class="clear">
                    <router-link tag="li" to="/">
                        <span class="quan"></span>优惠券
                    </router-link>
                    <router-link tag="li" to="/">
                        <span class="chou"></span>抽奖
                    </router-link>
                    <router-link tag="li" to="/">
                        <span class="hot"></span>红人馆
                    </router-link>
                    <router-link tag="li" to="/">
                        <span class="foot"></span>足迹
                    </router-link>
                    <router-link tag="li" to="/">
                        <span class="collect"></span>收藏
                    </router-link>
                    <router-link tag="li" to="/">
                        <span class="invite"></span>邀请
                    </router-link>
                    <router-link tag="li" to="/">
                        <span class="prove"></span>红人认证
                    </router-link>
                    <router-link tag="li" to="/ceshi">
                        <span class="sezi"></span>博饼
                    </router-link>
                </ul>
            </div>
        </div>
  </div>
</template>
<style lang="less" scoped>
    .main-container{
        background-color: #eee;
        overflow-y: scroll;
    }
    .slide{
        padding-bottom: 56px;
        box-sizing: border-box;
    }
    .head{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 30px 10px;
        overflow: hidden;
        color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        background: #ff7d7d;
        .bg{
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
            transform: scale(1.1) translate3d(-50%,-50%,0);
            filter: blur(10px);
        }
        .img{
            width: 80px;
            height: 80px;
            overflow: hidden;
            border-radius: 50%;
            margin-right: 10px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 14px;
            .btn{
                span{
                    margin-right: 20px;
                }
            }
        }
    }
    .container{
        padding: 10px;  
        box-sizing: border-box;
    }
    [class^='part']{
        background: #fff;
        border-radius: 5px;
        margin-bottom: 10px;
        .title{
            width: 100%;
            font-size: 14px;
            color: #333;
            line-height: 30px;
            border-bottom: 1px solid #eeeeee;
            padding: 0 10px;
            box-sizing: border-box;
        }
        ul{
            padding: 10px 0;
            box-sizing: border-box;
            li{
                float: left;
                width: 25%;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                color: #999;
                margin-bottom: 15px;
                span{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    margin-bottom: 5px;
                    background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat;
                    &.pay{
                        background-image: url('../static/images/pay.png')
                    }
                    &.send{
                        background-image: url('../static/images/send.png')
                    }
                    &.get{
                        background-image: url('../static/images/get.png')
                    }
                    &.chou{
                        background-image: url('../static/images/chou.png')
                    }
                    &.foot{
                        background-image: url('../static/images/foot.png')
                    }
                    &.collect{
                        background-image: url('../static/images/collect.png')
                    }
                    &.quan{
                        background-image: url('../static/images/quan.png')
                    }
                    &.invite{
                        background-image: url('../static/images/invite.png')
                    }
                    &.hot{
                        background-image: url('../static/images/hot.png')
                    }
                    &.finish{
                        background-image: url('../static/images/finish.png')
                    }
                    &.sezi{
                        background-image: url('../static/images/sezi.png')
                    }
                    &.prove{
                        background-image: url('../static/images/prove.png')
                    }
                }
            }
        }
    }
</style>
<script>
    import {mapState,mapMutations,mapGetters} from 'vuex'
    export default {
        name:'mine',
        data(){
            return {
                
            }
        },
        computed:{
            isLogin(){
                return sessionStorage.getItem('isLogin') || this.$store.state.isLogin;
            }
        },
        methods:{
        }
    }
</script>