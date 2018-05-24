<template >
  <div class="home">
    <mt-header fixed title="tittle"></mt-header>
    <router-link :to="{name:'search'}">
      <mt-search></mt-search>
    </router-link>
    <div class="banner">
      <mt-swipe :auto="bannerTime">
        <mt-swipe-item v-for="(item,index) in banner" :key="index">
          <img v-lazy="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="navbar clear">
      <router-link :to="{path:item.path}" v-for="(item,index) in navBar" :key="index">
        <span><img :src=item.pic alt=""></span>
        {{item.text}}
      </router-link>
    </div>
    <div class="picNav">
      <router-link tag="div" class="left" :to="{name:'home'}">
        <img src="./assets/images/server_147711793875.jpg" alt="">
      </router-link>
      <div class="right">
        <router-link :to="{name:'home'}">
          <img src="./assets/images/server_149431643085.png" alt="">
        </router-link>
        <router-link :to="{name:'home'}">
          <img src="./assets/images/server_149431646556.png" alt="">
        </router-link>
      </div>
    </div>
    <div class="recommend">
      <img src="./assets/images/hand-o-down.png" alt="">  为您推荐
    </div>
    <div class="suggestList" ref="wrapper">
      <pro-list :list="proList" @loadData="loadMore" :type="isLine"></pro-list>
      <Spinner :show="loading"></Spinner>
    </div>
  </div>
</template>

<script>
// import Spinner from './components/loading'
// import ProList from './components/proList'
export default {
  name: 'Home',
  data () {
    return {
      bannerTime:4000,
      banner:[
        'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t19546/22/1772795591/377815/a9e9bc55/5ad868ffN42c0ff01.jpg!cr_1125x549_0_72!q70.jpg',
        'https://img1.360buyimg.com/da/s640x312_jfs/t19528/171/1747811131/177301/b9827dc1/5ad84573N775e948f.jpg!cr_1125x549_0_72.dpg',
        'https://m.360buyimg.com/mobilecms/s640x312_jfs/t17533/53/1818585457/138728/3f7065cc/5ad82e53Na052a0fc.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      ],
      navBar:[
        {
          path:'/',
          text:'热卖精选',
          pic:require('./assets/images/home_hot_selection_ico@2x.png')
        },
        {
          path:'/',
          text:'Top榜单',
          pic:'./static/images/home_top_list_ico@2x.png'
        },
        {
          path:'/',
          text:'服务',
          pic:require('./assets/images/home_hot_selection_ico@2x.png')
        },
        // {
        //   path:'',
        //   text:'拼团',
        //   pic:require('./assets/images/home_hot_selection_ico@2x.png')
        // },
        {
          path:'',
          text:'义卖',
          pic:'./static/images/home_mid_Autumn_activities@2x.png'
        },
        {
          path:'/',
          text:'抽奖',
          pic:'./static/images/home_free_lucky_draw_ico@2x.png'
        },
      ],
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
      loading:true,
      isLine:false,
      limit:4
    }
  },
  methods:{
    loadMore(){
      if(this.limit>0){
          this.loading = true;
          this.proList = this.proList.concat(this.proList);
          this.limit--;
      }else{
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
      
    }
  },
  components:{
    // Spinner:() => import('./components/loading'),
    // ProList:() => import('./components/proList'),
    Spinner:(resolve) => require(['./components/loading'],resolve),
    ProList:(resolve) => require(['./components/proList'],resolve)
    // Spinner,
    // ProList
  },
  mounted(){
    // this.$ajax({
    //   url:'api/comments',
    //   method:'get'
    // }).then(function(res){
    //   console.log(res.data)
    // }).catch(function(err){
    //   console.log(err)
    // })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import "./assets/base.less";
  .home{
    padding: 40px 0 56px 0;
  }
  .container{
    height: 100px;
  }
  .mint-search{
    height: 52px;
  }
  .mint-header.is-fixed{
    z-index: 1000;
  }
  .banner{
    height: 184px;
  }
  .mint-swipe-item img{
    width: 100%;
    height: 100%;
  }
  .navbar{
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: -6px;
    position: relative;
    padding: 10px 0 0;
    box-sizing: border-box;
    a{
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 20%;
      margin-bottom: 5px;
      color: #686868;
      font-size: 12px;
    }
  }
  .navbar a span{
    display: inline-block;
    width: 60%;
    height: 60%;
    max-width: 75px;
      img{
        width: 100%;
        height: 100%;
      }
  }
  .picNav{
    font-size: 0;
    .left{
      display: inline-block;
      width: 38%;
    }
    .right{
      display: inline-block;
      width: 62%;
    }
     img{
      width: 100%;
    }
  }
  @media screen and (min-width:768px) {
    .banner{
      height: 330px;
    }
  }
</style>
