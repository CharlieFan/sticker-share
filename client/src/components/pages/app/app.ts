import Vue from 'vue'
import Template from './app.vue'
import { Component, Prop, Watch } from 'vue-property-decorator'

@Component({
    mixins: [Template]
})
export default class App extends Vue {
    created() {
        console.log(this.$route)
    }
}