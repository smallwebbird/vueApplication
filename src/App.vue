<template>
 <div id='app' @addPic='addPic'>
  <Header @addPic='addPic' v-if="changeTo === 'pictures'"></Header>
  <fileheader v-else></fileheader>
  <Content :obj='obj' v-if="changeTo === 'pictures'"></Content>
  <filecontent v-else></filecontent>
  <Footer @change-picture='changePicture' @change-file='changeFile'></Footer>
 </div>    
</template>
<script>
import Vue from 'vue';
const Header = () => import(/* webpackChunkName:'importComponent' */ './components/header.vue');
const Content = () =>import(/* webpackChunkName:'importComponent' */ './components/content.vue');
const Footer = () =>import(/* webpackChunkName:'importComponent' */ './components/footer.vue');
const fileheader = () => import(/* webpackChunkName:'importComponent' */ './components/fileHeader.vue');
const filecontent = () => import(/* webpackChunkName:'importComponent' */ './components/fileContent.vue');
import '../public/css/style';
    export default {
        name: 'App',
        components:{Header, Content, Footer, fileheader, filecontent},
        data(){
            return {
                obj:{},
                changeTo:'pictures'
            }
        },
        methods:{
            addPic:function(obj){
                this.obj = obj;
            },
            changePicture:function(str){
                this.changeTo = str;
            },
            changeFile:function(str){
                this.changeTo = str;
            }
        }
    }
</script>
