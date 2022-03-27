import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import LikeNumber from "./components/LikeNumber.vue"

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", function(value) {
  console.log("filter");
  return value.toUpperCase();
});
Vue.mixin({
  created() {
    console.log("global mixin");
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');

new Vue({
  render: h => h(App2),
}).$mount('#app2');