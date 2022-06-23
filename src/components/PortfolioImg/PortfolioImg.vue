<template>
    <div class="block__container" @mouseover="onHover" @mouseleave="onLeave" :style="getStyle">
        <div class="block__wrapper">
            <div class="block__item">
                <p class="text" v-if="isHover">{{ img.descr }}</p>
                <p class="text" v-if="isHover">{{ img.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PortfolioImg",
        props: {
            img: {
                type: Object,
                default: () => {}
            }
        },
        data () {
           return {
               isHover: false
           }
        },
        computed: {
            getStyle () {
                return { 'background': `url(../../${this.img.src}) center center/cover no-repeat` }
            }
        },
        methods: {
            onHover () {
                this.isHover = true
            },
            onLeave () {
                this.isHover = false
            }
        },
    }
</script>

<style scoped lang="scss">
    @use "src/components/PortfolioApp/style";
</style>