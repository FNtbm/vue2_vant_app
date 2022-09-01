import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./mock/index";
import "@/assets/less/global.less";
import "@/icons/index.js";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//渲染主组件 并挂载至html中的#app
