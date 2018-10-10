<template>
 <div class='content'>
    <picture-div
    v-for='pic in pics'
    :key='pic.id'
    :pic='pic'
    @delete='deleteImg'></picture-div>
 </div>    
</template>
<script>
import Vue from 'vue';
Vue.component('picture-div',{
    props:['pic'],
    template:`
    <div>
        <img :src="pic.url"/>
        <span>{{pic.name}}</span>
        <button @click='$emit("delete",pic.id)'>删除</button>
    </div>`
})
 export default{
     name:'content',
     props:{
         obj:{
             type:Object,
             require:true
         }
     },
     data(){
         return{
             pics:[
                 {
                     name:'one',
                     url:require('../../public/pictures/a.jpg'),
                     id:0
                 },
                 {
                     name:'two',
                     url:require('../../public/pictures/b.jpg'),
                     id:1
                 }
             ],
         }
     },
     methods:{
         deleteImg:function(id){
             let deleteIndex = this.pics.findIndex(function(value, index, arr){
                 return value.id === id;
             });
             this.pics.splice(deleteIndex,1);
         }
     },
     watch:{
         obj:function(val){
             let picObj = {};
             if(val.name != ''&&val.url!=''&&val.id!=''){
                 picObj.name = val.name;
                 picObj.url = require('../../public/pictures/'+val.url);
                 alert(picObj.name)
                 this.pics.push(picObj);
             }
         }
     }
 }    
</script>