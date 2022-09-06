<template>
  <div>
    <!-- 顶部导航栏 -->
    <NavHeaderBar />
    <!-- 顶部list -->
    <HomeGrid />
    <!-- 今日热点 -->
    <FireToday />
    <!-- 文章 -->
    <ArticleNow />
  </div>
</template>

<script>
// import SvgIcon from "@/components/svgIcon.vue";
import NavHeaderBar from "@/components/homeCom/NavHeaderBar.vue";
import HomeGrid from "@/components/homeCom/HomeGrid.vue";
import FireToday from "@/components/homeCom/FireToday.vue";
import ArticleNow from "@/components/homeCom/ArticleNow.vue";

// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    NavHeaderBar,
    HomeGrid,
    FireToday,
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
