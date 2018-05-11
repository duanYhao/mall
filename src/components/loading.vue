<template>
    <div>
         <div class="spinner" v-if="show">
            <mt-spinner type="fading-circle"  color="#26a2ff"></mt-spinner><span>加载中...</span>
        </div> 
        <div class="spinner" v-else>no more</div>
    </div>
</template>
<style lang="less" scoped>
    .spinner{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        color: #999;
        span{
            margin-right: 10px;
        }
    }
</style>
<script>
    export default{
        name:'spinner',
        props:['show']
    }
</script>
