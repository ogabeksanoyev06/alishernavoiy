import Vue from "vue";
import Vuex from "vuex";
import generalOptions from "./Modules/generalOptions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generalOptions,
  },
});
