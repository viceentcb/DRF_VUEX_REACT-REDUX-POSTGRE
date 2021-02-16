import axios from "axios";
import { Bar } from '../models/Bars';
import API_URL from './config'
import JwtService from './jwt.service';




const ApiService = {

  setHeader() {
    console.log('emtra set header')
    axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  query(resource: string, params: any) {
    return axios.get(resource, params).catch((error: any) => {
      throw new Error(`[RWV] ApiService ${(error)}`);
    });
  },

  get(resource: string, slug = "") {
    // console.log('entra',resource)
    return axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  getUser(resource: string, slug = "") {
    // console.log('entra',resource)
    return axios.get(`${API_URL}/${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },


  post(resource: string, params: any) {
    console.log(resource)
    return axios.post(`${API_URL}/${resource}`, params);
  },

  update(resource: string, slug: string, params: any) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource: string, params: any) {
    return axios.put(`${resource}`, params);
  },

  delete(resource: string) {
    return axios.delete(resource).catch((error: any) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const BarsService = {

  deleteBar(bar: Bar) {
    return axios.delete(`${API_URL}/bar/${bar.slug}`);
  },

  getBars() { //GET ALLS
    return ApiService.get(`${API_URL}/bars`);
  },

  getBar(slug: string) {  //GET ONE BAR 
    return ApiService.get(`${API_URL}/bars/${slug}`);
  },
  // addBar(bar: Bar) {
  //   return axios.post(`${API_URL}/bars/`, { bar });
  // },
  // updateBar(bar: Bar) {
  //   return axios.put(`${API_URL}/bars/${bar.slug}`, { bar });
  // }

  addBarFavotite(slug: string) {
    console.log('entra service')
    return ApiService.post(`bars/${slug}/favorite`,'');
  },
  removeBarFavorite(slug: string) {
    return ApiService.delete(`bar/${slug}/favorite`);
  }
}

