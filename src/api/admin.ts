import request from '@/utils/request'
import { ILoginInfo } from './types/admin'

/**
 * 得到登录信息
 * @returns
 */
export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'get',
    url: '/login/info'
  })
}
