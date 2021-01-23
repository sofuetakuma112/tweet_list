import Vue from 'vue'
import VueRouter from "vue-router"
import LandingPage from "./components/LandingPage"
import ListDisplay from "./components/ListDisplay"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: LandingPage },
  { path: '/top', component: ListDisplay }
]

const router = new VueRouter({
  routes: routes
})

export default router