<template>
    <modal-app @click="$emit('changeModal')">
        <p class="modal__title">{{ modalMessage }}</p>
        <div class="modal__inputs">
            <input-app id="name" placeholder="Ваше имя" type="text" v-model="name" :style="invalidName"></input-app>
            <p v-if="isInvalidName">Поле обязательно для ввода</p>
            <input-app id="tel" placeholder="Ваш телефон" type="text" v-model="tel" :style="invalidTel"></input-app>
            <p v-if="isInvalidTel">Поле обязательно для ввода</p>
        </div>
        <div class="modal__portfolio">
            <button-app color="dark" @click="sendData">Отправить</button-app>
            <p>Нажимая на кнопку, я даю согласие на обработку персональных данных</p>
        </div>
    </modal-app>
</template>

<script>
    import ModalApp from "@/components/UI/modal/ModalApp";
    import ButtonApp from "@/components/UI/button/ButtonApp";
    import InputApp from "@/components/UI/input/InputApp";
    import Inputmask from "inputmask";
    export default {
        name: "PortfolioModal",
        components: {
            ModalApp, ButtonApp, InputApp
        },
        data () {
            return {
                modalMessage: 'оставьте свои контакты. мы свяжемся с вами и обсудим ваш проект',
                name: '',
                tel: '',
                isInvalidName: false,
                isInvalidTel: false
            }
        },
        computed: {
            invalidName () {
                return this.isInvalidName ? { 'border-bottom': '2px solid #EB5757' } : { 'border-bottom': '2px solid #c8c3c3' }
            },
            invalidTel () {
                return this.isInvalidTel ? { 'border-bottom': '2px solid #EB5757' } : { 'border-bottom': '2px solid #c8c3c3' }
            }
        },
        methods: {
            sendData () {
                if (this.name && this.tel && !this.tel.match(/_/)) {
                    console.log(this.name, this.tel)
                    this.name = this.tel = ''
                    this.$emit('showThanksModal')
                }
            }
        },
        watch: {
            name (val) {
                val ? this.isInvalidName = false : this.isInvalidName = true
            },
            tel (val) {
                val ? this.isInvalidTel = false : this.isInvalidTel = true
            }
        },
        mounted () {
            const input = document.querySelector('#tel')
            const im = new Inputmask('9-999-999-99-99')
            im.mask(input)
        }
    }
</script>

<style scoped lang="scss">
    @use "src/components/UI/modal/style";
</style>