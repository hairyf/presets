/*
 * @Author: Mr.Mao
 * @Date: 2021-05-18 15:45:01
 * @LastEditTime: 2021-06-08 16:19:30
 * @Description: 用户数据管理
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { createModule } from '@/utils/vue-utils'
import { DELETE_USER_INFO, RECEVE_USER_INFO } from '../types'

export default createModule({
  state: {
    info: undefined as UserInfo | undefined
  },
  mutations: {
    [RECEVE_USER_INFO]: (state, userInfo) => (state.info = userInfo),
    [DELETE_USER_INFO]: (state) => (state.info = undefined)
  },
  actions: {
    // 账号登录
    accountLogin: async ({ commit }) => {},
    // 退出, 清除用户数据
    signOutUserInfo: ({ commit }) => {
      commit(DELETE_USER_INFO)
    }
  },
  getters: {
    // 当前是否登录
    isLogin(state) {
      return typeof state.info !== 'undefined'
    }
  }
})
