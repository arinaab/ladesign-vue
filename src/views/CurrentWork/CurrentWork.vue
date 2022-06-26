<template>
    <div class="current">
        <div class="current__promo" :style="getBG">
            <h3 class="current__title">{{ work.descr }}</h3>
            <h4 class="current__subtitle">{{ work.text }}</h4>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "CurrentWork",
        data () {
            return {
                work: null
            }
        },
        computed: {
            ...mapGetters('PortfolioModule', ['GET_FILTERED_PORTFOLIO_ITEMS']),
            getBG () {
                return { 'background': `url(/${this.work.currentSrc}) center center/cover no-repeat` }
            }
        },
        created () {
            const work = this.GET_FILTERED_PORTFOLIO_ITEMS(this.$route.params.id)
            if (work) this.work = work[0]
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>