import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Request components
const Home = (resolve) => { require.ensure([], () => {resolve(require('components/views/home/home'))}, 'home')}
const Login = (resolve) => { require.ensure([], () => {resolve(require('components/views/login/login'))}, 'public')}

// routes here:
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    // default route:
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    routes
})

export default router