import axios from 'axios';
import { BACKEND_API } from './constants';

const api = axios.create({
  baseURL: BACKEND_API,
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