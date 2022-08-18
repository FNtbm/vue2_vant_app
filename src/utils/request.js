import axios from "axios";
// 导入全局的状态管理
// import store from "../store";
// 在不同的环境下请求不同的api服务器
// 生产环境下就是用生产环境的接口
// 测试环境下就是用测试服务器接口
// 开发环境下就用开发环境接口
// let apiBaseUrl = {
//   production: "api/finance/api",
//   development: "http://api.cpengx.cn/finance/api",
//   testDev: "api/finance/api",
// };
// console.log(process.env.NODE_ENV);

// 创建axios请求实例对象
const request = axios.create({
  // 配置接口的基准路径
  baseURL: "/",
});

// 拦截请求;
// request.interceptors.request.use(
//   (config) => {
//     const { user } = store.state;
//     // user.token = {Hm_lvt_519d72adb78a0bf66de7bae18e994322=1659176052}
//     console.log("user", user);
//     if (user && user.token) {
//       config.headers.Authorization = `Bearer ${user.token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // 如果请求出错了，还没有发送出去，就会进行这里
//     return Promise.reject(error);
//   }
// );

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return response.data;
    } else {
      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
