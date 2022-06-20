<template>
    <div class="confidence__elem" @click="changeArrow">
        <p>{{ item.title }}</p>
        <img v-if="!itemIsOpen" src="@/assets/icon_arrow.png" alt="arrow">
        <img v-else src="@/assets/icon_arrow-2.png" alt="arrow">
        <transition name="fade">
            <p class="confidence__text" v-if="itemIsOpen">{{ item.description }}</p>
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