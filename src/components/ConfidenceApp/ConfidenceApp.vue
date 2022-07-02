<template>
    <section class="confidence">
        <subtitle-app>{{ title }}</subtitle-app>
        <!-- eslint-disable -->
        <div class="confidence__wrapper" v-if="this.$route.name === 'Main'">
            <div class="confidence__info">
                <h5 class="confidence__subtitle">Дизайн-проект от студии LA Design не только совершенен по дизайну, но и реализуем</h5>
                <confidence-item
                v-for="item in items" :key="item.id"
                :item="item">
                </confidence-item>
            </div>
            <div class="confidence__img">
                <img src="@/assets/confidence.png" alt="img">
            </div>
        </div>
        <div class="confidence__wrapper" v-if="this.$route.name === 'Work'">
            <div class="confidence__info">
                <confidence-item
                        v-for="item in list" :key="item.title"
                        :item="item">
                </confidence-item>
            </div>
            <div class="confidence__info confidence__info_text">{{ text }}</div>
        </div>
        <div class="confidence__wrapper" v-if="this.$route.name === 'Price'">
            <div class="confidence__info confidence__info_text mr textprice">{{ text }}</div>
            <div class="confidence__info">
                <confidence-item
                        v-for="item in list" :key="item.title"
                        :item="item">
                </confidence-item>
            </div>
        </div>
    </section>
</template>

<script>
    import ConfidenceItem from "@/components/ConfidenceItem/ConfidenceItem";
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    export default {
        name: "ConfidenceApp.vue",
        components: {
            ConfidenceItem, SubtitleApp
        },
        props: {
            title: {
                type: String,
                default: 'Наша команда дает уверенность'
            },
            list: {
                type: Array,
                default: () => []
            },
            text: {
                type: String
            }
        },
        data () {
            return {
                items: [
                    { title: 'Каждый проект уникален', id: 1, description: 'Дизайнеры и архитекторы студии не работают по шаблону, учитывают все пожелания и не копируют работы из чужих портфолио' },
                    { title: 'Полное сопровождение', id: 2, description: 'Клиент может заказать услугу по авторскому надзору и вообще не приезжать на объект. Мы будем контролировать и корректировать ход выполнения ремонтных работ согласно дизайн-проекту' },
                    { title: 'Согласование перепланировки', id: 3, description: 'Поможем согласовать любые планировочные решения, которые не противоречат закону. Возьмем на себя все бумажные вопросы, чтобы освободить ваше время' },
                    { title: 'Техническая документация', id: 4, description: 'Готовим полный пакет документов, который гарантирует ответственный подход к работе и высокое качество реализованного дизайн-проекта' },
                    { title: 'Строгая политика конфиденциальности', id: 5, description: 'Обеспечиваем защиту персональных данных заказчиков и не раскрываем их третьим лицам.' }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>