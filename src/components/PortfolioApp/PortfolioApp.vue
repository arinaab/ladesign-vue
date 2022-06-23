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
        <portfolio-modal></portfolio-modal>
    </div>
</template>

<script>
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";
    import ButtonApp from "@/components/UI/button/ButtonApp";
    import PortfolioImg from "@/components/PortfolioImg/PortfolioImg";
    // import ModalApp from "@/components/UI/modal/ModalApp";
    import PortfolioModal from "@/components/PortfolioModal/PortfolioModal";
    export default {
        name: "PortfolioApp.vue",
        components: {
            SubtitleApp, PortfolioItem, ButtonApp, PortfolioImg, PortfolioModal
        },
        computed: {
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
                moreItems: false,
                showModalForm: false,
                modalMessage: 'оставьте свои контакты. мы свяжемся с вами и обсудим ваш проект'
            }
        },
        methods: {
            showMoreItems () {
                this.moreItems = true
            },
            showModal () {
                this.showModalForm = true
            },
            closeModal () {
                this.showModalForm = false
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>