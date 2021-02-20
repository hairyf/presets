import Vue from 'vue';
import App from './App.vue';
import store from './store';

import './plugins/uview-ui';
import './plugins/vue-prototype';

Vue.prototype.$store = store;
Vue.config.productionTip = false;
new App().$mount();
