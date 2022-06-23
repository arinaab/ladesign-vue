<template>
    <div class="modal" @click="$emit('changeModal')">
        <div class="modal__item" @click.stop="">
            <app-close @click="$emit('changeModal')"></app-close>
            <p class="modal__title">{{ textMessage }}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import AppClose from "@/components/UI/close/AppClose";
    export default {
        name: "ModalApp",
        components: {
          AppClose
        },
        props: {
            textMessage: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>