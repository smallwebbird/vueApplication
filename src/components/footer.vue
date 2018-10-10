<template>
 <div class='footer'>
    <router-link to="/hello" @click.native="pictureStore">图片资源管理器</router-link>
    <router-link to="/world" @click.native="fileStore">文件资源管理器</router-link>
 </div>    
</template>
<script>
 export default{
     name:'footer',
     methods:{
         pictureStore: function(){
             this.$emit('change-picture','pictures');
         },
         fileStore: function(){
             this.$emit('change-file','files');
         }
     }
 }    
</script>