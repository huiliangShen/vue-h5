// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import AjaxPlugin from './api/ajax';
import './assets/stylus/css.styl';
const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(AjaxPlugin);
Vue.use(Vuex);
Vue.config.productionTip = false;

const vRouter = new VueRouter();

const store = new Vuex.Store({});// 这里你可能已经有其他 module

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

sync(store, router);

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>',
  methods: {
    getFun(){
      this.$http.get
    }
  }
}).$mount('#app');
