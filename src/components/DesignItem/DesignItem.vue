<template>
    <div class="design__item">
        <div class="design__info">
            <p class="design__title">{{ variant.title }}</p>
            <p class="design__subtitle">{{ variant.subtitle }}</p>
        </div>
        <button-app :style="btnStyle" @click="showModal">Заказать</button-app>
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
            }
        },
        computed: {
            btnStyle () {
                return { 'outline': 'none' }
            }
        },
        methods: {
            showModal () {
                this.$emit('showModal')
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "src/components/DesignPrice/style";
</style>