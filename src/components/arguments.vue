<template>
  <div class="service">
        <cell type="参数" content="呵呵呵呵" @click.native="popup"></cell>
        <mt-popup v-model="popupVisible" position="bottom">
            <p>产品参数</p>
            <div class="wrapper">
                <div class="item" v-for="item in argument" :key="item.title">
                    <span class="title">{{item.title}}</span><span class="content">{{item.content}}</span>
                </div>
            </div>
            <div class="btn" @click="close">完成</div>
        </mt-popup>
  </div>
</template>
<style lang="less" scoped>
.mint-popup{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    p{
        line-height: 60px;
        text-align: center;
        color: #333;
    }
    .wrapper{
        flex: 1;
        padding: 0 10px;
        .item{
            display: flex;
            flex-direction: row;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            .title{
                text-align: left;
                width: 68px;
                margin-right: 10px;
            }
            .content{
                flex: 1;
                color: #999;
            }
        }
    }
    .btn{
        width: 90%;
        margin: 5px auto;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: linear-gradient(to right,orange,orangered);
        border-radius: 20px;
    }
}
</style>
<script>
    import Cell from './cell'
    export default{
        name:'arguments',
        props:{
            argument:{
                type:Array
            }
        },
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