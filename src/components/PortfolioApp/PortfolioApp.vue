<template>
    <div class="portfolio">
        <subtitle-app class="center">Портфолио</subtitle-app>
        <div class="portfolio__navs">
            <portfolio-item v-for="item in navItems" :key="item.id" :item="item"></portfolio-item>
        </div>
        <div class="portfolio__items">
            <img v-for="item in itemsImg" :key="item.id" :src="item.src" :alt="item.alt">
        </div>
        <button-app v-if="!moreItems" @click="showMoreItems">Показать еще работы</button-app>
        <div v-if="moreItems" class="portfolio__items">
            <img v-for="item in itemsImg" :key="item.id" :src="item.src" :alt="item.alt">
        </div>
        <div class="portfolio__link">
            <a href="#">Оставить заявку на проект</a>
            <img src="@/assets/arrowportfolio.svg" alt="arrow">
        </div>
    </div>
</template>

<script>
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";
    import ButtonApp from "@/components/UI/button/ButtonApp";
    export default {
        name: "PortfolioApp.vue",
        components: {
            SubtitleApp, PortfolioItem, ButtonApp
        },
        computed: {
            itemsImg () {
                const arr = []
                for (let i = 0; i < 10; i++) {
                    arr.push({id: i + 1, src: `${i + 1}.png`, alt: `${i + 1}`})
                }
                return arr
            }
        },
        data () {
            return {
                navItems: [
                    { id: 1, title: 'все работы', amount: 29},
                    { id: 2, title: 'квартиры', amount: 18},
                    { id: 3, title: 'дома', amount: 12},
                    { id: 4, title: 'коммерческие помещения', amount: 2}
                ],
                moreItems: false
            }
        },
        methods: {
            showMoreItems () {
                this.moreItems = true
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>