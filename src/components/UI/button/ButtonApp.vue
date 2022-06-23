<template>
    <button class="btn" :class="color">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "ButtonApp.vue",
        props: {
            color: {
                type: String,
                default: 'standart'
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>