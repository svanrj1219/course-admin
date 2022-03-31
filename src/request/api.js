import request from './request'

// 首页默认数据
export const GetTodayTaskApi = () => request.post('/admin/getTodayTask');

export const GetHistoryJf = () => request.post('/admin/getHistoryJf');

export const GetTaskSummary = () => request.post('/admin/getTaskSummary');

export const GetMallSummary = () => request.post('/admin/getMallSummary');

export const GetUnconverted = () => request.post('/admin/getUnconverted');

export const UpdateUnconverted = (params) => request.post('/admin/updateUnconverted',params);

// 登录接口
export const LoginApi = (params) => request.post('/login', params)
