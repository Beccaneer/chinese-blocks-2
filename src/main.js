import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueI18n from "vue-i18n";
import sentences from "./assets/sentenceTranslations";

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  messages: sentences
});

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
