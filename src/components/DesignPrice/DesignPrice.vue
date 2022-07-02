<template>
    <section class="design">
        <subtitle-app :style="titleStyle">СТОИМОСТЬ РАЗРАБОТКИ ДИЗАЙН-ПРОЕКТА</subtitle-app>
        <div class="design__wrapper">
            <design-item v-for="variant in variants" :key="variant.title" :variant="variant"
            @showModal="showModal"></design-item>
        </div>
    </section>
    <portfolio-modal v-if="GET_MODALFORM_STATE" @changeModal="closeModal"
     @showThanksModal="showThanksModal"></portfolio-modal>
    <thanks-modal v-if="GET_MODALTHANKS_STATE" @changeModal="closeModal"></thanks-modal>
</template>

<script>
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    import DesignItem from "@/components/DesignItem/DesignItem";
    import PortfolioModal from "@/components/PortfolioModal/PortfolioModal";
    import ThanksModal from "@/components/ThanksModal/ThanksModal";
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        name: "DesignPrice",
        components: {
            SubtitleApp, DesignItem, PortfolioModal, ThanksModal
        },
        computed: {
            ...mapGetters('MainModule', ['GET_MODALFORM_STATE', 'GET_MODALTHANKS_STATE']),
            titleStyle () {
                return {
                    'width': '50%',
                    'margin': '0 auto'
                }
            }
        },
        data () {
            return {
                variants: [
                    { title: 'basic', subtitle: 'от 2500 ₽' },
                    { title: 'pro', subtitle: 'от 3500 ₽' },
                    { title: 'exclusive', subtitle: 'от 5000 ₽' }
                ]
            }
        },
        methods: {
            ...mapMutations('MainModule', ['SET_MODALFORM_STATE', 'SET_MODALTHANKS_STATE']),
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