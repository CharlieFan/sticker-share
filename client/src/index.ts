import Vue from 'vue'
import App from 'components/pages/app/app.vue'
import VueRouter from 'vue-router'
import router from 'routes'

let v = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
