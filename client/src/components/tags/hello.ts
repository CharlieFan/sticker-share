import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import Temlate from './hello.vue'

@Component({
    mixins: [Temlate]
})
export default class Hello extends Vue {

}