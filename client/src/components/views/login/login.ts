import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import Template from './login.vue'

@Component({
    mixins: [Template]
})
export default class Login extends Vue {
    created() {
        console.log(this.$route)
    }
}