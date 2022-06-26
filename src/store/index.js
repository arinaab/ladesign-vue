import { createStore } from 'vuex'
import MainModule from "@/store/modules/main/MainModule";
import PortfolioModule from "@/store/modules/portfolio/PortfolioModule";

export default createStore({
  modules: {
    MainModule,
    PortfolioModule
  }
})

