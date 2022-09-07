<template>
  <div id="app">
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

export default {
  data() {
    return {};
  },
  comments: { tabBottom },
  // mounted() {
  //   getTest().then((res) => {
  //     console.log(res);
  //   });
  // },
};
</script>
<style lang="less" scoped></style>
