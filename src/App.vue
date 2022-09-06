<template>
  <div id="app">
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>

    <!-- 底部导航栏 -->
    <TabBottom></TabBottom>
  </div>
</template>
<script>
// import axios from "axios";
// import { getTest } from "@/api/index";
// import axios from "axios";
import TabBottom from "@/components/TabBottom.vue";

export default {
  data() {
    return {};
  },
  comments: [TabBottom],
  // mounted() {
  //   getTest().then((res) => {
  //     console.log(res);
  //   });
  // },
};
</script>
<style lang="less" scoped></style>
