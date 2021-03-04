/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-02-24 11:19:04
 * @LastEditTime: 2021-02-24 11:24:27
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
// 对axios模块进行补充说明
import { AxiosStatic } from 'axios'
declare module 'axios' {
  export interface AxiosRequestConfig {
    custom?: any
  }
  const axios: AxiosStatic
  export default axios
}
