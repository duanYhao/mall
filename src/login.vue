<template>
  <div class="login">
        <header-bar title="登陆"></header-bar>
        <mt-navbar v-model="selected">
            <mt-tab-item id="acount">账号密码登陆</mt-tab-item>
            <mt-tab-item id="message">短信验证码登陆</mt-tab-item>
        </mt-navbar>
        <div v-show="selected==='acount'">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </div>
        <div v-show="selected==='message'">
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="验证码" v-model="captcha">
                <div v-show="!isGetPro" class="proCode" @click="getPro">获取验证码</div>
                <div v-show="isGetPro" class="proCode" >倒计时{{count}}秒</div>
            </mt-field>
        </div>
        <div class="btn">
            <mt-button type="default" size="large" @click="getLogin">登陆</mt-button>
        </div>
        <div class="set">
            <router-link class="lock" tag="span" to="/">忘记密码</router-link>
            <router-link class="phone" tag="span" to="/">手机快速注册</router-link>
        </div>
  </div>
</template>
<style lang="less" scoped>
    .login{
        padding:40px 0 0;
        box-sizing: border-box;
        .btn{
            padding: 0 20px;
            box-sizing: border-box;
            margin-top: 20px;
            font-size: 14px;
        }
        .set{
            font-size: 12px;
            color: #999;
            display: flex;
            justify-content: space-between;
            padding: 20px;
            box-sizing: border-box;
            span{
                position: relative;
                padding-left: 20px;
                &:before{
                    content: '';
                    position: absolute;
                    top:50%;
                    left: 0;
                    width: 20px;
                    height: 20px;
                    margin:-10px 0 0 0;
                }
                &.lock:before{
                    background: url('../static/images/lock.png') no-repeat center center/cover;
                }
                &.phone:before{
                    background: url('../static/images/phone.png') no-repeat center center/cover;
                }

            }
        }
    }
    .mint-field-other .proCode{
        padding: 10px 5px;
        background: #eee;
        box-sizing: border-box;
        font-size: 14px;
    }
</style>
<script>
    import headerBar from './components/headerBar'
    import {mapMutations} from 'vuex'
    export default{
        name:'login',
        data(){
            return{
                selected:'acount',
                username:'',
                password:'',
                phone:'',
                captcha:'',
                count:10,
                isGetPro:false
            }
        },
        methods:{
            // ...mapMutations(['getLogin']),
            getLogin(){
                this.$store.state.isLogin = true;
                sessionStorage.setItem('isLogin',true);
                this.$router.go(-1);
            },
            login(){
                console.log('login');
            },
            getPro(){
                if(!this.isGetPro){
                    this.isGetPro = true;
                    let t = setInterval(()=>{
                        if(this.count!=0){
                            this.count--;
                        }else{
                            this.isGetPro = false;
                            this.count = 10;
                            clearInterval(t)
                        }
                    },1000)
                }
            }
        },
        components:{
            headerBar
        }
    }
</script>