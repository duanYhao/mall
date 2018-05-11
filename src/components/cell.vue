<template>
  <div class="cell">
      <span class="label">{{type}}</span>
      <span class="content">{{content}}</span>
      <span class="icon"></span>
  </div>
</template>
<style lang="less" scoped>
    @import "../assets/base.less";
    .cell{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;
        color: #333;
        padding: 10px 5px;
        box-sizing: border-box;
        .label{
            color: @gray-text;
            margin-right: 10px;
        }
        .content{
            flex: 1;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .icon{
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('../../static/images/arrow-right.png') no-repeat center center/cover;
        }
    }
</style>
<script>
    export default{
        name:'cell',
        props:['type','content']
    }
</script>