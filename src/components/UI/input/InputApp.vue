<template>
    <input :id="id" :type="type" :placeholder="placeholder" @input="changeInput">
</template>

<script>
    export default {
        name: "InputApp",
        props: {
            id: {
                type: String
            },
            placeholder: {
                type: String
            },
            type: {
                type: String
            },
            modelValue: {
                type: String
            }
        },
        methods: {
            changeInput (event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>