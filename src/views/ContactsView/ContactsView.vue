<template>
    <div>
        <div class="container">
            <contacts-app></contacts-app>
        </div>
    </div>
</template>

<script>
    import ContactsApp from "@/components/ContactsApp/ContactsApp";
    export default {
        name: "ContactsView",
        components: {
            ContactsApp
        }
    }
</script>

<style scoped lang="scss">
    @use "src/views/MainView/style";
</style>