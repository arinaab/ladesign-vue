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
    import { mapGetters } from 'vuex'
    export default {
        name: "MainView",
        components: {
            PromoApp, ConfidenceApp, PortfolioApp, FooterApp
        },
        computed: {
            ...mapGetters('MainModule', ['GET_MODALFORM_STATE', 'GET_MODALTHANKS_STATE'])
        },
        watch: {
            GET_MODALFORM_STATE(val) {
                val ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>