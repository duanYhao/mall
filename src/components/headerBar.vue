<template>
  <div class="search">
        <mt-header :title="title">
            <div @click="goBack" slot="left">
            <mt-button icon="back">返回</mt-button>
            </div>
            <mt-button v-if="showMenu" @click="popup" icon="more" slot="right"></mt-button>
        </mt-header>
        <!-- <div class="menu" :class="{show:popupVisible}">
            menu
        </div> -->
    </div>
</template>
<style lang="less" scoped>
    .search{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index:1000;
    }
    .mint-header{
        z-index: 1000;
    }
    // .menu{
    //     position: fixed;
    //     top: 0;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    // }

</style>
<script>
    export default{
        data(){
            return{
                popupVisible:false
            }
        },
        props:[
            'title','showMenu'
        ],
        methods:{
            goBack(){
                this.$router.go(-1)
            },
            popup(){
                this.popupVisible = true;
            }
        }
    }
</script>