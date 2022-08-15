import axios from "axios"
axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response?.status >= 400 && error.response?.status < 500

  if (!expectedError) {
    console.error("Erro inesperado")
  }

  return Promise.reject(error)
})

export default {
  get: axios.get
}
