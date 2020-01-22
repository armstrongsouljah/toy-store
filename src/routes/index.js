import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthPage from '../components/AuthComponent';
import LandingPage from '../components/Welcome';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {component:AuthPage, path:'/auth',},
        {component:LandingPage, path:'/'},
       
    ],
    mode:'history',
})

export default router;
