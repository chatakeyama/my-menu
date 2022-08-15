import config from "../config.json"
import MenuItem from "../interfaces/MenuItem"
import Category from "../interfaces/Category"
import http from "./HttpService.ts"

const apiEndpoint = config.apiUrl

export async function getAll(): Promise<MenuItem[]> {
  const promise = http.get(`${apiEndpoint}/menuItems`)
  const { data } = await promise
  return data
}

export async function getCategories(): Promise<Category[]> {
  const promise = http.get(`${apiEndpoint}/categories`)
  const { data } = await promise
  return data
}

export function search(text: string): Promise<MenuItem[]> {
  return http.get(`${apiEndpoint}/menuItems?title_like=${text}`)
}
