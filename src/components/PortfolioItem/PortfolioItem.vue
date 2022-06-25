<template>
    <p class="portfolio__nav" @click="changeActive(item)">
        {{ item.title }}<span><sup>{{ item.amount }}</sup></span>
    </p>
</template>

<script>
    export default {
        name: "PortfolioItem.vue",
        props: {
            item: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                activeLink: ''
            }
        },
        methods: {
            changeActive (item) {
                this.activeLink = item.title
                this.$emit('setActive', this.activeLink)
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "src/components/PortfolioApp/style";
</style>