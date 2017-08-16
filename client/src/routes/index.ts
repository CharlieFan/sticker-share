import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Request components
const Login = (resolve) => { require.ensure([], () => {resolve(require('components/views/login/login.vue'))}, 'public')}

// routes here:
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = new VueRouter({
    routes
})

export default router