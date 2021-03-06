import axios from "axios";

const http = axios.create({
  baseURL: "/api",
  timeout: 50000,
});

// 数据请求拦截
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 返回响应数据拦截
http.interceptors.response.use(
  (res) => {
    const data = res.data;
    // 状态码为 2xx 范围时都会调用该函数，处理响应数据
    if (res.status === 200) {
      const code = data.code;
      return Promise.resolve(data);
    }
  },
  (error) => {
    if (error.response.status) {
      // 状态码超过 2xx 范围时都会调用该函数，处理错误响应
      switch (error.response.status) {
        case 404:
          console.log('请求路径找不到！')
          break;
        case 502:
          console.error('服务器内部报错！')
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default http;
