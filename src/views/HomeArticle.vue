<template>
  <div>
    <!-- 文章 -->
    <div class="article">
      <h2 class="title">{{ article.title }}</h2>
      <div class="author">
        <img :src="article.img" :alt="article.name" />
        <div class="author-info">
          <span>{{ article.name }}</span>
          <span>{{ article.date }}</span>
        </div>
      </div>
      <p>{{ article.paragraph }}</p>
    </div>
    <!-- 点赞评论 -->
    <div class="tab">
      <van-checkbox v-model="checked">
        <template #icon="props">
          <img
            @click="change"
            class="img-icon"
            :src="props.checked ? activeIcon : inactiveIcon"
          />
        </template>
      </van-checkbox>
      <van-checkbox>
        <template #icon="props">
          <img
            class="img-icon"
            src="https://api.iconify.design/fa-regular/comment-dots.svg"
          />
        </template>
      </van-checkbox>
      <van-checkbox>
        <template #icon="props">
          <img
            class="img-icon"
            src="https://api.iconify.design/ri:share-forward-2-fill.svg"
          />
        </template>
        <!-- <span>{{ article.share }}</span> -->
      </van-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  props: ["article"],
  data() {
    return {
      checked: true,
      good: [],
      activeIcon: "https://api.iconify.design/icon-park-outline/good-one.svg",
      inactiveIcon:
        "https://api.iconify.design/icon-park-twotone:good-one.svg?color=red",
    };
  },
  methods: {
    change() {
      this.article.like += this.checked ? 1 : -1;
    },
  },
};
</script>
<style lang="less" scoped>
.article {
  padding: 10px 15px;
  .title {
    text-align: center;

    // margin-bottom: 15px;
  }
  .author {
    display: flex;
    margin: 25px 0;
    font-size: 15px;
    img {
      max-width: 45px;
      border-radius: 100%;
    }
    .author-info {
      margin-left: 10px;
      span {
        display: block;
        margin: 2px 0;
      }
    }
  }
  p {
    font-size: 15px;
    line-height: 180%;
    text-indent: 2em;
  }
  background-color: rgba(196, 228, 135, 0.1);
}
.tab {
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(253, 253, 253);
  height: 35px;
  // align-items: space-around;
  .van-checkbox {
    span {
      height: 20px;
      font-size: 15px;
    }
    display: flex;
    justify-content: center;
    // align-items: center;
    width: 100px;
    height: 25px;
    &:nth-of-type(n) {
      border-right: 2px solid rgba(128, 128, 128, 0.5);
    }
    &:last-child {
      border: 0px;
    }
  }
  .img-icon {
    height: 20px;
  }
}
</style>
