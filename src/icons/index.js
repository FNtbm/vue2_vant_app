import Vue from "vue";
import svgIcon from "@/components/svgIcon";

// icons图标自动加载
const req = require.context("./svg", false, /\.svg$/);
req.keys().map(req);

// 全局注册svg-icon组件
Vue.component("svg-icon", svgIcon);
