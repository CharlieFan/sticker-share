<template>
    <div class="app">
        <hello></hello>
        <div class="greeting">
            <h1>data: {{name}}</h1>
            <h2>computed: {{newName}}</h2>
            <button>button</button>
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="scss" src="./app.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import Hello from 'components/tags/hello.vue'

@Component({
    components: {
        Hello
    }
})
export default class App extends Vue {
    name = 'Charlie'

    get newName() {
        return `${this.name} Fan`
    }
    
    created() {
        console.log(this.name)
    }
}
</script>