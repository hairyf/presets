// 使用具体参考luch-request官网: https://www.quanzhan.co/luch-request/guide/3.x/#example
import Http from 'luch-request';
import { ERROR_STRATEGY, STRATEGY_KEYS } from '@/api/error.strategy';
/** 定义默认配置 */
const http = new Http({
  baseURL: '',
  header: {},
});

/** 添加请求拦截器 */
http.interceptors.request.use((config) => {
  if (config.custom?.load) {
    uni.showLoading({ title: '加载中...' });
  }
  return config;
});
/** 添加响应拦截器 */
http.interceptors.response.use(
  (response) => {
    if (response.config.custom?.load) {
      uni.hideLoading();
    }
    return response;
  },
  (error) => {
    if (error.config.custom?.load) {
      uni.hideLoading();
    }
    // 处理所有错误信息
    if (
      typeof error.config.custom?.errorhandle === 'undefined' ||
      error.config.custom?.errorhandle
    )
      ERROR_STRATEGY[(error.statusCode ?? 1000) as STRATEGY_KEYS](error);
    return Promise.reject(error);
  }
);

export default http;
