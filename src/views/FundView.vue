<template>
  <div>
    <FundSwiper />
    <FundTab />
  </div>
</template>
<script>
import FundSwiper from "@/components/fundPage/FundSwiper.vue";
import FundTab from "@/components/fundPage/FundTab.vue";

export default {
  components: [FundSwiper, FundTab],
};
</script>
<style lang="less" scoped></style>
