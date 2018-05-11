<template>
    <div class="share_box">
        <p>分享到:</p>
        <ul class="clear">
            <li>
                <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3434089220,2852049479&fm=27&gp=0.jpg" alt=""></div>
                <span>微信</span>
            </li>
            <li>
                <div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2449015981,3217486550&fm=27&gp=0.jpg" alt=""></div>
                <span>QQ</span>
            </li>
            <li>
                <div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2225458401,2104443747&fm=27&gp=0.jpg" alt=""></div>
                <span>微博</span>
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
.share_box{
    padding: 10px 5px;
    box-sizing: border-box;
    font-size: 14px;
    p{
        margin-bottom: 10px;
    }
    ul{
        width: 100%;
        overflow-x: scroll;
        li{
            float: left;
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            line-height: 20px;
            div{
                width: 40px;
                height: 40px;
                margin-bottom: 5px;
                border-radius: 10px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
<script>
    export default{
        name:'shareBox'
    }
</script>
