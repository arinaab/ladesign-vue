<template>
    <section class="portfolio">
        <subtitle-app class="center">Портфолио</subtitle-app>
        <div class="portfolio__navs">
            <portfolio-item v-for="item in navItems" :key="item.id" :item="item" @setActive="setActive"
            :class="{ 'active': item.title === activeLink }"></portfolio-item>
        </div>
        <div class="portfolio__items" :class="{ 'portfolio__items_flex' : this.activeLink !== 'все работы' }">
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
    </section>
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
            ...mapGetters('PortfolioModule', ['GET_PORTFOLIO_ITEMS']),
            itemsImg () {
                const arr = []
                for (let i = 0; i < this.description.length; i++) {
                    arr.push({
                        id: i + 1,
                        src: `${i + 1}.png`,
                        currentSrc: 'currentbg.jpg',
                        alt: `${i + 1}`,
                        descr: this.description[i],
                        type: this.type[i],
                        forWho: this.for[i],
                        area: this.area[i],
                        location: 'Краснодар',
                        deadline: '1 месяц',
                        text: 'Unique collection'})
                }
                this.SET_PORTFOLIO_ITEMS(arr)
                const filteredArr = arr.filter(item => item.type === this.activeLink)
                return this.activeLink === 'все работы' ? arr : filteredArr
            }
        },
        data () {
            return {
                navItems: [
                    { id: 1, title: 'все работы', amount: 10},
                    { id: 2, title: 'квартиры', amount: 2},
                    { id: 3, title: 'дома', amount: 6},
                    { id: 4, title: 'коммерческие помещения', amount: 2}
                ],
                description: [
                    'LOFT', 'Длинное название', 'Название в две строки', 'LOFT', 'Название в две строки',
                    'LOFT', 'Длинное название', 'Название в две строки', 'LOFT', 'Название в две строки'
                ],
                type: ['квартиры', 'квартиры', 'дома', 'дома', 'дома', 'коммерческие помещения', 'дома',
                'коммерческие помещения', 'дома', 'дома'],
                for: ['молодой мужчина', 'молодая девушка', 'семейная пара', 'молодой мужчина', 'семейная пара',
                'бизнес', 'молодая девушка', 'бизнес', 'молодой мужчина', 'молодой мужчина'],
                area: ['60', '60', '100', '59', '90', '150', '60', '110', '60', '42'],
                moreItems: false,
                active: false,
                activeLink: ''
            }
        },
        methods: {
            ...mapMutations('MainModule', ['SET_MODALFORM_STATE', 'SET_MODALTHANKS_STATE']),
            ...mapMutations('PortfolioModule', ['SET_PORTFOLIO_ITEMS']),
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
            },
            setActive (link) {
                this.activeLink = link
            }
        },
        mounted () {
            this.activeLink = 'все работы'
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>