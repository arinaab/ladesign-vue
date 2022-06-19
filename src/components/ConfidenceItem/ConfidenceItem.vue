<template>
    <div class="confidence__elem">
        <p>{{ item.title }}</p>
        <img v-if="!itemIsOpen" src="@/assets/icon_arrow.png" alt="arrow" @click.stop="changeArrow">
        <img v-else src="@/assets/icon_arrow-2.png" alt="arrow" @click.stop="changeArrow">
        <transition name="fade">
            <p class="confidence__text" v-if="itemIsOpen">Дизайнеры и архитекторы студии не работают по шаблону, учитывают все пожелания и не копируют работы из чужих портфолио</p>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "ConfidenceItem",
        data () {
          return {
              itemIsOpen: false
          }
        },
        props: {
            item: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            changeArrow () {
                this.itemIsOpen = !this.itemIsOpen
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "src/components/ConfidenceApp/style";
</style>