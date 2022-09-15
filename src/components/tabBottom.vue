<template>
  <div v-if="show">
    <van-tabbar v-model="active" :placeholder="true">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" to="/stock"
        >股票</van-tabbar-item
      >
      <van-tabbar-item icon="refund-o" to="/fund">基金</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      show: true,
      transitionName: "",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        let index = ["/", "/stock", "/fund", "/user"].indexOf(to.path);
        if (index === -1) {
          this.show = false;
        } else {
          this.active = index;
          this.show = true;
        }
      },
    },
  },
  updated() {},
};
</script>

<style lang="less" scoped>
.van-tabbar {
  position: fixed;
}
</style>
