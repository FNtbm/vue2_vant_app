<template>
  <div>
    <van-tabs type="card" animated>
      <van-tab
        v-for="fund in funds"
        :title="fund.tab_name"
        :key="fund[tab_type]"
      >
        <div>
          <h3>{{ fund.comment }}</h3>
          <p>{{ fund.tips }}</p>
        </div>
        <van-cell-group inset>
          <van-cell
            v-for="item in fund.items"
            :key="item.code"
            :icon="item.img_src"
            :title="item.name"
          >
            <!-- <template #default>
              <div>{{ content.value }}</div>
              <div>{{ content.desc }}</div>
            </template> -->
          </van-cell>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getFund } from "@/api/index";
export default {
  data() {
    return {
      funds: [],
    };
  },
  beforeCreate() {
    getFund().then(({ data }) => {
      this.funds.push(...data.tab);
    });
  },
};
</script>
<style lang="less">
.van-tabs {
  p {
    font-size: 13px;
    padding: 5px 10px;
  }
}
@height: 80px;
.van-cell {
  padding: 0 10px;
  height: @height;
  line-height: @height;
  text-align: center;

  .van-icon__image {
    height: @height;
    width: 80px;
  }
}
</style>
