<template>
  <div>
    <div class="top"></div>
    <van-tabs v-model="active" animated>
      <van-tab v-for="(title, index) in titles" :title="title" :key="title">
        {{ index }}
        <!-- <van-list v-for="stock in stocks[active]">
          <van-cell :title="stock[]" />
        </van-list> -->
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
// import { getStockList } from "../api/index";
export default {
  data() {
    return {
      active: "",
      titles: ["全球", "沪深", "港股", "美股"],
      stocks: [],
    };
  },
};
// computed:{
//   active(){

//   }
// }
//   watch: {
//     active: {
//       immediate: true,
//       handler(current) {
//         if (!this.stocks[current]) {
//           getStockList(current).then(({ data }) => {
//             this.stocks[current] = data;
//           });
//         }
//       },
//     },
//   },
// };
</script>
<style lang="less" scoped>
// .top {
//   height: 1px;
// }
</style>
