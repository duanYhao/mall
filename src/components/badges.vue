<template>
    <div class="tag">
        <mt-badge size="small" color="#888"  v-for="(item,index) in array" :key="index" @click.native="search(item)">{{item}}</mt-badge>
    </div>
</template>
<style lang='less' scope>
    .tag{
        padding: 0 10px;
        border-bottom: 1px solid #ddd;
        span{
            margin:0 10px 10px 0;
        }
    }
</style>
<script >
    export default{
        name:'badges',
        props:['array'],
        data(){
            return{
                keywords:''
            }
        },
        methods:{
            search(item){
                this.$emit('search',{keywords:item})
            }
        }
    }
</script>