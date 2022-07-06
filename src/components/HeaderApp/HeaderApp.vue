<template>
    <nav class="header" :class="{ 'light': changeColors }">
        <div class="header__items">
            <router-link :to="{ name: 'Main' }">
                <img v-if="!changeColors || GET_OVERLAY_STATE" class="header__logo" src="@/assets/logo.svg" alt="logo">
                <img v-else class="header__logo" src="@/assets/logodark.svg" alt="logo">
            </router-link>
            <div class="header__links">
                <router-link :to="{ name: 'Portfolio' }"
                 class="header__item" :class="{ 'dark': changeColors }">Портфолио</router-link>
                <router-link :to="{ name: 'Price' }"
                 class="header__item" :class="{ 'dark': changeColors }">Услуги и цены</router-link>
                <router-link :to="{ name: 'Contacts' }"
                 class="header__item" :class="{ 'dark': changeColors }">Контакты</router-link>
            </div>
            <div class="header__info">
                <img v-if="!changeColors || GET_OVERLAY_STATE" class="header__phone" src="@/assets/icon_phon.svg" alt="phone">
                <img v-else class="header__phone" src="@/assets/phonedark.svg" alt="phone">
                <a class="header__item" :class="{ 'dark': changeColors && !GET_OVERLAY_STATE }" href="tel:+79184123443">+7 918 412 34 43</a>
            </div>
        </div>
        <burger-app :is-dark="isDark && !GET_OVERLAY_STATE" @click="changeOverlay"></burger-app>
        <div v-if="GET_OVERLAY_STATE" class="overlay">
            <div class="overlay__links">
                <router-link class="overlay__item" :to="{ name: 'Portfolio' }" @click="changeOverlay">Портфолио</router-link>
                <router-link class="overlay__item" :to="{ name: 'Price' }" @click="changeOverlay">Услуги и цены</router-link>
                <router-link class="overlay__item" :to="{ name: 'Contacts' }" @click="changeOverlay">Контакты</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    import BurgerApp from "@/components/UI/burger/BurgerApp";
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        name: "HeaderApp.vue",
        components: {
            BurgerApp
        },
        data () {
            return {
                scrollTop: '',
                changeColors: false,
                isDark: false
            }
        },
        computed: {
          ...mapGetters('MainModule', ['GET_OVERLAY_STATE'])
        },
        methods: {
            ...mapMutations('MainModule', ['SET_OVERLAY_STATE']),
            onScroll () {
                if (this.$route.name !== 'Portfolio' && this.$route.name !== 'Price' && this.$route.name !== 'Contacts') {
                    this.scrollTop = document.documentElement.scrollTop
                    this.scrollTop >= 800 ? this.changeColors = this.isDark = true : this.changeColors = this.isDark = false
                }
            },
            changeOverlay () {
                this.SET_OVERLAY_STATE()
            }
        },
        watch: {
            '$route.path'() {
                this.$route.name === 'Portfolio' || this.$route.name === 'Price' || this.$route.name === 'Contacts' ? this.changeColors = this.isDark = true : this.changeColors = this.isDark = false
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