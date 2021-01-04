/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App'
import Hello from './views/components/Hello'
import Home from './views/components/Home'
import sidebar from './views/components/sidebar'
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home

        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path:'/sidebar',
            name:'sidebar',
            component: sidebar
        },


    ],
});

const app = new Vue({
    el: '#app',
    components: { App, sidebar },
    router,
});
