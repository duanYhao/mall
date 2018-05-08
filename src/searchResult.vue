<template>
  <div class="searchResult">
    <header-bar :title="title" :showMenu='true'></header-bar>
    <div class="order">
      <div :class="{active:orderBy==='price',up:isUp,down:!isUp}" @click="order('price')">价格</div>
      <div :class="{active:orderBy==='sold',up:isUp,down:!isUp}" @click="order('sold')">销量</div>
      <div class="icon" @click="changeType"><span :class="{line:isLine}"></span></div>
    </div>
      <pro-list :list="proList" @loadData="loadMore" :type="isLine"></pro-list>
      <Spinner v-show="loading"></Spinner>
  </div>
</template>
<style lang="less" scoped>
  @import "./assets/base.less";
  .searchResult{
    padding-top: 81px;
  }
  .order{
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    background: #fdfdfd;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    div{
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .icon span{
      display: inline-block;
      width: 22px;
      height: 22px;
      background: url('../static/images/line.png') no-repeat center center/contain;
      &.line{
        background-image: url('../static/images/cell.png')
      }
    }
    .active{
      color: @font-red;
      &::after{
        content: '';
        display: inline-block;
        width: 10px;
        height: 14px;
        margin-left: 5px;
      }
      &.up:after{
        background: url('../static/images/cc-arrow-up.png') no-repeat center center/cover;
      }
      &.down:after{
        background: url('../static/images/cc-arrow-down.png') no-repeat center center/cover;
      }
    }
  }
  li{
    line-height: 50px;
    img{
      width: 50px;
      height: 50px;
    }
    .price{
      color: @font-red;
      padding: 0 4px;
      span{
        font-size: 12px;
      }
      .sold{
        color: #ccc;
      }
    }
  }
</style>
<script>
  import ProList from './components/proList'
  import Spinner from './components/loading'
  import HeaderBar from './components/headerBar'
    export default{
        data(){
          return{
            key:'',
            num:10,
            proList:[
              {
                id:1,
                pic:'https://images.ouyiku.com//files/product/20180105/server_151514047184.png',
                name:' 西域美农_金枕头榴莲冻干35g 西域美农_金枕头榴莲冻干35g 西域美农_金枕头榴莲冻干35g 西域美农_金枕头榴莲冻干35g ',
                price:'5.1',
                sold:'99',
                locate:'上海'
              },
              {
                id:2,
                pic:'https://images.ouyiku.com//files/product/20180105/server_151514656792.png',
                name:'百草味-兰花豆210g',
                price:'999.88',
                oldPrice:'111.23',
                sold:'66',
                locate:'北京'
              },
              {
                id:3,
                pic:'https://images.ouyiku.com//files/product/20180105/server_15151469767.png',
                name:'百草味-黄桃干100g 百草味-黄桃干100g 百草味-黄桃干100g 百草味-黄桃干100g 百草味-黄桃干100g 百草味-黄桃干100g ',
                price:'10',
                sold:'199',
                locate:'厦门'
              },
              {
                id:4,
                pic:'https://images.ouyiku.com//files/product/20180105/server_151514099172.png',
                name:'百草味-巴旦木180g 百草味-巴旦木180g百草味-巴旦木180g',
                price:'33.88',
                oldPrice:'22.23',
                sold:'299',
                locate:'贵州'
              }
            ],
            loading:false,
            isLine:false,
            orderBy:'',
            isUp:false,
            title:''
          }
        },
        mounted(){
          this.key = this.$route.query.key
          this.title = this.$route.query.key
        },
        methods:{
          loadMore(){
            this.loading = true;
            this.proList = this.proList.concat(this.proList)
          },
          changeType(){
            this.isLine = !this.isLine;
          },
          order(key){
            this.orderBy = key;
            if(this.orderBy===key){
              this.isUp = !this.isUp
            }
          }
        },
        components:{
          ProList,
          Spinner,
          HeaderBar
        }
    }
</script>