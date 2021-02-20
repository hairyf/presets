/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-24 15:41:10
 * @LastEditTime: 2021-01-24 16:05:35
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
module.exports = {
  // 资源基本路径
  publicPath: './',
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: true,
    port: 8080,
    hotOnly: true,
    proxy: null, // 服务器代理
  },
  // 为预处理器的 loader 传递自定义选项。比如传递给
  // sass-loader 时，使用 `{ sass: { ... } }`。
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/style/index.scss";',
      },
    },
  },
};
