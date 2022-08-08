import axios from "axios";
import config from "../config.json";
import Dish from "../interfaces/Dish";
import Category from "../interfaces/Category";

const apiEndpoint = config.apiUrl;

export async function getAll(): Promise<Dish[]> {
  const promise = axios.get(`${apiEndpoint}/dishes`);
  const { data } = await promise;
  return data;
}

export async function getCategories(): Promise<Category[]> {
  const promise = axios.get(`${apiEndpoint}/categories`);
  const { data } = await promise;
  return data;
}

export function search(text: string) {
  return axios.get(`${apiEndpoint}/dishes?title_like=${text}`);
}
