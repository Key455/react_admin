import axions from 'axios'

const request = axions.create({
  baseURL: '/',
  timeout: '20000',
  headers: {}
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 200-299表示响应请求正常
    // code20000表示功能响应正常，非20000就是功能响应失败
    if (response.data.code === 20000) {
      // 功能正常 返回数据
      return response.data.data
    } else {
      // 返回一个失败的promise 表示功能响应失败的信息
      return Promise.reject(response.data.message)
    }
  },
  (error) => {
    // console.log(error.message.status); // 响应状态码
    if (error.message) {
      // 服务器返回了响应 但是响应失败了
      if (error.message === 401) {
        
      }
    } else {
      // 服务器没有返回响应
    }
  }
)

export default request