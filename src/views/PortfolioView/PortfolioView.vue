<template>
    <div class="portfolio-view">
        <portfolio-app></portfolio-app>
    </div>
</template>

<script>
    import PortfolioApp from "@/components/PortfolioApp/PortfolioApp";
    export default {
        name: "PortfolioView",
        components: {
            PortfolioApp
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>