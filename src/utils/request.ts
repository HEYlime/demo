import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

axios.defaults.withCredentials = true;

export enum MethodType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

// 创建实例
const httpServerce = axios.create({
  baseURL: 'http://192.168.1.106:8000',
  // baseURL: 'http://localhost:8000',
  timeout: 3000
})
// 添加请求拦截器
httpServerce.interceptors.request.use(
  // 在发送请求之前做些什么
  (config) => {
    if (true) {
      config.headers['User-Token'] = '';
    }
    return config;
  },
  // 对请求错误做些什么
  (error) => {
    Promise.reject(error)
  }
)

httpServerce.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status == 'success') {
      return res;
    } else {
      alert(res.info)
    }
  },
  error => {
    if (error && error.response) {
      error.message = "连接到服务器失败";
      return Promise.reject(error);
    }
  }
)

export function httpGet(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    httpServerce({
      method: 'GET',
      url: url,
      params: params
    }).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function httpPost(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    httpServerce({
      method: 'POST',
      url: url,
      data: qs.stringify(params)
    }).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default {
  httpGet,
  httpPost
}


