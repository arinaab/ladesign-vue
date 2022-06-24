import { createStore } from 'vuex'
import MainModule from "@/store/modules/main/MainModule";

export default createStore({
  modules: {
    MainModule
  }
})

