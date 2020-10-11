import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import HomeRouted from "@/views/HomeRouted";
import PageNotFound from "@/views/PageNotFound";

const About = (resolve) => {
  require.ensure(["@/views/About.vue"], () => {
    resolve(require("@/views/About.vue"));
  });
};

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
    {
      path: "/currencies",
      redirect: "/",
    },
    {
      path: "/page-not-found",
      name: "404",
      component: PageNotFound,
    },
    {
      path: "*",
      redirect: "/page-not-found",
    },
  ],
});
