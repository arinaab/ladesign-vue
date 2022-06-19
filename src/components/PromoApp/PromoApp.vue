<template>
    <div class="promo">
        <header-app></header-app>
        <h1 class="promo__title">ladesign</h1>
        <!-- eslint-disable-next-line -->
        <h2 class="promo__subtitle">Дизайн-проекты жилых и коммерческих помещений. Малая архитектура</h2>
    </div>
</template>

<script>
    import HeaderApp from "@/components/HeaderApp/HeaderApp";
    export default {
        name: "PromoApp",
        components: {
            HeaderApp
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>