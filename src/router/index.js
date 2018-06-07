import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = {
  path: '/login',
  meta: {
    title: '授权登录'
  },
  component: resolve => {
    require(['../page/login/login.vue'], resolve);
  }
};

const redirect = {
  path: '/redirect',
  meta: {
    title: '授权回调'
  },
  component: resolve => {
    require(['../page/login/redirect.vue'], resolve);
  }
};

const register = {
  path: '/register',
  meta: {
    title: '注册'
  },
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
      meta: {
        title: '资讯'
      },
      name: 'info',
      component: resolve => {
        require(['../page/info/info-list.vue'], resolve);
      }
    },
    {
      path: 'sports',
      meta: {
        title: '运动'
      },
      name: 'sports',
      component: resolve => {
        require(['../page/sports/sport-home.vue'], resolve);
      }
    },
    {
      path: 'health',
      meta: {
        title: '健康'
      },
      name: 'health',
      component: resolve => {
        require(['../page/health/health-info.vue'], resolve);
      }
    },
    {
      path: 'my',
      meta: {
        title: '我的'
      },
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
    home,
    redirect
  ]
});
