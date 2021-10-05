import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../view/MainPage.vue";
import Admin from "../view/Admin.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: 'MainPage',
    },
    {
        path: '/MainPage',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/Admin',
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/MainPage/account-settings',
        name: 'pages-account-settings',
        component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
    },
    {
        path: '/pages/login',
        name: 'pages-login',
        component: () => import('@/views/pages/Login.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '/pages/register',
        name: 'pages-register',
        component: () => import('@/views/pages/Register.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '/error-404',
        name: 'error-404',
        component: () => import('@/views/Error.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '*',
        redirect: 'error-404',
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
