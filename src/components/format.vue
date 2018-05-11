<template>
    <div class="service">
        <cell type="规格" :content="choosedText" @click.native="popup('child')"></cell>
        <mt-popup v-model="popupVisible" position="bottom">
            <div class="header clear">
                <div class="img"><img v-lazy="format.defaultImg" alt=""></div>
                <p class="price">￥{{format.price}}</p>
                <p>库存{{format.kucun}}件</p>
                <p v-if="!choosed.length">
                    <span>请选择</span>
                    <span v-for="(item,index) in chioce" :key="index">{{item}}<span v-if="index!=chioce.length-1">,</span></span>
                </p>
                <p v-if="choosed.length">
                    <span>已选择</span>  
                    <span v-for="(item,index) in choosed" :key="index">{{item.text}}<span v-if="index!=choosed.length-1">,</span></span>
                </p>
                <span class="close" @click="close"></span>
            </div>
            <div class="wrapper">
                <div class="item" v-for="(item,index) in listArray" :key="index">
                   <div class="title">{{item.title}}</div>
                   <div class="content">
                       <mt-badge size="small" :class="{at:item2.selected}" 
                                 v-for="(item2,index2) in item.array" :key="index2"
                                 @click.native="choose(item,index2)">{{item2.text}}</mt-badge>
                   </div>
                </div>
                <div class="buyNum">
                    <span>购买数量</span>
                    <div class="count"><span class="min" @click="min">-</span><span class="num">{{count}}</span><span class="add" @click="add">+</span></div>
                </div>
            </div>
            <div class="operate">
                <div class="btn" v-if="from==='child'">
                    <div class="addToCart" @click="addToCart">加入购物车</div>
                    <div class="buy" @click="buy">立即购买</div>
                </div>
                <div class="btn" v-else>
                    <div class="ensure" @click="ensure">确定</div>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/base.less';
.mint-popup {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60%;
    padding:0 0 5px;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 14px;
    .header{
        position: relative;
        padding: 5px 10px 5px;
        box-sizing: border-box;
        line-height: 22px;
        .img{
            float: left;
            margin: -20px 10px 0 0;;
            width: 30%;
            border: 1px solid #eee;
            padding: 5px;
            background: #fff;
            border-radius: 5px;
            font-size: 0;
            line-height: 0;
            img{
                width: 100%;
            }
        }
        .price{
            color: @font-red;
        }
        .close{
            position: absolute;
            top:10px;
            right: 10px;
            width: 30px;
            height: 30px;
            background: url('../../static/images/icon_cancel.png') no-repeat center center/cover;
        }
    }
    .wrapper{
        flex: 1;
        overflow-y: auto;
        .item{
            padding: 0 10px;
            box-sizing: border-box;
        }
        .title{
            font-size: 14px;
            padding: 10px 0;
            box-sizing: border-box;
        }
        .mint-badge{
            margin:0 10px 10px 0;
            font-size: 12px;
            background: #888;
            &.at{
                background: @font-red;
            }
        }
    }
    .operate{
        .btn{
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
            box-shadow: border-box;
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
            .ensure{
                width: 100%;
                border-radius: 18px;
                letter-spacing: 10px;
                background: linear-gradient(to right,rgb(241, 182, 72),red)
            }
        }
    }
    .buyNum{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 10px;
        box-sizing: border-box;
        line-height: 30px;
        .count{
            span{
                display: inline-block;
                text-align: center;
            }
            .min,.add{
                width: 40px;
                background: #eee;
                color: #999;
            }
            .num{
                width: 40px;
            }
        }
    }
}
</style>
<script>
    import Cell from './cell'
    import store from '../vuex/store'
    export default{
        name:'format',
        props:['format'],
        data(){
            return{
                popupVisible:false,
                count:1,//购买数量
                listArray:[],//选择的规格对象数组
                chioce:[],//可供选择的项目
                choosed:[],//选择了的项目
                choosedText:'请选择规格',
                from:''
            }
        },
        components:{
            Cell
        },
        methods:{
            popup(from){
                this.from = from;
                this.popupVisible = true;
            },
            close(){
                this.popupVisible = false;
            },
            addToCart(){
                if(this.choosed.length===this.listArray.length){
                    console.log('加入购物车')
                }else{
                    console.log('未选好规格')
                }
            },
            buy(){
                if(this.choosed.length===this.listArray.length){
                    console.log('立即购买跳转')
                }else{
                    console.log('未选好规格')
                }
            },
            min(){
                this.count>1 && this.count--;
            },
            add(){
                this.count++
            },
            ensure(){
                if(this.from==='addToCart'){//点击加入购物车进来的
                    console.log('加入购物车')
                }else{//点击立即购买进来的
                    console.log('立即购买')
                }
            },
            choose(item,index){
                //改变选中状态
                for(let i of item.array){
                    i.selected = false;
                }
                item.array[index].selected = true;
                this.setArray(this.listArray)
                //选中项的类型，名称及id
                let obj = {
                        key:item.key,
                        type_id:item.array[index].type_id,
                        text:item.array[index].text
                    }


                // console.log(this.choosed)

                //添加选择的规格到数组
                if(!this.choosed.length){
                    this.choosed.push(obj);
                    this.setArray(this.choosed);
                }else{
                    let has = false;
                    //是否已经添加过点击的规格的类型的规格，有则改变规格的名称及标志
                    for(let i=0,len=this.choosed.length;i<len;i++){
                        if(this.choosed[i].key===item.key){
                            this.choosed[i].type_id = item.array[index].type_id;
                            this.choosed[i].text = item.array[index].text;
                            this.setArray(this.choosed);
                            has=true;
                            continue;
                        }
                    }
                    //没有添加过相同类型的规格，责放入数组
                    if(!has){
                        this.choosed.push(obj);
                        this.setArray(this.choosed);
                    }
                }
                //选择规格后显示的字
                if(this.choosed.length===this.listArray.length){
                    this.choosedText = '';
                    for(let i of this.choosed){
                        this.choosedText += i.text+ ' '
                    }
                }
                //规格存到vuex
                this.$store.state.choosed = this.choosed;
            },
            setArray(array){
                let tempArray = array;
                array = null;
                array = tempArray;
            }
        },
        mounted(){
            //获得可供选择的项目,添加selected字段表示是否选中状态
            for(let item of this.format.formatList){
                this.chioce.push(item.title)
                for(let item2 of item.array){
                    item2.selected = false;
                }
                this.listArray.push(item);
                // console.log(this.listArray)
            }
        },
        created(){
            //await   async
            async function fn () {
                return 30
            }
            // console.log(fn())
            fn().then(res=>{
                console.log(res)
            })


            let foo = () => {
                return new Promise((resolve,reject) => {
                    resolve(20);
                })
            }
            let bar = async ()=>{
                let t = await foo();
                // console.log(t)
            }
            bar()



            function aa(){
                return new Promise((resolve,reject)=>{
                     setTimeout(() => {
                        resolve('want-value')
                    }, 1000);
                })
               
            }
            const getVal = async ()=>{
                const val = await aa();
                // console.log(val)
            }
            getVal()
        }
    }
</script>