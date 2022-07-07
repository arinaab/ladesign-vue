<template>
    <div class="design__item">
        <div class="design__info" :class="{ 'borderbot' : showMore }">
            <p v-if="variant.title === 'pro'" class="pro">recommend</p>
            <p class="design__title">{{ variant.title }}</p>
            <p class="design__subtitle">{{ variant.subtitle }}</p>
        </div>
        <div v-if="showMore" class="design__more">
            <p v-for="item in variant.services" :key="item">{{ item }}</p>
        </div>
        <button-app :style="btnStyle" @click="showModal"
            @mouseenter="hover"
            @mouseleave="hover">
            Заказать
            <img v-if="!onHover" class="arrow" src="@/assets/arrow-up-right.svg" alt="arrow">
            <img v-else class="arrow" src="@/assets/arrow-up-right-white.svg" alt="arrow">
        </button-app>
    </div>
</template>

<script>
    import ButtonApp from "@/components/UI/button/ButtonApp";
    export default {
        name: "DesignItem",
        components: {
            ButtonApp
        },
        props: {
            variant: {
                type: Object,
                default: () => {}
            },
            showMore: {
                type: Boolean
            }
        },
        data () {
          return {
              onHover: false
          }
        },
        computed: {
            btnStyle () {
                return {
                    'outline': 'none',
                    'width': '101%',
                    'align-self': 'center'
                }
            }
        },
        methods: {
            showModal () {
                this.$emit('showModal')
            },
            hover () {
                this.onHover = !this.onHover
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "src/components/DesignPrice/style";
</style>