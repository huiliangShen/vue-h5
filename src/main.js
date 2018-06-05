// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import App from './App';
import router from './router';
import VueRouter from 'vue-router';
import './assets/stylus/css.styl';
const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.config.productionTip = false;

const vRouter = new VueRouter();

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');
