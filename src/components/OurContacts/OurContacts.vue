<template>
    <div class="our">
        <subtitle-app :style="subtitleStyle">наши контакты</subtitle-app>
        <div class="our__wrapper">
            <div class="our__phone">
                <div class="our__img">
                    <img src="@/assets/phonedark.svg" alt="phone">
                </div>
                <a href="tel:+79184123443">+7 918 412-34-43</a>
            </div>
            <div class="our__mail">
                <div class="our__img">
                    <img src="@/assets/Icon_mail.svg" alt="mail">
                </div>
                <a href="mailto:ladesign@inbox.ru">ladesign@inbox.ru</a>
            </div>
            <div class="our__time">
                <div class="our__img">
                    <img src="@/assets/Icon_clock.svg" alt="clock">
                </div>
                <p>Пн - Сб 9:00 — 18:00</p>
            </div>
            <div class="our__location">
                <div class="our__img">
                    <img src="@/assets/icon_location.svg" alt="location">
                </div>
                <!-- eslint-disable -->
                <p data-location>г. Краснодар, ул. Братьев Игнатовых, 1/1</p>
            </div>
        </div>
    </div>
</template>

<script>
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    export default {
        name: "OurContacts",
        components: {
            SubtitleApp
        },
        computed: {
            subtitleStyle () {
                return {
                    'font-size' : '30px',
                    'text-align' : 'left'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>