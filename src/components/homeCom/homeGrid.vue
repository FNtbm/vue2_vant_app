<template>
  <div class="homeGrid">
    <van-grid :column-num="3" icon-size="35px" :clickable="true" squire>
      <van-grid-item icon="shopping-cart"> </van-grid-item>
      <van-grid-item icon="gift"> </van-grid-item>
      <van-grid-item icon="fire"> </van-grid-item>
      <van-grid-item icon="bag"> </van-grid-item>
      <van-grid-item icon="send-gift"> </van-grid-item>
      <van-grid-item icon="friends"> </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less">
.homeGrid {
  padding-top: 2.4rem;
  font-size: 0.8rem;
  .van-grid-item {
    // margin: 5px;
    margin: 40px 0;
  }
}
</style>
