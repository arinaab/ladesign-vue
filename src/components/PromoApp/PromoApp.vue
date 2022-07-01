<template>
    <section class="promo">
        <h1 class="promo__title" :class="{ 'work': this.$route.name === 'Work' }">{{ title }}</h1>
        <h2 class="promo__subtitle" :class="{ 'work-subtitle': this.$route.name === 'Work' }">{{ subtitle }}</h2>
    </section>
</template>

<script>
    export default {
        name: "PromoApp",
        props: {
            title: {
                type: String,
                default: 'ladesign'
            },
            subtitle: {
                type: String,
                default: 'Дизайн-проекты жилых и коммерческих помещений. Малая архитектура'
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>