import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../components/Login';
import LandingPage from '../components/Welcome';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {component:LoginPage, path:'/login',},
        {component:LandingPage, path:'/'},
       
    ],
    mode:'history',
})

export default router;
