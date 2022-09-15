const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
const { defineConfig } = require("@vue/cli-service");

// const path = require("path");

// 定义resolve方法，获取绝对路径

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,

  configureWebpack: {
    // node: {
    //   fs: "empty",
    // },
    //该对象会被合并至webpack配置中
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  chainWebpack(config) {
    // config.node.set(fs, "empty");
    config.resolve.alias.set("@css", resolve("src/assets/css"));
    config.resolve.alias.set("@img", resolve("src/assets/img"));

    config.module.rule("svg").exclude.add(resolve("src/icons")).end();

    // 新增icons规则，设置svg-sprite-loader处理icons目录中svg文件
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
  },

  // 配置开发服务器
  devServer: {
    // 配置代理
    proxy: {
      "/api2": {
        // 若请求路径以 /api 开头
        target: "http://api.cpengx.cn",
        changOrigin: true,
        // Credentials: true,
        pathRewrite: {
          "^/api2": "",
        },
      },
      // "/api": {
      //   // 若请求路径以 /api 开头
      //   target: "https://es6.ruanyifeng.com",
      //   changOrigin: true,
      //   pathRewrite: {
      //     "^/api": "",
      //   },
      // },
      // "/api1": {
      //   // 若请求路径以 /api 开头
      //   target: "https://srv.carbonads.net",
      //   changOrigin: true,
      //   // Credentials: true,
      //   pathRewrite: {
      //     "^/api": "",
      //   },
      // },
    },
  },
});
