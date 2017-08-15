import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from 'components/views/login/login.vue'

const Login = (r: any) => require.ensure([], r(require('../components/views/login/login.vue')), 'login')

Vue.use(VueRouter)

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