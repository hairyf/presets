/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-03-03 16:18:32
 * @LastEditTime: 2021-03-04 09:57:00
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { RouterLink, RouterView } from 'vue-router'
declare global {
  interface __VLS_GlobalComponents {
    RouterLink: typeof RouterLink
    RouterView: typeof RouterView
  }
}
