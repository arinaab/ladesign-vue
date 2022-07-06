<template>
    <section class="contacts">
        <subtitle-app>контакты</subtitle-app>
        <div class="contacts__wrapper">
            <question-app></question-app>
            <our-contacts></our-contacts>
        </div>
    </section>
</template>

<script>
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    import QuestionApp from "@/components/QuestionApp/QuestionApp";
    import OurContacts from "@/components/OurContacts/OurContacts";
    export default {
        name: "ContactsApp",
        components: {
            SubtitleApp, QuestionApp, OurContacts
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>