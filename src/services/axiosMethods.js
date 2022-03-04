import axios from "axios";
import Cookies from 'js-cookie';

const API = axios.create({ baseURL: 'http://localhost:3000' });
const API_URL = 'http://localhost:3000';

API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${headers.Authorization ||  Cookies.get('token')}`,
  },
}));

export default class APIManager {

  static async register(payload) {
    const response = await API.post(API_URL + `/users`, payload);
    console.log('>>> REGISTER response: ', response)
    return response.headers.authorization.split(' ')[1];
  }
  static async logIn(payload) {
    const response = await API.post(API_URL + `/users/sign_in`, payload);
    return response;
  }
  static async logOut() {
    const response = await API.delete(API_URL + `/users/sign_out`);
    console.log('>>> LOGOUT response: ', response)
    return response;
  }
  static async getArticles() {
    const response = await API.get(API_URL);
    return response.data;
  }
/*   static async getAuthorName(id) {
    const response = await API.get(API_URL + `/users/${id}`);
    return response.data;
  } */
  static async editArticle(id, newArticle) {
    const response = await API.put(API_URL + `/articles/${id}`, newArticle);
    return response.data;
  }
  static async deleteArticle(id) {
    const response = await API.delete(API_URL + `/articles/${id}`);
    return response.data;
  }
}
