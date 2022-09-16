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
    component: () => import("../views/HomeArticle.vue"),
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
    path: "/login",
    name: "login",

    component: () => import("../views/Login.vue"),
  },
  {
    path: "/user",
    name: "user",

    component: () => import("../views/User.vue"),
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

router.beforeEach(async (to, from, next) => {
  if (!sessionStorage.login && to.name != "login" && to.name == "user") {
    next({ name: "login" });
  } else next();
});

//进入user时判断是否登录，是进入，否进入登录页面
export default router;
