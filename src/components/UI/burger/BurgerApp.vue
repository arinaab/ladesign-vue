<template>
    <div class="burger" :class="{ 'dark': isDark }">
        <span></span>
    </div>
</template>

<script>
    export default {
        name: "BurgerApp",
        props: {
            isDark: {
                type: Boolean
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>