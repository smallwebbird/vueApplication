import Vue from 'vue';
import App from './App';
import router from './router';

if(module.hot){
    module.hot.accept();
}

new Vue({
    el:'#haha',
    router,
    components:{ App },
    template:'<App/>'
})