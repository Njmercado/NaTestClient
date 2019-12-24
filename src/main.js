import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Vuex from "vuex";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Vuex);

const vuetifyOptions = {};

new Vue({
  store,
  render: h => h(App),
  vuetify: new Vuetify(vuetifyOptions)
}).$mount("#app");
