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
  static async logIn(authObject) {
    console.log(authObject)
    const response = await API.post(API_URL + `/users/sign_in`, authObject);
    console.log(response);
    return response.data;
  }
  static async signUp(authObject) {
    console.log(authObject)
    const response = await API.post(API_URL + `/users`, authObject);
    console.log(response);
    return response.data;
  }
  static async logOut() {
    const response = await API.delete(API_URL + `/users/sign_out`);
    return response.data;
  }
}
