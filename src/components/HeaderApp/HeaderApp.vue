<template>
    <nav class="header">
        <div class="header__items">
            <img class="header__logo" src="@/assets/logo.svg" alt="logo">
            <div class="header__links">
                <a class="header__item" href="#">Портфолио</a>
                <a class="header__item" href="#">Услуги и цены</a>
                <a class="header__item" href="#">Контакты</a>
            </div>
            <div class="header__info">
                <img class="header__phone" src="@/assets/icon_phon.svg" alt="phone">
                <a class="header__item" href="tel:+79184123443">+7 918 412 34 43</a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "HeaderApp.vue",
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>