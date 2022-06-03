import axios from 'axios';
// import { URL_BACKEND_API } from './constants';

const api = axios.create({
  // baseURL: URL_BACKEND_API,
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default api;