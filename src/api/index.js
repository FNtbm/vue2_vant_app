import request from "@/utils/request";
// const fs = require("fs");

// 获取股票指数
export const getStock = () => {
  return request({
    method: "GET",
    url: "/home/stock",
  });
};

export const getFire = () => {
  return request({
    method: "GET",
    url: "/home/fire",
  });
};

export const getArticle = () => {
  return request({
    method: "GET",
    url: "/home/artical",
  });
};
// export const getStockList = () => {
//   return request({
//     method: "GET",
//     url: "/home/stockList",
//   });
// };

import { data } from "./json.js";

export const getStockList = (index) => {
  let a = `stock${index}`;
  // console.log(stock[a]);
  return new Promise((succeed) => {
    succeed(data.stock[a]);
  });
};

export const getFund = () => {
  // console.log(fundList);
  return new Promise((succeed) => {
    succeed(data.fundList);
  });
};
