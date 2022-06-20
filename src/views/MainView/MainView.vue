<template>
    <div>
        <promo-app></promo-app>
        <div class="container">
            <confidence-app></confidence-app>
            <portfolio-app></portfolio-app>
        </div>
        <footer-app></footer-app>
    </div>
</template>

<script>
    import PromoApp from "@/components/PromoApp/PromoApp";
    import ConfidenceApp from "@/components/ConfidenceApp/ConfidenceApp";
    import PortfolioApp from "@/components/PortfolioApp/PortfolioApp";
    import FooterApp from "@/components/FooterApp/FooterApp";
    export default {
        name: "MainView",
        components: {
            PromoApp, ConfidenceApp, PortfolioApp, FooterApp
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>