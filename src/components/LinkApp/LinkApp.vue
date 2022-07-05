<template>
    <div class="link">
        <p @click="showModal">Оставить заявку на проект</p>
        <img src="@/assets/arrowportfolio.svg" alt="arrow">
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "LinkApp",
        methods: {
            ...mapMutations('MainModule', ['SET_MODALFORM_STATE']),
            showModal () {
                this.SET_MODALFORM_STATE(true)
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>