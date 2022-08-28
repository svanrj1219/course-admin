import axios from "axios";

const instance = axios.create({
  baseURL: "http://1.15.144.204:8080", // 通过使用配置的proxy来解决跨域
  timeout: 2000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("x-auth-token");
    if (token) {
      config.headers = {
        Authorization: token,
      };
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    if (error.response.status === 500 && error.response.data.code === 2005) {
      // 使用HashRouter
      // const router = new useNavigate();
      // 如果是token过期，直接跳到登录页
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
