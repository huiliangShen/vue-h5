<template>
  <div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition :name="transitionName">
      <router-view class="router"></router-view>
    </transition>
    <tabbar>
      <tabbar-item link="/page/info">
        <img slot="icon" src="../assets/img/1.png">
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item link="/page/sports">
        <img slot="icon" src="../assets/img/2.png">
        <span slot="label">运动</span>
      </tabbar-item>
      <tabbar-item link="/page/health">
        <img slot="icon" src="../assets/img/3.png">
        <span slot="label">健康</span>
      </tabbar-item>
      <tabbar-item link="/page/my">
        <img slot="icon" src="../assets/img/4.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import {Tabbar, TabbarItem, Group, Cell} from 'vux';
  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    data () {
      return {
        transitionName: 'slide-left'
      };
    },
    methods: {
      goTo (num) {
        this.$router.go('/health/health-info');
      }
    }
  };
</script>
<style lang="stylus" scoped>
  .router {
    position absolute
    top 0
    width: 100%
    transition: all .8s ease;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-100% 0);
  }
</style>
