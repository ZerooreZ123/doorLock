// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import * as vux from "vux";
import App from "./App";
import router from "./router";
import "@/assets/css/normalize.css";

Vue.use(vux);
Vue.config.productionTip = false;

// const newSize = document.documentElement.getBoundingClientRect().width / 10;
// document.documentElement.style.fontSize = `${newSize}px`;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
