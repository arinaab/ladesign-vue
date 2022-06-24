<template>
    <modal-app @click="$emit('changeModal')" is-thanks>
        <div class="modal__wrapper">
            <img class="modal__success" src="@/assets/success.svg" alt="success">
            <p class="modal__title modal__title_center">{{ modalMessage }}</p>
            <p class="modal__text">{{ modalText }}</p>
            <div class="modal__links">
                <a href="#">houzz</a>
                <a href="#">facebook</a>
                <a href="#">vkontakte</a>
                <a href="#">instagram</a>
            </div>
        </div>
    </modal-app>
</template>

<script>
    import ModalApp from "@/components/UI/modal/ModalApp";
    export default {
        name: "ThanksModal",
        components: {
            ModalApp
        },
        data () {
            return {
                modalMessage: 'Ваша Заявка успешно отправлена',
                modalText: 'Спасибо, что обратились в нашу студию. Наш дизайнер с вами свяжется'
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "src/components/UI/modal/style";
</style>