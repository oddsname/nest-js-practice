import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from "@/views/Auth";
import Dashboard from "@/views/Dashboard";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export {
    router
}
