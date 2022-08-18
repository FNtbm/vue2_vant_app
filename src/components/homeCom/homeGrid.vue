<template lang="">
  <div class="homeGrid">
    <van-grid :column-num="3" icon-size="35px" :clickable="true" squire>
      <van-grid-item text="购物" icon="shopping-cart"> </van-grid-item>
      <van-grid-item text="礼物" icon="gift"> </van-grid-item>
      <van-grid-item text="火爆" icon="fire"> </van-grid-item>
      <van-grid-item text="背包" icon="bag"> </van-grid-item>
      <van-grid-item text="送礼" icon="send-gift"> </van-grid-item>
      <van-grid-item text="朋友" icon="friends"> </van-grid-item>
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
}
</style>
