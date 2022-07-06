<template>
    <div class="question">
        <subtitle-app :style="subtitleStyle">напишите нам</subtitle-app>
        <p class="question__text">
            Мы всегда рады ответить на интересующие  вас вопросы. Заполните форму и наш специалист свяжется с вами.
        </p>
        <div class="question__form">
            <input-app v-model="name" type="text" placeholder="Ваше имя"></input-app>
            <input-app v-model="email" type="text" placeholder="Ваша эл.почта"></input-app>
            <input-app v-model="question" type="text" placeholder="Ваш вопрос"></input-app>
            <div class="question__label">
                <img src="@/assets/attach.svg" alt="attach">
                <label for="file">Прикрепить файл</label>
                <input-app type="file" id="file" :accept="extensions"
                @change="downloadFile"></input-app>
            </div>
            <div class="question__submit">
                <!-- eslint-disable -->
                <button-app color="dark" @click="sendQuestion">Отправить</button-app>
                <p>Нажимая на кнопку, я даю согласие на обработку персональных данных</p>
            </div>
        </div>
    </div>
</template>

<script>
    import InputApp from "@/components/UI/input/InputApp";
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    import ButtonApp from "@/components/UI/button/ButtonApp";
    export default {
        name: "QuestionApp",
        components: {
            InputApp, SubtitleApp, ButtonApp
        },
        computed: {
            subtitleStyle () {
                return {
                    'font-size' : '30px',
                    'text-align' : 'left'
                }
            },
            extensions () {
                return '.jpg,.jpeg,.png,.doc,.docx,.pdf,.xlsx'
            }
        },
        data () {
            return {
                name: '',
                email: '',
                question: '',
                file: ''
            }
        },
        methods: {
            sendQuestion () {
                if (this.name && this.email && this.question) {
                    const formData = new FormData()
                    formData.append('name', this.name)
                    formData.append('email', this.email)
                    formData.append('question', this.question)
                    if (this.file) {
                        formData.append('file', this.file)
                    }
                    for (let key of formData.entries()) {
                        console.log(key)
                    }
                }
            },
            downloadFile (e) {
                this.file = e.target.value
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>