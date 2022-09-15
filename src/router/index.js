import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import StockView from "../views/StockView.vue";
import FundView from "../views/FundView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/article/:id",
    name: "article",
    props: (route) => ({ article: route.params.article }),
    component: () => import("../views/HomeArtical.vue"),
  },
  {
    path: "/fund",
    name: "fund",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FundView,
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
  scrollBehavior(to) {
    const position = {};
    if (to.matched.some((m) => m.meta.scrollToTop)) {
      position.x = 0;
      position.y = 0;
    }
    return position;
  },
});

export default router;
