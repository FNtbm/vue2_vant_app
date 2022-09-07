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
export const getStockList = (index) => {
  return request({
    method: "GET",
    url: `api2/finance/api/stocks?type=${index}`,
  });
};

export const getFund = () => {
  return request({
    method: "GET",
    url: `api2/finance/api/fund/tablist`,
  });
};
