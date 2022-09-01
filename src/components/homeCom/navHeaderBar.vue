<template>
  <div>
    <!-- <van-icon name="wap-home-o" /> -->
    <!-- <van-icon name="envelop-o" /> -->
    <van-nav-bar>
      <template #left>
        <van-icon name="wap-home-o" size="20" color="black" />
      </template>
      <template #title>
        <van-search
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
          left-icon="search"
        />
      </template>
      <template #right>
        <van-icon name="envelop-o" size="20" color="black" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
//
</style>
