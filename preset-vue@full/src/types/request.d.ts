/*
 * @Author: Pan.Yu.Lin
 * @Date: 2021-03-12 14:01:09
 * @LastEditTime: 2021-06-08 16:20:19
 * @Description:
 * @LastEditors: Mr.Mao
 */
/* 请求配置/响应的补充说明 */
interface BaseRes<T = any> {
  code: number
  data: T
}
type ListReqOpts<T = { [key: string]: any }> = {
  page?: number
  limit?: number
  search?: T
}
interface UserInfo {
  id: number
  username: string
}
