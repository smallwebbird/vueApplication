<template>
 <div class='header'>
  <div class='name'>
    <span>请输入Name</span>
    <input type='text'  v-model="name"/>
  </div>
  <div class="url">
    <span>请输入Url</span>
    <input type="text" v-model="url" />
  </div>
  <div class="id">
     <span>请输入Id</span>
     <input type="text" v-model="id" />
  </div>
    <button @click='add'>增加</button>
 </div>    
</template>
<script>
 export default{
     name:'header',
     data(){
       return {
         name:'',
         url:'',
         id:0,
       }
     },
     methods:{
       add:function(){
         let obj = {};
         obj.name = this.name;
         obj.url = this.url;
         obj.id = this.id;
         this.$emit('addPic',obj);
       }
     }
 }    
</script>