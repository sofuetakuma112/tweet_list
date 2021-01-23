import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "./components/LandingPage";
import Top from "./components/Top";
import HelloWorld from "./components/HelloWorld"

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: LandingPage },
    { path: "/top", component: Top },
    { path: "/hello", component: HelloWorld }
  ]
});
