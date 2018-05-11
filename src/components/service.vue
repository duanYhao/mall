<template>
  <div class="service">
        <cell type="服务" content="呵呵呵呵" @click.native="popup"></cell>
        <mt-popup v-model="popupVisible" position="bottom">
            <div class="wrapper">
                <div class="title">基础服务</div>
                <div class="item" v-for="item in service.basic" :key="item.title">
                    <div class="icon"><span></span></div>
                    <div class="right">
                        <p class="item_title">{{item.title}}</p>
                        <div class="content">{{item.content}}</div>
                    </div>
                </div>
                <div class="title">其他</div>
                <div class="item" v-for="item in service.others" :key="item.title">
                    <div class="icon"><span></span></div>
                    <div class="right">
                        <p class="item_title">{{item.title}}</p>
                        <div class="content">{{item.content}}</div>
                    </div>
                </div>
            </div>
            <div class="btn" @click="close">完成</div>
        </mt-popup>
  </div>
</template>
<style lang="less" scoped>
@import "../assets/base.less";
.mint-popup {
    width: 100%;
    height: 60%;
    padding:10px 0 40px;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 14px;
    .wrapper{
        height: 100%;
        overflow-y: auto;
        padding:0 20px;
        box-sizing: border-box;
    }
    .title{
        color: #333;
        padding: 10px 0;
        text-align: center;
        margin-bottom: 20px;
    }
    .btn{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        line-height: 40px;
        color: #fff;
        background: linear-gradient(to right,orange,orangered);
        text-align: center;
        font-size: 14px;
    }
}
.item{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    .icon{
        display: flex;
        align-items: flex-start;
        margin-right: 20px;
        span{
            width: 20px;
            height: 20px;
            background: url('../../static/images/choose.png') no-repeat center center/cover;
        }
    }
    .right{
        text-align: left;
        color: #999;
        .item_title{
            font-size: 14px;
        }
        .content{
            font-size: 12px;
        }
    }
}
</style>
<script>
    import Cell from './cell'
    export default{
        name:'service',
        props:['service'],
        data(){
            return{
                popupVisible:false
            }
        },
        methods:{
            popup(){
                this.popupVisible = true;
            },
            close(){
                this.popupVisible = false;
            }
        },
        components:{
            Cell
        }
    }
</script>