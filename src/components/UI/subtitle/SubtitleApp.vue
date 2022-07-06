<template>
    <h4 class="subtitle" :class="{ 'center': this.$route.name === 'Price' || this.$route.name === 'Contacts' }">
        <slot></slot>
    </h4>
</template>

<script>
    export default {
        name: "SubtitleApp.vue"
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>