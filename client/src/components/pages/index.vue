<template>
    <div>
        <div class="greeting">Hello {{name}}</div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            name: 'hahah'
        }
    }
}
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
