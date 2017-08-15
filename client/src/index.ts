import Vue from 'vue'
import App from 'components/pages/app/app.vue'
import VueRouter from 'vue-router'
import Login from 'components/views/login/login.vue'

const routes = [
    { path: '/login', component: Login}
]

const router = new VueRouter({
    routes
})

console.log(router)


Vue.use(VueRouter)
let v = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
