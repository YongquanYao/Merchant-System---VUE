import axios from 'axios'
import apiConfig from '@/service/api.config'
/**
 * 公共headers
 */
const headerObj = {
    // 'Content-Type': 'application/json',
    // "Access-Control-Allow-Headers" : "Content-Type",
    // "Access-Control-Allow-Origin": "*",
}
//
const service = axios.create({
    baseURL: apiConfig.baseURL,
    timeout: 500000, // request timeout
    // withCredentials: true,
    headers: headerObj
})




// request interceptor 请求拦截器可以让请求带上token (VUEX里取)
// service.interceptors.request.use(
//     config => {
//       // Do something before request is sent
//       if (store.getters.token) {
//         // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
//         config.headers['X-Token'] = getToken()
//       }
//       return config
//     },
//     error => {
//       // Do something with request error
//       console.log(error) // for debug
//       Promise.reject(error)
//     }
// )

//相应拦截器
service.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error)
    }
)

export default service