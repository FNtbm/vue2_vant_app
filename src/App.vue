<template>
  <div id="app">
    <tabTop></tabTop>
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>

    <!-- 底部导航栏 -->
    <tabBottom></tabBottom>
  </div>
</template>
<script>
// import axios from "axios";
// import { getTest } from "@/api/index";
// import axios from "axios";
import tabBottom from "@/components/tabBottom.vue";
import navHeaderBarVue from "./components/homeCom/navHeaderBar.vue";
export default {
  data() {
    return {};
  },
  components: { tabBottom, tabTop: navHeaderBarVue },
  // mounted() {
  //   getTest().then((res) => {
  //     console.log(res);
  //   });
  // },
};
</script>
<style lang="less" scoped></style>
