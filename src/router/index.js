import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import StockView from "../views/StockView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [],
  },
  {
    path: "/artical/:id",
    name: "artical",
    component: () => import("../views/HomeArtical.vue"),
  },
  {
    path: "/fund",
    name: "fund",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/FundView.vue"),
  },
  {
    path: "/stock",
    name: "stock",

    component: StockView,
  },
  {
    path: "/user",
    name: "user",

    component: () => import("../views/UserView.vue"),
  },
  {
    path: "*",
    name: "err",
    component: () => import("../views/ErrorView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
