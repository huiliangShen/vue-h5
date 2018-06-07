<template>
  <div class="redirect-wrapper">
     <x-button type="primary"  @click.native="login">登录</x-button>
  </div>
</template>
<script>
  import {getSearch} from '../../lib/tool';
  import {XButton} from 'vux';
  export default {
    data () {
      return {
        // 5min limit
        code: ''
      };
    },
    components: {
      XButton
    },
    watch: {},
    methods: {
      login () {
          // hash模式下url呈现hostname:post/?code=111&state=11#/redirect
          // 可以访问，但再次跳转必须重置url
          location.href = '/#/page/info';
         // this.$router.push({path: '/page/info'});
        }
    },
    mounted () {
      let obj = getSearch(window.location);
      this.code = obj.code;
      console.log(JSON.stringify(obj));
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
