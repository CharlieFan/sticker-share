<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<style lang="scss" src="./app.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    created() {
        console.log(this.$route)
    }
}
</script>