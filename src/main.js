import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import VFluent
import VueFluent from "vfluentdesign";
import "vfluentdesign/lib/index.css";
Vue.use(VueFluent)

// import global styles
import "@/global/styles/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
