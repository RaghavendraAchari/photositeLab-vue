import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import View from "./components/View.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    name: "View",
    path: "/view/",
    component: View,
    props: true
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

// import custom from "./customScript";

// custom();
