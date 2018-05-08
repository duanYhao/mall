<template>
    <div class="main-container">
        <!-- <keep-alive >
            <transition name="slide-left" >
                <router-view v-show="$route.meta.keepAlive"/>
            </transition>
        </keep-alive>
        <transition name="slide-right">
            <router-view v-show="!$route.meta.keepAlive"/>
        </transition> -->
        <transition :name="animate">
            <router-view class="slide"/>
        </transition>
        <tabbar></tabbar>
    </div>
</template>
<style lang="less">
    .main-container{
        padding: 0 0 56px;
        box-sizing: border-box;
    }
    


    
</style>
<script>
    import Tabbar from './components/tabbar'
    export default{
        data(){
            return {
                animate:''
            }
        },
        components:{
            Tabbar
        },
        watch:{
            $route(to,from){
                // console.log(to,from);
                if(to.meta.posi>from.meta.posi){
                    this.animate = 'slide-to-left'
                }else{
                    this.animate = 'slide-to-right'
                }
            }
        }
    }
</script>
