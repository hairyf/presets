<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>self-box</div>
  </div>
</template>
<style lang="scss">
// html {
//   /* iPhone6的375px尺寸作为16px基准，600px正好18px大小 */
//   font-size: calc(100% + 2 * (100vw - 375px) / 225);
// }
// @media screen and (min-width: 600px) {
//   html {
//     /* 600px-1000px每100像素宽字体增加1px(18px-22px) */
//     font-size: calc(112.5% + 4 * (100vw - 600px) / 400);
//   }
// }
// @media screen and (min-width: 1000px) {
//   html {
//     /* 1000px往后是每100像素0.5px增加 */
//     font-size: calc(137.5% + 5 * (100vw - 1000px) / 1000);
//   }
// }
// p {
//  font-size: calc((1.4rem + 0.4rem) * ((100vw - 600px) / 600px));
//  font-size: calc((1.4 + 0.4) * (100vw - 600));
//  font-size: calc(1.4 * ((100vw - 600px) / 5));
// }
// h1 {
//   @include self-font-size($_font-size-title);
// }
// .about > div {
//   // 媒体查询自定义
//   @include self-font-size($_font-size-lg);
//   @include self-adaption(
//     $attr: background,
//     $xs: #ff0000,
//     $sm: #ff7f00,
//     $md: #ffff00,
//     $lg: #00ff00,
//     $xl: #00ffff
//   );
//   @include self-md-lg(width, 80px, 100px);
//   @include self-md-lg(height, 80px, 100px);
//   @include self-md-lg(line-height, 80px, 100px);
//   display: inline-block;
//   margin-top: $_spacing-col-lg;
// }
</style>
