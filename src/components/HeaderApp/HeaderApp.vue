<template>
    <nav class="header" :class="{ 'light': changeColors }">
        <div class="header__items">
            <img v-if="!changeColors" class="header__logo" src="@/assets/logo.svg" alt="logo">
            <img v-else class="header__logo" src="@/assets/logodark.svg" alt="logo">
            <div class="header__links">
                <a class="header__item" :class="{ 'dark': changeColors }" href="#">Портфолио</a>
                <a class="header__item" :class="{ 'dark': changeColors }" href="#">Услуги и цены</a>
                <a class="header__item" :class="{ 'dark': changeColors }" href="#">Контакты</a>
            </div>
            <div class="header__info">
                <img v-if="!changeColors" class="header__phone" src="@/assets/icon_phon.svg" alt="phone">
                <img v-else class="header__phone" src="@/assets/phonedark.svg" alt="phone">
                <a class="header__item" :class="{ 'dark': changeColors }" href="tel:+79184123443">+7 918 412 34 43</a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "HeaderApp.vue",
        data () {
            return {
                scrollTop: '',
                changeColors: false
            }
        },
        methods: {
            onScroll () {
                this.scrollTop = document.documentElement.scrollTop
                this.scrollTop >= 800 ? this.changeColors = true : this.changeColors = false
            }
        },
        mounted () {
            window.addEventListener('scroll', this.onScroll);
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>