<template>
  <div>
    <van-cell-group inset>
      <!-- key 用于减少真实DOM的更新 -->
      <van-cell
        class="cell"
        v-for="item of artical"
        :key="item.count"
        :to="`/artical/${item.count}`"
      >
        <div class="cell_top">
          <van-image
            :src="item.img"
            round
            width="2.2rem"
            height="2.2rem"
          ></van-image>

          <span class="cell_name"> {{ item.name }}</span
          >|
          <span class="cell_date"> 发布于{{ item.date }}</span>
        </div>

        <h4>{{ item.title }}</h4>
        <p>{{ item.paragraph }}</p>

        <div class="cell_bottom">
          <div><van-icon name="share-o" />{{ item.share }}</div>
          <div>
            <van-icon name="chat-o" /><span>{{ item.communication }}</span>
          </div>

          <div>
            <van-icon name="good-job-o" /><span>{{ item.like }}</span>
          </div>
        </div>
      </van-cell>
    </van-cell-group>
    <van-loading v-if="isloading && !isfinish" color="#1989fa" size="30px" />
    <div v-if="isfinish" class="finish">什么也没有发现 ~ ~</div>
  </div>
</template>
<script>
import { getArtical } from "@/api/index";
export default {
  data() {
    return {
      artical: [],
      page: 0,
      isfinish: false,
      isloading: false,
    };
  },
  methods: {
    getList() {
      this.isloading = true;
      // console.log(this);
      getArtical().then((res) => {
        this.artical.push(...res.list);
        this.page++;
        console.log(`第${this.page}页，共三页`);
        // console.log(res.list.map((i) => i.count));
        this.isloading = false;
      });
    },
  },
  mounted() {
    this.getList();
    // 防抖函数;
    let fn = () => {
      if (this.page == 3) {
        this.isfinish = true;
        return;
      }
      let scrollHeight = document.documentElement.scrollHeight;
      let scrollTop = document.documentElement.scrollTop;
      let innerHeight = window.innerHeight;
      //当滚动条距底部60px且停留超过0.25秒后，再次请求数据
      //bug1 增加请求状态避免重复请求
      if (!this.isloading && scrollHeight - scrollTop - innerHeight < 60) {
        this.getList();
      }
    };

    function debounce(fn, dalay) {
      let timer = null;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, dalay);
      };
    }
    // 滚动防抖;
    window.addEventListener("scroll", debounce(fn, 250));
  },
};
</script>
<style lang="less">
.van-cell-group {
  font-family: "Microsoft YaHei";
  // padding-bottom: 0.5rem;
  // margin-top: 1rem;
  .cell {
    background-color: #f9f9fb;
    position: relative;
    padding: 50px 40px;
    margin-top: 20px;
    box-shadow: 0 0 3px black;
    .cell_top {
      display: flex;
      align-items: center;
      flex-flow: row wrap;
      .cell_name {
        margin-left: 0.3rem;
        font-size: 0.8rem;
      }
      .cell_date {
        color: rgba(128, 128, 128);
        font-size: 0.7rem;
        // top: 20px;
      }
    }
    h4 {
      // margin-bottom: 0.2rem;
      margin-top: 0.8rem;
    }
    p {
      height: 1.2em;
      // width: 100%;
      font-size: 0.8rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: clip;
      margin-top: 0.5rem;
    }
    .cell_bottom {
      width: 8rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
    }
  }
}
.van-loading {
  text-align: center;
}
.finish {
  @height: 2rem;
  height: @height;
  text-align: center;
  line-height: @height;
  background-color: rgba(187, 231, 217, 0.8);
}
</style>
