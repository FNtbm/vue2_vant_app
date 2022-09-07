<template>
  <div>
    <!-- 顶部导航栏 -->
    <navHeaderBar />
    <!-- 顶部list -->
    <homeGrid />
    <!-- 今日热点 -->
    <fireToday />
    <!-- 文章 -->
    <ArticleNow />
  </div>
</template>

<script>
// import SvgIcon from "@/components/svgIcon.vue";
import navHeaderBar from "@/components/homeCom/navHeaderBar.vue";
import homeGrid from "@/components/homeCom/homeGrid.vue";
import fireToday from "@/components/homeCom/fireToday.vue";
import ArticleNow from "@/components/homeCom/ArticleNow.vue";

// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    navHeaderBar,
    homeGrid,
    fireToday,
    ArticleNow,
    // HelloWorld,
  },
  data() {
    return {
      number: 16,
    };
  },
  methods: {
    change() {
      this.number = 2;
    },
  },
  mounted() {},
};
</script>
