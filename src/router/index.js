import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = {
  path: '/login',
  title: '登录',
  component: resolve => {
    require(['../page/login/login.vue'], resolve);
  }
};

const register = {
  path: '/register',
  title: '登录',
  component: resolve => {
    require(['../page/register/register.vue'], resolve);
  }
};

const home = {
  path: '/page',
  component: resolve => {
    require(['../page/layout.vue'], resolve);
  },
  children: [
    {
      path: 'info',
      title: '资讯',
      name: 'info',
      component: resolve => {
        require(['../page/info/info-list.vue'], resolve);
      }
    },
    {
      path: 'sports',
      title: '运动',
      name: 'sports',
      component: resolve => {
        require(['../page/sports/sport-home.vue'], resolve);
      }
    },
    {
      path: 'health',
      title: '健康',
      name: 'health',
      component: resolve => {
        require(['../page/health/health-info.vue'], resolve);
      }
    },
    {
      path: 'my',
      title: '我的',
      name: 'my',
      component: resolve => {
        require(['../page/my/my-info.vue'], resolve);
      }
    }
  ]
};

export default new Router({
  routes: [
    login,
    register,
    home
  ]
});
