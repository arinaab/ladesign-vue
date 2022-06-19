<template>
    <div class="confidence">
        <h4 class="confidence__title">Наша команда дает уверенность</h4>
        <!-- eslint-disable -->
        <div class="confidence__wrapper">
            <div class="confidence__info">
                <h5 class="confidence__subtitle">Дизайн-проект от студии LA Design не только совершенен по дизайну, но и реализуем</h5>
                <div class="confidence__elem" v-for="item in items" :key="item.id">
                    <p>{{ item.title }}</p>
                    <img src="@/assets/icon_arrow.png" alt="arrow">
                </div>
            </div>
            <div class="confidence__img">
                <img src="@/assets/confidence.png" alt="img">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConfidenceApp.vue",
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