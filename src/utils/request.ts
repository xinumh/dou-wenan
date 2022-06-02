/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'

export interface RequestOptions {
  /** 当前接口权限, 不需要鉴权的接口请忽略， 格式：sys:user:add */
  permCode?: string
  /** 是否直接获取data，而忽略message等 */
  isGetDataDirectly?: boolean
  /** 请求成功是提示信息 */
  successMsg?: string
  /** 请求失败是提示信息 */
  errorMsg?: string
  /** 是否mock数据请求 */
  isMock?: boolean
}

const BASE_URL = ''

const service = axios.create({
  // baseURL: baseApiUrl,
  timeout: 6000
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = ''
    if (token && config.headers) {
      // 请求头token信息，请根据实际情况进行修改
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use((response) => {
  const res = response.data
  if (res.code !== 200) {
    alert(res.message)
    return Promise.reject(res)
  }
  return res
})

export type Response<T = any> = {
  code: number
  message: string
  data: T
}

export type BaseResponse<T = any> = Promise<Response<T>>

export const request = async <T = any>(
  config: AxiosRequestConfig,
  options: RequestOptions = {}
): Promise<T> => {
  try {
    const {
      successMsg,
      errorMsg,
      permCode,
      isMock,
      isGetDataDirectly = true
    } = options

    // 如果当前是需要鉴权的接口 并且没有权限的话 则终止请求发起
    // if (permCode && !userStore.perms.includes(permCode)) {
    //   return $message.error('你没有访问该接口的权限，请联系管理员！')
    // }
    const fullUrl = `${BASE_URL + config.url}`
    config.url = fullUrl.replace(/(?<!:)\/{2,}/g, '/')

    const res = await service.request(config)
    message.error('111')
    return isGetDataDirectly ? res.data : res
  } catch (error) {
    return Promise.reject(error)
  }
}
