<template>
  <div class="test">
      <format :format="format"></format>
        <div class="outer" v-for="(item,index) in ceshiArray" :key="index">
            <div class="title">{{item.title}}</div>
            <span v-for="(item2,index2) in item.array" :key="index2"
                    :class="{choose:item2.selected}"
                    @click="choose(item,index2)">{{item2.text}}--{{item2.selected}}</span>
        </div>
        <div>
            已选： <span v-for="(item,index) in choosed" :key="index">{{item.text}}</span>
        </div>
  </div>
</template>
<style lang="less" scoped>
    .outer span{
        margin-right: 20px;
        border: 1px solid red;
    }
    .choose{
        background: orange;
    }
</style>
<script>
    import Format from './components/format'
import index from 'vue';
    export default{
        name:'test',
        data(){
            return{
                format:{
                    defaultImg:'http://img2.imgtn.bdimg.com/it/u=2592291942,1465121090&fm=27&gp=0.jpg',
                    price:'20~60',
                    kucun:'5000',
                    formatList:[
                        {   
                            title:'尺寸',
                            key:'size',
                            array:[
                                {
                                    type_id:'1',
                                    text:'150x200cm 4.5斤冬被'
                                },
                                {
                                    type_id:'2',
                                    text:'200x220cm 6斤冬被'
                                },
                                {
                                    type_id:'3',
                                    text:'150x200cm 7斤冬被'
                                }
                            ]
                        },
                        {
                            title:'颜色',
                            key:'color',
                            array:[
                                {
                                    type_id:'1',
                                    text:'红色'
                                },
                                {
                                    type_id:'2',
                                    text:'蓝色'
                                },
                                {
                                    type_id:'3',
                                    text:'白色'
                                }
                            ]
                        }
                    ]
                },
                ceshiArray:[],
                choosed:[]
            }
        },
        created(){
            for(let item of this.format.formatList){
                for(let item2 of item.array){
                    item2.selected = false;
                }
            }
            this.ceshiArray = this.format.formatList;
        },
        methods:{
            choose(item,index2){

                //改变选中状态
                for(let i of item.array){
                    i.selected = false;
                }
                item.array[index2].selected = true;
                
                //选中项的类型，名称及id
                let obj = {
                        key:item.key,
                        type_id:item.array[index2].type_id,
                        text:item.array[index2].text
                    }
                console.log(obj)
                this.setArray(this.ceshiArray)

                if(!this.choosed.length){
                    this.choosed.push(obj);
                    this.setArray(this.choosed);
                }else{
                    let has = false;
                    for(let i=0,len=this.choosed.length;i<len;i++){
                        if(this.choosed[i].key===item.key){
                            this.choosed[i].type_id = item.array[index2].type_id;
                            this.choosed[i].text = item.array[index2].text;
                            this.setArray(this.choosed);
                            has=true;
                            continue;
                        }
                    }
                    if(!has){
                        this.choosed.push(obj);
                        this.setArray(this.choosed);
                    }
                }
            },
            setArray(array){
                let tempArray = array;
                array = null;
                array = tempArray;
            }
        },
        components:{
            Format
        }
    }
</script>