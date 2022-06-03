import { request } from '@/utils/request'

export const fetchList = async (params: unknown) => {
  try {
    const res = await request({
      url: '/api/user/login',
      method: 'post',
      data: params
    })
  } catch (error) {
    console.log('error', error)
  }
}
