import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import Template from './home.vue'
import Hello from 'components/tags/hello'

@Component({
    mixins: [Template],
    components: {
        Hello
    }
})
export default class Home extends Vue {
    name = 'Charlie'

    get newName() {
        return `${this.name} Fan`
    }

    created() {
        console.log(this.name)
    }
}