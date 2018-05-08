import Vue from 'vue'

Vue.filter('before',function(value){
    return value.split('.')[0]
})

Vue.filter('after',function(value){
    let after = value.split('.')[1];
    if(parseInt(after)>0){
        parseInt(after)<10 && (after = after+'0');
        return '.' + after
    }else{
        return '.00'
    }
})