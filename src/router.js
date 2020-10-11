import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import HomeRouted from "@/views/HomeRouted";
import About from "@/views/About";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
      name: "home",
      component: Home,
    },
    {
      path: "/currency/:currency",
      name: "latest-currency",
      component: HomeRouted,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
