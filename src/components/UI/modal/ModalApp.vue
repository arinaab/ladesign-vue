<template>
    <div class="modal" @click="$emit('changeModal')">
        <div class="modal__item" @click.stop="" :class="{ 'thanks': isThanks }">
            <app-close @click="$emit('changeModal')"></app-close>
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
            isThanks: {
                type: Boolean
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>