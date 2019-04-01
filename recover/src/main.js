import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import store from "./store/index"
import Header from "@/common/header"


Vue.config.productionTip = false


Vue.component("Header",Header);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
