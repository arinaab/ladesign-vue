import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SwiperClass, { /* swiper modules... */ } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'

SwiperClass.use([/* swiper modules... */])
createApp(App)
    .use(store)
    .use(router)
    .use(VueAwesomeSwiper)
    .mount('#app')
