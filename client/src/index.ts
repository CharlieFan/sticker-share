import Vue from 'vue'
import App from './components/pages/app.vue'

console.log(App)

let v = new Vue({
    el: "#app",
    render: h => h(App)
})
