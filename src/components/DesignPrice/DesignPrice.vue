<template>
    <section class="design">
        <subtitle-app :style="titleStyle">СТОИМОСТЬ РАЗРАБОТКИ ДИЗАЙН-ПРОЕКТА</subtitle-app>
        <div class="design__wrapper">
            <design-item v-for="variant in variants" :key="variant.title"
             :variant="variant" :show-more="more"
            @showModal="showModal"></design-item>
        </div>
        <div class="design__link" @click="showMore">
            <p>{{ more ? 'свернуть' : 'развернуть' }}</p>
            <div class="design__circle">
                <p v-if="!more">&darr;</p>
                <p v-else>&uarr;</p>
            </div>
        </div>
    </section>
    <portfolio-modal v-if="GET_MODALFORM_STATE" @changeModal="closeModal"
     @showThanksModal="showThanksModal"></portfolio-modal>
    <thanks-modal v-if="GET_MODALTHANKS_STATE" @changeModal="closeModal"></thanks-modal>
    <slider-app></slider-app>
    <link-app></link-app>
</template>

<script>
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    import LinkApp from "@/components/LinkApp/LinkApp";
    import DesignItem from "@/components/DesignItem/DesignItem";
    import PortfolioModal from "@/components/PortfolioModal/PortfolioModal";
    import ThanksModal from "@/components/ThanksModal/ThanksModal";
    import SliderApp from "@/components/SliderApp/SliderApp";
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        name: "DesignPrice",
        components: {
            SubtitleApp, DesignItem, PortfolioModal, ThanksModal, SliderApp, LinkApp
        },
        computed: {
            ...mapGetters('MainModule', ['GET_MODALFORM_STATE', 'GET_MODALTHANKS_STATE']),
            titleStyle () {
                return {
                    'width': '60%',
                    'margin': '0 auto'
                }
            }
        },
        data () {
            return {
                variants: [
                    {   title: 'basic',
                        subtitle: 'от 2500 ₽',
                        services: ['Обмерочный план', 'План расстановки мебели', 'План демонтажный', 'План монтажный',
                            'План полов с материалами', '-', '-', '-', '-']
                    },
                    {   title: 'pro',
                        subtitle: 'от 3500 ₽',
                        services: ['Обмерочный план', 'План расстановки мебели', 'План демонтажный', 'План монтажный',
                            'План полов с материалами', 'План экспликации', '-', '-', '-']
                    },
                    {   title: 'exclusive',
                        subtitle: 'от 5000 ₽',
                        services: ['Обмерочный план', 'План расстановки мебели', 'План демонтажный', 'План монтажный', '-',
                            'План экспликации',
                            'Чертежи сложных элементов и мебели (если заказывать отдельно - расчет индивидуальный)',
                            'Спецификация осветительного оборудования', 'Декорирование' ]
                    }
                ],
                more: false
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
            },
            showMore () {
                this.more = !this.more
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>