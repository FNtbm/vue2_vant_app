// postcss.config.js
// module.exports = {
//   plugins: {
//     // postcss-pxtorem 插件的版本需要 >= 5.0.0
//     "postcss-pxtorem": {
//       rootValue: 20,
//       propList: ["*"],
//     },
//   },
// };
const AutoPrefixer = require("autoprefixer");
const px2rem = require("postcss-pxtorem");
module.exports = ({ file }) => {
  let remUnit; // 判断条件 请自行调整 我使用的是 mand-mobile ui 没有对vant引入进行测试
  if (file && file.dirname && file.dirname.indexOf("vant") > -1) {
    remUnit = 37.5;
  } else {
    remUnit = 75;
  }
  return {
    plugins: [
      px2rem({ remUnit: remUnit }),
      AutoPrefixer({
        overrideBrowserslist: ["last 20 versions", "android >= 4.0"],
      }),
    ],
  };
};
