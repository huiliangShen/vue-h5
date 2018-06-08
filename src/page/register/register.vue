<template>
  <div class="register-wrapper">
    <group title="实名验证身份信息">
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" max="11"></x-input>
    </group>
  </div>
</template>
<script>
  import { XInput, Group, XButton, Cell } from 'vux';
  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell
    },
    data () {
        return {};
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .weui-icon-warn
    &::before
      content ''!important
</style>
