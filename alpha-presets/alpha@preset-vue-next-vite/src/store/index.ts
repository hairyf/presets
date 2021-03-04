/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-02-24 18:17:02
 * @LastEditTime: 2021-03-01 16:35:16
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
// 覆盖原有 useStore 函数中, 泛型默认值类型

import { createStore } from 'vuex'
import user from './modules/user'
const store = createStore({
  modules: { user }
})
declare module 'vuex' {
  type StoreStateType = typeof store.state
  type ModulesType = {
    user: typeof user.state
  }
  export function useStore<S = StoreStateType & ModulesType>(): Store<S>
}

export default store
