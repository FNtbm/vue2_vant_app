<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image :src="image" :alt="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
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
.my-swipe img {
  width: 375px;
}
</style>
