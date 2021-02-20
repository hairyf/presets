## 项目模板说明

~~~
├── alpha@preset-vue-next-cli  # web-vue@3 页面cli开发模板(内部测试版)
├── alpha@preset-vue-next-vite  # web-vue@3 页面vite开发模板(内部测试版)
├── preset-uni@full  # uni-app 多端开发模板(正式版)
├── preset-vue@full  # web-vue@2 页面开发模板(正式版)
├── preset-vue-self@full  # web-vue@2-self 页面响应式模板(正式版)
~~~

## uni-app 项目模板使用说明

1. 创建并进入项目文件夹`SVN`拷贝项目文件：（注意，拷贝完毕后删除.svn文件，避免影响整体项目模板）

   ~~~
   svn:...
   ~~~

2. 进入项目安装依赖：`npm install`

3. 运行打包命令：`npm run dev:mp-weixin`

## web-vue@2 与其他项目模板使用说明

1. 创建并进入项目文件夹`SVN`拷贝项目文件：（注意，拷贝完毕后删除.svn文件，避免影响整体项目模板）

   ~~~
   web-vue2(web模板): svn:...
   
   web-vue2-self(web自适应模板): svn:...
   
   web-vue3-cli(vue3-cli测试模板): svn:...
   
   web-vue3-vite(vue3-vite测试模板): svn:...
   ~~~

2. 进入项目安装依赖：`npm install`

3. 运行打包命令：`npm run serve`

## 多端开发框架Vue3兼容对比表

| 开发框架                 | UniApp                               | Taro                          |
| ------------------------ | ------------------------------------ | ----------------------------- |
| 多端兼容情况             | Vue3 仅微信小程序支持，Vue2 多端支持 | H5与各厂商小程序，App端均支持 |
| 常用 UI 组件库           | 暂无                                 | Taro UI Vue3                  |
| 运行性能                 | 暂无测试                             | 暂无测试                      |
| IOS 9 或 IE 11           | 暂未兼容（等待Vue官方支持）          | 暂未兼容（等待Vue官方支持）   |
| setup 语法糖（实验阶段） | 暂不支持                             | 暂无测试                      |

