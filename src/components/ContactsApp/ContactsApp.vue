<template>
    <section class="contacts">
        <subtitle-app>контакты</subtitle-app>
        <div class="contacts__wrapper">
            <question-app></question-app>
            <div class="contacts__our"></div>
        </div>
    </section>
</template>

<script>
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    import QuestionApp from "@/components/QuestionApp/QuestionApp";
    export default {
        name: "ContactsApp",
        components: {
            SubtitleApp, QuestionApp
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>