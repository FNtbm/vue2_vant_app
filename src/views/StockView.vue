<template>
  <div>
    <van-tabs
      v-model="active"
      animated
      :border="true"
      :line-width="30"
      :stick="true"
    >
      <van-tab
        v-for="(exchange, index) in exchange"
        :title="exchange"
        :key="index"
      >
        <template #default>
          <van-cell-group inset>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
          </van-cell-group>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import { getStockList } from "@/api/index";
export default {
  components: { [Tabs.name]: Tabs, [Tab.name]: Tab },
  data() {
    return {
      active: "",
      stockList: [],
      loading: false,
      exchange: ["全球", "沪深", "港股", "美股"],
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      this.loading = true;
      this.onLoad();
    },
  },
  mounted() {
    getStockList().then((res) => {
      console.log(res.stockList);
      this.stockList.push(...res.stockList);
      this.finished = true;
    });
  },
};
</script>
<style lang="less" scoped>
.van-tabs {
  /deep/.van-tabs__wrap {
    height: 2.4rem;
    .van-tab {
      line-height: 1.3rem;
      font-size: 0.8rem;
    }
  }
}
.van-cell-group {
}
</style>
