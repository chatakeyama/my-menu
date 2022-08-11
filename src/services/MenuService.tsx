import axios from "axios";
import config from "../config.json";
import MenuItem from "../interfaces/MenuItem";
import Category from "../interfaces/Category";

const apiEndpoint = config.apiUrl;

export async function getAll(): Promise<MenuItem[]> {
  const promise = axios.get(`${apiEndpoint}/menuItems`);
  const { data } = await promise;
  return data;
}

export async function getCategories(): Promise<Category[]> {
  const promise = axios.get(`${apiEndpoint}/categories`);
  const { data } = await promise;
  return data;
}

export function search(text: string) {
  return axios.get(`${apiEndpoint}/menuItems?title_like=${text}`);
}
