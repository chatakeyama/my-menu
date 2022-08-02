import axios from "axios";
import config from "../config.json";

const apiEndpoint = config.apiUrl;

export function search(text: string) {
  return axios.get(`${apiEndpoint}/dishes?title_like=${text}`);
}
