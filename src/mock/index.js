const Mock = require("mockjs");
// const fs = require("fs");
// import * as fs from "fs/promises";
// let Random = Mock.Random;

//设置响应延迟
Mock.setup({ timeout: 200 });

Mock.mock("/home/fire", "get", () => {
  let fire = Mock.mock({
    "list|9": [
      {
        count: " @id()",
        "name|+1": ["上证指数", "深证指数", "创业指数"],
        "current|1000-5000.2": 2015.23,
        "amount|-10-10.2": 4.52,
      },
    ],
  });
  // fs.writeFile("./fire.json", fire, (err) => {
  //   console.log(err);
  // });
  return {
    data: fire,
  };
});

Mock.mock("/home/artical", "get", {
  "list|10": [
    {
      count: "@id()",
      name: "@ctitle(4)",
      title: "@ctitle(6,15)",
      paragraph: "@cparagraph(30,100)",
      date: "@date",
      img: "@img(10*10)",
      "like|0-200": 10,
      "share|0-200": 10,
      "communication|0-200": 10,
    },
  ],
});

Mock.mock("/home/stockList", "get", {
  "stockList|4": [
    {
      id: "@id()",
      "place|+1": ["全球", "沪深", "港股", "美股"],
      "list|5": [
        {
          id: "@id()",
          "name|+1": [
            "上证指数",
            "深证指数",
            "沪深3000",
            "创业板块",
            "大数据1000",
            "德利股份",
            "洛阳玻璃",
            "复旦微电",
            "中国移动",
          ],
          "current|1000-5000.2": 2015.23,
          "amount|-10-10.2": 4.52,
        },
      ],
    },
  ],
});
// list:[page1[{}],page2[{}]]
// function page() {
//   this.title = Random.ctitle(6, 6);
//   this.img = Mock.Random.image("200*200", "#FFFFFF", "nh");
//   this.color = Mock.Random.color();
//   this.content = Mock.Random.cparagraph(4, 4);
//   this.url = Mock.Random.url();
//   this.provide = Mock.Random.province();
// }
// let data = Array(parseInt(Math.random() * 10))
//   .fill()
//   .map(() => new page());

// return {
//   state: 200,
//   data: data,
// };

// let data = Mock.mock({
//   "list|10": [
//     {
//       "simCar|13000000000-19900000000": 1,
//       "operator|1": ["移动", "联通", "电信"],
//       "packageName|1": ["5元30M", "10元500M", "50元100G"],
//       validityPeriod: "@city",
//       "unitPrice|5-10": 5,
//       "quantity|10-30": 12,
//       "amount|1-100": 60,
//       "imei|800000000000000-900000000000000": 868120203709164,
//       user: "test",
//     },
//   ],
// });

// let e = Mock.mock({
//   "list|10": [1],
// });
