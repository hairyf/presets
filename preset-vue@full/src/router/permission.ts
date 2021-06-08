import store from '@/store'
import router from '@/router'

/*
 * @Author: Mr.Mao
 * @Date: 2021-04-06 09:37:28
 * @LastEditTime: 2021-06-08 16:17:15
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

// 判断是否为登录状态, 否则跳转至登陆页
router.beforeEach(async (to, from, next) => {
  const isLoginPath = !!['/auth/login'].some((path) => to.path === path)
  if (store.getters.isLogin && isLoginPath) {
    return next('/index')
  }
  if (!store.getters.isLogin && !isLoginPath) {
    return next('/auth/login')
  }
  next()
})
