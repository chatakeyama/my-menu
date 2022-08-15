import axios from "axios"
import {toast} from "react-toastify"

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response?.status >= 400 &&
    error.response?.status < 500

  if (!expectedError) {
    toast.error("Erro inesperado.")
  }

  return Promise.reject(error)
})

export default {
    get: axios.get
}
