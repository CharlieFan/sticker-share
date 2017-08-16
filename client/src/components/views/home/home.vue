<template>
    <div class="view-home">
        <hello></hello>
        <h1>Home view</h1>
        <img src="~assets/dragon_maid.jpeg">
    </div>
</template>
<style lang="scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import Hello from 'components/tags/hello.vue'

@Component({
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
</script>
