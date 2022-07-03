import { request } from '@/utils/request'

export const fetchUserInfo = async (params: unknown) => {
  try {
    const res = await request({
      url: '/api/user/login',
      method: 'get',
      data: params
    })
    return res
  } catch (error) {
    console.log('error', error)
  }
}
