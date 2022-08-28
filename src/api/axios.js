import axios from 'axios'
import config from '../config'

//判断是不是开发环境，如果是开发环境就换成开发地址，否则就换成生产环境地址//
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getIndexConfig() {
    const config = {
      baseUrl: this.baseUrl,
      header: {}
    }
    return config
  }

  interceptors(instance) {
    instance.interceptors.request.use(
      function (config) {
        return config
      },
      function (error) {
        return Promise.reject(error);
      }
    )

    instance.interceptors.reponse.use(
      function (response) {
        console.log(response,'response')
        return response
      }, function (error) {
        console.log(error,'error')
      return Promise.reject(error);
    }
     )

  }

  request(options) {
    const instance = axios.create()
    options = { ...this.getIndexConfig(), ...options }
    return instance(options)
  }

}

export default new HttpRequest(baseUrl)

