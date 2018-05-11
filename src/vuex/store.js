import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
Vue.use(Vuex)


const state = {
    isLogin:false,
    choosed:[]
}

const mutations = {
    getLogin(state){
        state.isLogin = true;
        sessionStorage.setItem('isLogin',true);
    },
    unLogin(state){
        state.isLogin = false;
        sessionStorage.setItem('isLogin','');
    }
}

const getters = {

}

export default new Vuex.Store({
    state,
    getters,
    mutations
})