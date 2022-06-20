<template>
    <div class="confidence">
        <subtitle-app>Наша команда дает уверенность</subtitle-app>
        <!-- eslint-disable -->
        <div class="confidence__wrapper">
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
    </div>
</template>

<script>
    import ConfidenceItem from "@/components/ConfidenceItem/ConfidenceItem";
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    export default {
        name: "ConfidenceApp.vue",
        components: {
            ConfidenceItem, SubtitleApp
        },
        data () {
            return {
                items: [
                    { title: 'Каждый проект уникален', id: 1 },
                    { title: 'Полное сопровождение', id: 2 },
                    { title: 'Согласование перепланировки', id: 3 },
                    { title: 'Техническая документация', id: 4 },
                    { title: 'Строгая политика конфиденциальности', id: 5 }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>