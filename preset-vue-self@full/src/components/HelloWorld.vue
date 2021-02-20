<template>
  <b-container class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <div class="about">
      <h1>This is an about box</h1>
      <div>self-box</div>
    </div>
    <b-button variant="primary" href="http://code.z01.com/bootstrap-vue/"
      >bootstrap-vue
    </b-button>
    <b-row class="thumbnail-list">
      <b-col v-for="i in 4" :key="i" lg="3" md="4" sm="6" xs="12">
        <div class="thumbnail-item">
          <img src="../assets/bootstrap.png" alt="..." />
          <div class="caption">
            <h3 class="text-center aSty">优站精选</h3>
            <p class="text-center">Bootstrap 网站实例</p>
            <p class="text-center">
              Bootstrap 优站精选频道收集了众多基于 Bootstrap
              构建、设计精美的、有创意的网站。
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: { msg: String },
});
</script>

<style scoped lang="scss">
h1,
h2,
h3 {
  margin-top: $_spacing-col-lg;
  margin-bottom: $_spacing-col-lg/2;
}
.about {
  margin-bottom: $_spacing-col-lg;
}
h1 {
  @include self-font-size($_font-size-title);
}
.about > div {
  @include self-font-size($_font-size-lg);
  @include self-adaption(
    $attr: background,
    $xs: #ff0000,
    $sm: #ff7f00,
    $md: #ffff00,
    $lg: #00ff00,
    $xl: #00ffff
  );
  @include self-md-lg(width, 80px, 100px);
  @include self-md-lg(height, 80px, 100px);
  @include self-md-lg(line-height, 80px, 100px);
  display: inline-block;
  margin-top: $_spacing-col-lg;
}
.thumbnail-list {
  margin-top: 15px;
}
.thumbnail-item {
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  > img {
    max-width: 100%;
    height: auto;
  }
  .caption {
    padding: 9px;
    color: #333;
  }
}
</style>
