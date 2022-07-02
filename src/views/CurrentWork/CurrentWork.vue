<template>
    <div>
        <promo-app :title="work.descr" :subtitle="work.text" :style="getBG"></promo-app>
        <div class="container">
            <confidence-app :title="title" :list="description" :text="text"></confidence-app>
        </div>
    </div>
</template>

<script>
    import PromoApp from "@/components/PromoApp/PromoApp";
    import ConfidenceApp from "@/components/ConfidenceApp/ConfidenceApp";
    import { mapGetters } from 'vuex'
    export default {
        name: "CurrentWork",
        components: {
          PromoApp, ConfidenceApp
        },
        data () {
            return {
                work: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        },
        computed: {
            ...mapGetters('PortfolioModule', ['GET_FILTERED_PORTFOLIO_ITEMS']),
            getBG () {
                return { 'background': `url(/${this.work.currentSrc}) center center/cover no-repeat` }
            },
            title () {
                /* eslint-disable */
                if (this.work.type === 'квартира') {
                    return `Дизайн 1-комнатной квартиры в стиле ${this.work.descr}`
                } else if (this.work.type === 'дома') {
                    return `Дизайн дома в стиле ${this.work.descr}`
                } else {
                    return `Дизайн коммерческого помещения в стиле ${this.work.descr}`
                }
            },
            description () {
                return [
                    { title: 'для кого', value: this.work.forWho},
                    { title: 'общая площадь', value: this.work.area},
                    { title: 'место расположения', value: this.work.location},
                    { title: 'срок выполнения', value: this.work.deadline}
                ]
            }
        },
        created () {
            const work = this.GET_FILTERED_PORTFOLIO_ITEMS(this.$route.params.id)
            if (work) this.work = work[0]
        }
    }
</script>

<style scoped lang="scss">
    @use "src/views/MainView/style";
</style>