/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-02-24 18:18:59
 * @LastEditTime: 2021-02-24 18:19:12
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { StoreOptions, Store } from 'vuex'
export const createModule = <S>(store: StoreOptions<S>) => store as Store<S>
