import Vue from 'vue';
import Router from 'vue-router';
const Hello = () => import(/* webpackChunkName:'importComponent' */'../components/hello');
const World = () => import(/* webpackChunkName:'importComponent' */'../components/world');

Vue.use(Router);

export default new Router({
    routes:[
        {
           path:'/hello',
           name:'Hello',
           component: Hello
        },
        {
            path:'/world',
            name:'World',
            component: World
        }
    ]
})