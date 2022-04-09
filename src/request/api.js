import request from "./request";

// 首页默认数据
export const GetTodayTaskApi = () => request.get("/admin/getTodayTask");

export const GetHistoryJf = () => request.get("/admin/getHistoryJf");

export const GetTaskSummary = () => request.get("/admin/getTaskSummary");

export const GetMallSummary = () => request.get("/admin/getMallSummary");

export const GetUnconverted = () => request.get("/admin/unconverted");

export const GettaskLog = () => request.get("/admin/taskLog");

export const GetMallLog = () => request.get("/admin/mallLog");

export const UpdateUnconverted = (params) =>
  request.put("/admin/unconverted/"+ params.id);

// 登录接口
export const LoginApi = (params) => request.post("/login", params);
