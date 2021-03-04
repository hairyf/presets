/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-02-24 11:18:41
 * @LastEditTime: 2021-02-24 11:22:58
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import http from './http.config'
/* api->index.js 统一命名规范
 * 1. 接口暴露前缀统一为req -> request(请求)
 * 2. 需详细描述数据时, 在src/types/response.d.ts中声明
 * Template: export const req[name] = () => http.get("/api/list")
 */

// 暴露请求配置
export const httpConfig = http.defaults

// 模拟用户请求
export const getUserInfo = () => {
  return http.get<UserInfo>('/login')
}

// 模拟请求列表
export const getList = (params: ListOpts) => {
  return http.get('/list', { params })
}
