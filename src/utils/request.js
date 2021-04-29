import axios from 'axios'
const instance = axios.create({
  // 接口的基础地址
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  // 10秒超时
  timeout: 10000
})
// 自定义封装的get
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
// 自定义封装的post
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
