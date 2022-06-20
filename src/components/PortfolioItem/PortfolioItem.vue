<template>
    <p class="portfolio__nav">{{ item.title }}<span><sup>{{ item.amount }}</sup></span></p>
</template>

<script>
    export default {
        name: "PortfolioItem.vue",
        props: {
            item: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "src/components/PortfolioApp/style";
</style>