<template>
    <div class="modal" @click="$emit('changeModal')">
        <div class="modal__item" @click.stop="">
<!--            <slot></slot>-->
            <p class="modal__title">{{ textMessage }}</p>
            <div v-if="needInputs" class="modal__inputs">
                <input id="name" type="text" placeholder="Ваше имя">
                <input id="tel" type="number" placeholder="Ваш телефон">
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalApp",
        props: {
            textMessage: {
                type: String
            },
            needInputs: {
                type: Boolean
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>