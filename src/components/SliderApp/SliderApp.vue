<template>
    <div class="slider">
        <subtitle-app>реализованные проекты</subtitle-app>
        <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }" :slides-per-view="4">
            <swiper-slide class="swiper-slide">
                <img src="@/assets/2.png" alt="2">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img src="@/assets/3.png" alt="3">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img src="@/assets/4.png" alt="4">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img src="@/assets/5.png" alt="5">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img src="@/assets/8.png" alt="8">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img src="@/assets/9.png" alt="9">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img src="@/assets/10.png" alt="10">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import SubtitleApp from "@/components/UI/subtitle/SubtitleApp";
    import { Pagination } from 'swiper'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    export default {
        name: "SliderApp",
        components: {
            Swiper, SwiperSlide, SubtitleApp
        },
        data () {
            return {
                modules: [Pagination]
            }
        },
        mounted () {
            const bull = document.querySelectorAll('.swiper-pagination-bullet')
            bull.forEach(item => {
                item.style.cssText = `
                    width: 100px;
                    height: 2px;
                    background: black;
                    border-radius: 1%;
                `;
            })
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>