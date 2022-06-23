<template>
    <modal-app :text-message="modalMessage" @click="$emit('changeModal')">
        <div class="modal__inputs">
            <input id="name" type="text" placeholder="Ваше имя">
            <input id="tel" type="number" placeholder="Ваш телефон">
        </div>
        <div class="modal__portfolio">
            <button-app color="dark">Отправить</button-app>
            <p>Нажимая на кнопку, я даю согласие на обработку персональных данных</p>
        </div>
    </modal-app>
</template>

<script>
    import ModalApp from "@/components/UI/modal/ModalApp";
    import ButtonApp from "@/components/UI/button/ButtonApp";
    export default {
        name: "PortfolioModal",
        components: {
            ModalApp, ButtonApp
        },
        data () {
            return {
                modalMessage: 'оставьте свои контакты. мы свяжемся с вами и обсудим ваш проект'
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "src/components/UI/modal/style";
</style>