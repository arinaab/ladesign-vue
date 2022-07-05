<template>
    <div class="slider">
        <subtitle-app>реализованные проекты</subtitle-app>
        <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }" :slides-per-view="getWidth">
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
        computed: {
          getWidth () {
              switch (true) {
                  case this.inWidth >= 1200:
                      return 4
                  case this.inWidth >= 992 && this.inWidth <= 1200:
                      return 3
                  case this.inWidth >= 768 && this.inWidth <= 991:
                      return 2
                  case this.inWidth >= 576 && this.inWidth <= 767:
                      return 2
                  case this.inWidth >= 320 && this.inWidth <= 575:
                      return 1
                  default:
                      return 4
              }
          }
        },
        data () {
            return {
                modules: [Pagination],
                inWidth: ''
            }
        },
        methods: {
          setStyleToBullets () {
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
        },
        mounted () {
            this.setStyleToBullets()
            window.addEventListener('resize', () => {
                this.inWidth = window.innerWidth
                this.setStyleToBullets()
            })
        }
    }
</script>

<style scoped lang="scss">
    @use "style";
</style>