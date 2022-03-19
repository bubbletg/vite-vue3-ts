import axios from 'axios'

const request = axios.create({
  baseURL: 'https://shop.fe.lagou.com/api/admin'
})

request.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

request.interceptors.response.use(function (response) {
  return response
}, function (err) {
  return Promise.reject(err)
})

export default request
