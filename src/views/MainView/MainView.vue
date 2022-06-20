<template>
    <div>
        <promo-app></promo-app>
        <div class="container">
            <confidence-app></confidence-app>
            <portfolio-app></portfolio-app>
        </div>
    </div>
</template>

<script>
    import PromoApp from "@/components/PromoApp/PromoApp";
    import ConfidenceApp from "@/components/ConfidenceApp/ConfidenceApp";
    import PortfolioApp from "@/components/PortfolioApp/PortfolioApp";
    export default {
        name: "MainView",
        components: {
            PromoApp, ConfidenceApp, PortfolioApp
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>