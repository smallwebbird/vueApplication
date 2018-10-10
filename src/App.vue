<template>
 <div id='app' @addPic='addPic'>
  <Header @addPic='addPic'></Header>
  <Content :obj='obj'></Content>
  <Footer></Footer>
 </div>    
</template>
<script>
import Header from './components/header.vue';
import Content from './components/content.vue';
import Footer from './components/footer.vue';
import '../public/css/style';
    export default {
        name: 'App',
        components:{Header, Content, Footer},
        data(){
            return {
                obj:{}
            }
        },
        methods:{
            addPic:function(obj){
                this.obj = obj;
            }
        }
    }
</script>
