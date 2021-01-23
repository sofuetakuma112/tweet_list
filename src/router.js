import Vue from 'vue'
import VueRouter from "vue-router"
import LandingPage from "./components/LandingPage"
import ListDisplay from "./components/ListDisplay"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: LandingPage },
    { path: "/top", component: ListDisplay }
  ]
});