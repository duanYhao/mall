<template>
  <div class="cart">
        <header-bar title="购物车" :showMenu=true></header-bar>
        <div v-if="isLogin">
            <div class="cart_pro_list" v-for="(item,index) in cartList" :key="index">
            <div class="shop" @click="allPro(item)"><span class="check" :class="{checked:item.select}"></span>{{item.shop}}</div>
            <div class="proItem" v-for="(item2,index2) in item.list" :key="index2">
                <span class="check" :class="{checked:item2.select}" @click="selectPro(item,item2)"></span>
                <div class="pro">
                    <div class="img"><img v-lazy="item2.img" alt=""></div>
                    <div class="info">
                        <div class="title">{{item2.title}}</div>
                        <div class="operate">
                            <span class="price">￥<span>{{item2.price | before}}</span>{{item2.price | after}}</span>
                            <div class="count">
                                <span class="min" :class="{disable:item2.num==1}" @click="min(item2)"></span>
                                <input type="tel" onkeyup="value=value.replace(/[^\d]/g,'')" @blur="inputNum(item2)" class="num" v-model="item2.num">
                                <span class="add" @click="add(item2)"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pay">
            <div class="all" @click="chooseAll"><span class="check" :class="{checked:checkAll}"></span>全选</div>
            <div class="total">合计：<span> ￥{{total}}</span></div>
            <router-link tag="div" class="btn" to="/reckoning">去结算<span>({{totalNum}})</span></router-link>
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
            width: 80px;
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
                            display: flex;
                            align-items: center;
                            span{
                                display: inline-block;
                                line-height: 20px;
                                text-align: center;
                                font-size: 16px;
                                &.min,&.add{
                                    width: 20px;
                                    height: 20px;
                                    padding: 0 2px;
                                    background-position: center center;
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                }
                                &.min{
                                    background-image: url('../static/images/minus.png');
                                    &.disable{
                                        background-image: url('../static/images/minus_disable.png');
                                    }
                                }
                                &.add{
                                    background-image: url('../static/images/plus.png');
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
                total:0,
                totalNum:0,
                num:1,
                checkAll:false,
                cartList:[
                    {
                        select:false,
                        shop:'吃吃吃的店',
                        list:[
                            {
                                img:'http://img2.imgtn.bdimg.com/it/u=2592291942,1465121090&fm=27&gp=0.jpg',
                                title:'呵呵呵呵呵呵呵呵呵哈哈哈哈哈嘿嘿嘿哈哈嘿哈哈嘿',
                                price:'23.99',
                                num:2,
                                select:false
                            }
                        ]
                    },
                    {
                        select:false,
                        shop:'玩玩玩的店',
                        list:[
                            {
                                img:'http://img3.imgtn.bdimg.com/it/u=1508375298,1704816399&fm=200&gp=0.jpg',
                                title:'略略略略略略略略',
                                price:'33.54',
                                num:1,
                                select:false
                            },
                            {
                                img:'http://img5.imgtn.bdimg.com/it/u=118515751,3058693864&fm=27&gp=0.jpg',
                                title:'呵呵了',
                                price:'199.55',
                                num:4,
                                select:false
                            },
                            {
                                img:'http://img5.imgtn.bdimg.com/it/u=118515751,3058693864&fm=27&gp=0.jpg',
                                title:'呵呵了',
                                price:'199.10',
                                num:1,
                                select:false
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
            //全部商品选择
            chooseAll(){
                this.checkAll = !this.checkAll;
                for(let shop of this.cartList){
                    shop.select = this.checkAll;
                    for(let pro of shop.list){
                        pro.select = this.checkAll;
                    }
                }
                this.calculate();
            },
            // 全选同一家店的商品
            allPro(item){
                item.select = !item.select;
                for(let pro of item.list){
                    pro.select = item.select
                }
                this.calculate();
                this.isALL()
            },
            //选择单个商品
            selectPro(item1,item2){
                item2.select = !item2.select;
                let allShop = true;
                for(let i of item1.list){
                        allShop &= i.select;
                }
                item1.select = allShop;
                this.calculate()
                this.isALL()
            },
            min(item){
                item.num>1 && item.num--
                item.select && this.calculate()
            },
            add(item){
                item.num++
                item.select && this.calculate()
            },
            //判断是否全选
            isALL(){
                let isALL = true;
                for(let i of this.cartList){
                    isALL &= i.select
                }
                this.checkAll = isALL;
            },
            //输入数量
            inputNum(item){
                if(!item.num){
                    item.num = 1
                }
                this.calculate()
            },
            //计算总价
            calculate(){
                this.total = 0;
                this.totalNum = 0;
                for(let shop of this.cartList){
                    for(let pro of shop.list){
                        if(pro.select){
                            this.total = Math.ceil((this.total + Math.ceil(parseFloat(pro.price)*parseInt(pro.num)*100)/100)*100)/100 //有错
                            this.totalNum += parseInt(pro.num);
                        }
                    }
                }
            }
        },
        mounted(){
            // this.calculate();
        }
    }
</script>