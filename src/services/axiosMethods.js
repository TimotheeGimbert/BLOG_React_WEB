import axios from "axios";
import Cookies from 'js-cookie';

const API = axios.create({ baseURL: 'http://localhost:8080' });
const API_URL = 'http://localhost:3000/';

API.interceptors.request.use(({ headers, ...config }) => ({
    ...config,
    headers: {
        ...headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${headers.Authorization ||  Cookies.get('token')}`,
    },
}));

export default class APIManager {
  static async getArticles() {
      const response = await API.get(API_URL);
      return response.data;
  }
}
