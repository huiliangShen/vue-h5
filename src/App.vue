<template>
  <div>
    <router-view></router-view>
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
    methods: {
        goTo (num) {
            this.$router.go('/health/health-info');
        }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
