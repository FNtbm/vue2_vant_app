// postcss.config.js
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    "postcss-pxtorem": {
      rootValue({ file }) {
        // 1rem 为37.5px 且自动进行单位转换，不使用vant 1rem 为75px
        return file.indexOf("vant") !== -1 ? 37.5 : 75;
      },
      propList: ["*"],
    },
  },
};
