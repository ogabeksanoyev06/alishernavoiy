import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/directives/click-outside";
// import VueKatex from "vue-katex";
// import "katex/dist/katex.min.css";

Vue.config.productionTip = false;
Vue.component("AppText", AppText);

// Vue.use(VueKatex, {
//   globalOptions: {
//     delimiters: [
//       { left: "$$", right: "$$", display: true },
//       { left: "$", right: "$", display: true },
//       { left: "\\(", right: "\\)", display: true },
//       { left: "\\[", right: "\\]", display: true },
//     ],
//     trust: true,
//   },
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
