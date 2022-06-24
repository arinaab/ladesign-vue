<template>
    <div class="portfolio">
        <subtitle-app class="center">Портфолио</subtitle-app>
        <div class="portfolio__navs">
            <portfolio-item v-for="item in navItems" :key="item.id" :item="item"></portfolio-item>
        </div>
        <div class="portfolio__items">
            <portfolio-img v-for="item in itemsImg" :key="item.id" :img="item"></portfolio-img>
        </div>
        <button-app color="standart" v-if="!moreItems" @click="showMoreItems">Показать еще работы</button-app>
        <div v-if="moreItems" class="portfolio__items">
            <portfolio-img v-for="item in itemsImg" :key="item.id" :img="item"></portfolio-img>
        </div>
        <div class="portfolio__link">
            <p @click="showModal">Оставить заявку на проект</p>
            <img src="@/assets/arrowportfolio.svg" alt="arrow">
        </div>
        <portfolio-modal v-if="GET_MODALFORM_STATE" @changeModal="closeModal"
        @showThanksModal="showThanksModal"></portfolio-modal>
        <thanks-modal v-if="GET_MODALTHANKS_STATE" @changeModal="closeModal"></thanks-modal>
    </div>
</template>

<script>
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";
    import ButtonApp from "@/components/UI/button/ButtonApp";
    import PortfolioImg from "@/components/PortfolioImg/PortfolioImg";
    import PortfolioModal from "@/components/PortfolioModal/PortfolioModal";
    import ThanksModal from "@/components/ThanksModal/ThanksModal";
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        name: "PortfolioApp.vue",
        components: {
            SubtitleApp, PortfolioItem, ButtonApp, PortfolioImg, PortfolioModal, ThanksModal
        },
        computed: {
            ...mapGetters('MainModule', ['GET_MODALFORM_STATE', 'GET_MODALTHANKS_STATE']),
            itemsImg () {
                const arr = []
                for (let i = 0; i < 10; i++) {
                    arr.push({
                        id: i + 1, src: `${i + 1}.png`,
                        alt: `${i + 1}`,
                        descr: this.description[i],
                        text: 'Unique collection'})
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
                description: [
                    'LOFT', 'Длинное название', 'Название в две строки', 'LOFT', 'Название в две строки',
                    'LOFT', 'Длинное название', 'Название в две строки', 'LOFT', 'Название в две строки'
                ],
                moreItems: false
            }
        },
        methods: {
            ...mapMutations('MainModule', ['SET_MODALFORM_STATE', 'SET_MODALTHANKS_STATE']),
            showMoreItems () {
                this.moreItems = true
            },
            showModal () {
                this.SET_MODALFORM_STATE(true)
            },
            closeModal () {
                this.SET_MODALFORM_STATE(false)
                this.SET_MODALTHANKS_STATE(false)
            },
            showThanksModal () {
                this.SET_MODALFORM_STATE(false)
                this.SET_MODALTHANKS_STATE(true)
                setTimeout(() => this.SET_MODALTHANKS_STATE(false), 3000)
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>