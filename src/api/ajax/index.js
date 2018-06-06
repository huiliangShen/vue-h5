/**
 * Created by shl on 2018/6/6.
 */
import http from './http';

export default {
  install (Vue) {
    Vue.prototype.$http = http;
    Vue.http = http;
  },
  $http: http
};

export const $http = http;
