import request from "@/utils/request";

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

export const getArtical = () => {
  return request({
    method: "GET",
    url: "/home/artical",
  });
};
export const getStockList = () => {
  return request({
    method: "GET",
    url: "/home/stockList",
  });
};
