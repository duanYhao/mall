<template>
  <div class="detail">
        <header-bar :title="id" :showMenu='true'></header-bar>
        <div class="swiper">
            <mt-swipe :auto="0" :show-indicators="false" @change="handleChange">
                <mt-swipe-item v-for="(item,index) in banner" :key="index">
                    <img v-lazy="item" alt="  ">
                </mt-swipe-item>
            </mt-swipe>
            <mt-badge class="page" size="small" color="#888">{{index}} / {{total}}</mt-badge>
        </div>
        <div class="info">
            <div class="price">
            <span>￥</span>{{info.price | before}}<span>{{info.price | after}}</span>
            <del v-if="info.oldPrice">￥{{info.oldPrice}}</del>
            </div>
            <div class="title_share">
                <div class="title">{{info.title}}</div>
                <div class="share" @click="share_popup">分享有礼</div>
            </div>
        </div>
        <mt-popup v-model="share_popup_value" position="bottom">
            <share-box></share-box>
        </mt-popup>
        <div class="attach_info">
            <span>快递:{{info.diliver}}元</span><span>月销{{info.sold}}笔</span><span>{{info.locate}}</span>
        </div>
        <div class="divider"></div>
        <service :service="info.service"></service>
        <format :format="info.format" ref="formatDom"></format>
        <arguments :argument="info.argument"></arguments>
        <div class="divider"></div>
        <div class="comment">
            <div class="navto">
                <span>宝贝评价({{info.comment.num}})</span><router-link tag="div" to="/">查看全部<span></span></router-link>
            </div>
            <router-link tag="div" class="aJudge" to="/">
                <div class="head">
                    <img src="http://img3.imgtn.bdimg.com/it/u=292356331,3559617158&fm=27&gp=0.jpg" alt="">
                    <span>小猪佩奇</span>
                </div>
                <router-link tag="div" class="content" to="/">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quam excepturi quidem aperiam nostrum consequatur similique odio alias neque? Itaque consequuntur optio eaque blanditiis in fugiat quia fuga illum beatae?
                </router-link>
            </router-link>
        </div>
        <div class="divider"></div>
        <div class="shop">
            <div class="top">
                <div class="name">
                    <img src="http://img2.imgtn.bdimg.com/it/u=2592291942,1465121090&fm=27&gp=0.jpg" alt="">
                    <span>shop name here</span>
                </div>
                <div class="jump">
                    <!-- <router-link tag="span" to="/">全部宝贝</router-link> -->
                    <router-link tag="span" to="/" class="goShop">进店逛逛</router-link>
                </div>
            </div>
            <div class="score">
                <div>宝贝描述<span>4.7</span> 
                    <span v-if="true" class="height">高</span>
                    <span v-else-if="false" class="middle">中</span>
                    <span v-else class="low">低</span>
                </div>
                <div>卖家服务<span>3.7</span> 
                    <span v-if="false" class="height">高</span>
                    <span v-else-if="true" class="middle">中</span>
                    <span v-else class="low">低</span>
                </div>
                <div>物流服务<span>2.7</span> 
                    <span v-if="false" class="height">高</span>
                    <span v-else-if="false" class="middle">中</span>
                    <span v-else class="low">低</span>
                </div>
            </div>
        </div>
        <div class="detailContent">
            <span class="img"></span><span>详情</span>
        </div>
        <ul class="detailImg">
            <li v-for="(item,index) in info.detailImg" :key="index">
                <img v-lazy="item" alt="">
            </li>
        </ul> 
        <div class="recommend">
            <img src="./assets/images/hand-o-down.png" alt="">  为您推荐
        </div>
        <div class="suggestList" ref="wrapper">
            <pro-list :list="proList" @loadData="loadMore" :type="isLine"></pro-list>
            <Spinner  :show="loading"></Spinner>
        </div>
        <div class="operate">
            <div class="small">
                <router-link tag="div" to="/">
                    <span class="shop"></span>店铺
                </router-link>
                <router-link tag='div' :to="{name:'cart'}">
                    <span class="cart"></span>购物车
                </router-link>
                <div @click="collect">
                    <span class="star" :class="{collected:isCollected}"></span>收藏
                </div>
            </div>
            <div class="btn">
                <div class="addToCart" @click="addToCart">加入购物车</div>
                <div class="buy" @click="buy">立即购买</div>
            </div>
        </div>
  </div>
</template>
<style lang="less" scoped>
    @import "./assets/base.less";
    .detail{
        // height: auto;
        padding: 40px 0 52px 0;
        box-sizing: border-box;
    }
    .swiper{
        position: relative;
        height: 100vw;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .page{
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
    .price{
            width: 100%;
            padding: 10px 5px 0;
            box-sizing: border-box;
            color: @font-red;
            font-size: 18px;
            span{
                font-size: 14px;
            }
            del{
                font-size: 14px;
                color: @gray-text;
                margin-left: 5px;
            }
    }
    .title_share{
        display: flex;
        flex-direction: row;
        padding: 5px;
        box-sizing: border-box;
        .title{
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 14px;
            height: 40px;
            line-height: 20px;
            padding: 0 4px 0 0;
        }
        .share{
            display: flex;
            align-items: center;
            color: @gray-text;
            font-size: 12px;
            &:after{
                content:'';
                display:inline-block;
                width: 20px;
                height: 20px;
                background: url('../static/images/money.png') no-repeat center center/cover;
            }
        }
    }
    .mint-popup{
        width: 100%;
    }
    .attach_info{
        font-size: 12px;
        color: @gray-text;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 5px 10px;
        box-sizing: border-box;
    }
    .operate{
        display: flex;
        flex-direction: row;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 5px 0;
        box-sizing: border-box;
        border-top: 1px solid @border-color;
        background: #fff;
        .small{
            display: flex;
            flex-direction: row;
            flex: 1;
            div{
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                color: @font-light-color;
                span{
                    width: 20px;
                    height: 20px;
                    &.shop{
                        background: url('../static/images/shop.png') no-repeat center center/cover;
                    }
                    &.cart{
                        background: url('./assets/images/cart.png') no-repeat center center/cover;
                    }
                    &.star{
                        background: url('../static/images/star.png') no-repeat center center/cover;
                    }
                    &.collected{
                        background: url('../static/images/stared.png') no-repeat center center/cover;
                    }
                }
            }
        }
        .btn{
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding-right: 2%;
            box-shadow: border-box;
            margin-top: 5px;
            div{
                line-height: 36px;
                width: 50%;
                text-align: center;
                color: #fff;
                font-size: 12px;
            }
            .addToCart{
                border-top-left-radius: 18px;
                border-bottom-left-radius: 18px;
                background: linear-gradient(to right,rgb(241, 182, 72),rgb(247, 140, 0));
            }
            .buy{
                border-top-right-radius: 18px;
                border-bottom-right-radius: 18px;
                background: linear-gradient(to right,rgb(243, 107, 43),red);
            }
        }
    }   
    .navto{
        display: flex;
        justify-content: space-between;
        padding: 10px 5px ;
        box-sizing: border-box;
        font-size: 12px;
        div{
            display: flex;
            align-items: center;
            color: orangered;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                background: url('../static/images/arrow-right.png') no-repeat center center/cover;
            }
        }
    }
    .aJudge{
        padding: 0 5px 10px;
        box-sizing: border-box;
        .head{
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            img{
                width: 25px;
                height: 25px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }
        .content{
            font-size: 12px;
            display: -webkit-box;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 15px;
            height: 30px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:2;
        }
    }
    .shop{
        padding: 5px;
        box-sizing: border-box;
        .top{
            display: flex;
            justify-content: space-between;
            .name{
                display: flex;
                align-items: center;
                img{
                    width: 60px;
                    height: 60px;
                    margin-right: 5px;
                }
            }
            .jump{
                display: flex;
                align-items: center;
                span{
                    display: inline-block;
                    line-height: 24px;
                    height: 24px;
                    border: 1px solid orangered;
                    font-size: 12px;
                    padding: 0 10px;
                    border-radius: 12px;
                    color: orangered;
                    &.goShop{
                        color: #fff;
                        background: linear-gradient(to right, #f78c00, orangered);
                        margin-left: 10px;
                    }
                }
            }
        }
        .score{
            display: flex;
            justify-content: space-around;
            font-size: 12px;
            padding: 15px 0 5px;
            box-sizing: border-box;
            div{
                color: #999;
                span{
                    color: orange;
                    &.height{
                        color: orangered
                    }
                    &.middle{
                        color: #f78c00;
                    }
                    &.low{
                        color: green;
                    }
                    &:nth-child(1){
                        color: red;
                        margin: 0 5px;
                    }
                }
            }
        }
    }
    .detailContent{
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #eee;
        color: #707070;
        font-size: 0;
        span.img{
            display: inline-block;
            width: 19px;
            height: 19px;
            background: url(../static/images/img.png) no-repeat center center/cover;
        }
        span{
            font-size: 14px;
        }
    }
    .detailImg img{
        width: 100%;
    }
</style>
<script>
    import headerBar from './components/headerBar'
    import shareBox from './components/share'
    import Spinner from './components/loading'
    import ProList from './components/proList'
    import Service from './components/service'
    import Format from './components/format'
    import Arguments from './components/arguments'
    import store from './vuex/store'
    export default{
        data(){
            return {
                id:'',
                index:1,
                total:0,
                banner:[
                    'http://img2.imgtn.bdimg.com/it/u=2592291942,1465121090&fm=27&gp=0.jpg',
                    'http://img3.imgtn.bdimg.com/it/u=1508375298,1704816399&fm=200&gp=0.jpg',
                    'http://img5.imgtn.bdimg.com/it/u=118515751,3058693864&fm=27&gp=0.jpg'
                ],
                info:{
                    price:'20.89',
                    oldPrice:'30.89',
                    title:'何先生的儿子居然从火锅中捞出一块干电池，于是马上通知何先生过来。',
                    diliver:'10.00',
                    sold:30,
                    locate:'北京',
                    argument:[
                        {
                            title:'产品等级',
                            content:'合格品'
                        },
                        {
                            title:'制作工艺',
                            content:'范鸥'
                        },
                        {
                            title:'填充纤维种类',
                            content:'聚酯纤维(中空)'
                        },
                        {
                            title:'尺寸',
                            content:'爱啦啦啦啦啦啦啦呵呵呵呵呵呵呵嘻嘻嘻嘻嘻嘻鹅鹅鹅鹅鹅鹅'
                        },
                    ],
                    service:{
                        basic:[
                            {
                                title:'7天无理由',
                                content:'呵呵呵呵呵呵呵呵呵呵呵，呵呵呵呵呵呵呵呵呵呵呵'
                            },
                            {
                                title:'运费险',
                                content:''
                            },
                            {
                                title:'72小时发货',
                                content:''
                            }
                        ],
                        others:[
                            {
                                title:'信用卡支付',
                                content:''
                            },
                            {
                                title:'蚂蚁花呗',
                                content:''
                            },
                            {
                                title:'集分宝',
                                content:''
                            }
                        ]
                    },
                    format:{
                        defaultImg:'http://img2.imgtn.bdimg.com/it/u=2592291942,1465121090&fm=27&gp=0.jpg',
                        price:'20~60',
                        kucun:'5000',
                        formatList:[
                            {   
                                key:'size',
                                title:'尺寸',
                                array:[
                                    {
                                        type_id:'1',
                                        text:'150x200cm'
                                    },
                                    {
                                        type_id:'2',
                                        text:'200x220cm'
                                    },
                                    {
                                        type_id:'3',
                                        text:'150x200cm'
                                    }
                                ]
                            },
                            {
                                key:'color',
                                title:'颜色',
                                array:[
                                    {
                                        type_id:'1',
                                        text:'红色'
                                    },
                                    {
                                        type_id:'2',
                                        text:'蓝色'
                                    },
                                    {
                                        type_id:'3',
                                        text:'白色'
                                    }
                                ]
                            }
                        ]
                    },
                    comment:{
                        num:1009,
                    },
                    detailImg:[
                        'http://img2.imgtn.bdimg.com/it/u=3543301288,4244970488&fm=200&gp=0.jpg',
                        'http://img4.imgtn.bdimg.com/it/u=2110053135,372039517&fm=27&gp=0.jpg',
                        'http://img3.imgtn.bdimg.com/it/u=1874323479,3749223946&fm=200&gp=0.jpg'
                    ]
                },
                share_popup_value:false,
                isCollected:false,
                loading:true,
                isLine:false,
                proList:[
                    {
                    id:1,
                    pic:'https://images.ouyiku.com//files/product/20180105/server_151514047184.png',
                    name:' 西域美农_金枕头榴莲冻干35g',
                    price:'5.1',
                    oldPrice:'111.23'
                    },
                    {
                    id:2,
                    pic:'https://images.ouyiku.com//files/product/20180105/server_151514656792.png',
                    name:'百草味-兰花豆210g',
                    price:'999.88',
                    oldPrice:'111.23'
                    },
                    {
                    id:3,
                    pic:'https://images.ouyiku.com//files/product/20180105/server_15151469767.png',
                    name:'百草味-黄桃干100g ',
                    price:'10',
                    oldPrice:'20'
                    },
                    {
                    id:4,
                    pic:'https://images.ouyiku.com//files/product/20180105/server_151514099172.png',
                    name:'百草味-巴旦木180g ',
                    price:'33.88',
                    oldPrice:'22.23'
                    }
                ],
                limit:3
            }
        },
        mounted(){
            this.id = this.$route.query.id.toString();
            this.total = this.banner.length;
        },
        computed:{
        },  
        methods:{
            handleChange(index){
                this.index = index+1;
            },
            share_popup(){
                this.share_popup_value = true;
            },
            addToCart(){
                //未选择规格时
                if(this.$store.state.choosed.length!==this.info.format.formatList.length){
                    console.log('未选择规格');
                    //调用子组件的方法
                    this.$refs.formatDom.popup('addToCart');
                }else{
                    console.log('已选择规格');
                    //世界加入购物车的操作
                    console.log('加入购物车')
                }
            },
            buy(){
                 //未选择规格时
                if(this.$store.state.choosed.length!==this.info.format.formatList.length){
                    console.log('未选择规格');
                    //调用子组件的方法
                    this.$refs.formatDom.popup('buy');
                }else{
                    console.log('已选择规格');
                    //世界加入购物车的操作
                    console.log('立即购买跳转')
                }
            },
            collect(){
                this.isCollected = !this.isCollected;
            },
            loadMore(){
                if(this.limit>0){
                    setTimeout(() => {
                        this.loading = true;
                    this.proList = this.proList.concat(this.proList);
                    }, 1000);
                }else{
                    this.loading = false;
                }
                this.limit--;
            }
        },
        components:{
            headerBar,
            shareBox,
            Spinner,
            ProList,
            Service,
            Format,
            Arguments
        }
    }
</script>