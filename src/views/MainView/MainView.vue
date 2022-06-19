<template>
    <div>
        <promo-app></promo-app>
        <div class="container">
            <confidence-app></confidence-app>
        </div>
    </div>
</template>

<script>
    import PromoApp from "@/components/PromoApp/PromoApp";
    import ConfidenceApp from "@/components/ConfidenceApp/ConfidenceApp";
    export default {
        name: "MainView",
        components: {
            PromoApp, ConfidenceApp
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>