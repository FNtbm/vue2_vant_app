<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" :alt="image" class="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);

export default {
  data() {
    return {
      images: [
        require("../../assets/img/swipe.png"),
        require("../../assets/img/swipe1.png"),
        require("../../assets/img/swipe2.png"),
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.van-swipe {
  img {
    width: 375px;
    height: 187.5px;
  }
}
</style>
