<template>
  <div class="reckoning">
    <header-bar title="结算" :showMenu=true></header-bar>
    <div class="address">
        <div class="person">
            收货人:嘿嘿嘿 <span>12345678910</span>
        </div>
        <div class="location">
            收货地址:
        </div>
    </div>
    <div class="divider"></div>
    <footer>
       <div class="total">合计:<span><b>￥</b>174.00</span></div>
       <div class="submit">提交订单</div>
    </footer>
  </div>
</template>
<style lang="less" scoped>
    @import './assets/base.less';
    .reckoning{
        padding: 40px 0 60px;
        box-sizing: border-box;
    }
    .address{
        position: relative;
        padding: 20px 40px 20px 50px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        &:before,&:after{
            content: '';
            position: absolute;
            width: 26px;
            height: 26px;
            top: 50%;
            left: 15px;
            margin-top: -13px;
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url('../static/images/locate.png')
        }
        &:after{
            width: 24px;
            height: 24px;
            left: auto;
            right: 8px;
            margin-top: -12px;
            background-image: url('../static/images/arrow-right.png');
        }
        .person{
            line-height: 22px;
            margin-bottom: 10px;
            span{
                float: right;
            }
        }
        .location{
            width: 100%;
            font-size: 12px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:2;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 14px;
            max-height: 28px;
        }
    }
    footer{
        position: fixed;
        height: 48px;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        .submit{
            width: 30%;
            text-align: center;
            line-height: 48px;
            background-color: #e93b3d;
            color: #fff;
        }
        .total{
            flex: 1;
            line-height: 48px;
            font-size: 16px;
            text-align: right;
            border-top: 1px solid #eee;
            padding-right: 20px;
            box-sizing: border-box;
            span{
               color: @font-red;
            }
            b{
                font-size: 12px
            }
        }
    }
</style>
<script>
     import headerBar from './components/headerBar'
    export default{
        name:'reckoning',
        data(){
            return {
                
            }
        },
        components:{
            headerBar
        }
    }
</script>