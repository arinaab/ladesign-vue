<template>
    <div>
        <div class="container">
            <confidence-app title="услуги и цены"
            :list="services"
            text="Зачем вам нужен дизайн-проект"></confidence-app>
            <design-price></design-price>
        </div>
    </div>
</template>

<script>
    import ConfidenceApp from "@/components/ConfidenceApp/ConfidenceApp";
    import DesignPrice from "@/components/DesignPrice/DesignPrice";
    export default {
        name: "PriceView",
        components: {
            ConfidenceApp, DesignPrice
        },
        computed: {
            services () {
                return [
                    { title: 'Чтобы ничего не упустить', value: 'Качественный дизайн-проект поможет избежать ошибок и переделок, которые приводят к лишним тратам и затягивают сроки ремонта' },
                    { title: 'Получить нужный результат', value: 'С помощью профессионалов вы сможете донести до строителей свое видение будущего дизайна интерьера' },
                    { title: 'Создать комфорт', value: 'Грамотная планировка и продуманная расстановка мебели сделает пространство эргономичным и функциональным' },
                    { title: 'Сэкономить деньги', value: 'Дизайнер подберет и рассчитает нужное количество материалов с учетом площади помещения, что поможет избежать перерасхода' },
                    { title: 'Потратить время на что-то более приятное', value: 'Вам не придется ездить по магазинам, месяцами подбирать и продумывать подходящие дизайнерские решения в интернете. Не нужно постоянно ездить на объект и созваниваться с рабочими, пытаться самостоятельно узаконить новые планировочные решения. Студия дизайна интерьера LА Design сделает все это за вас!' }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "src/views/MainView/style";
</style>