<template>
  <div class="login-wrapper">
    <div class="login-img">
      <img src="../../assets/img/login-top.png" alt="" width="100%">
    </div>
    <div class="login-content">
      <div class="login-user">
        <group>
          <x-input placeholder="用户名">
            <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
          </x-input>
        </group>
        <group>
          <x-input placeholder="密码" type="password">
            <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
          </x-input>
        </group>
      </div>
      <div class="login-forget-pwd">
        <p>
          <a href="" class="text">找回密码</a>
        </p>
      </div>
      <div class="login-btn">
        <x-button type="primary" :show-loading="isLogin" @click.native="login">登录</x-button>
      </div>
    </div>
    <footer class="login-register">
      <div class="content">
        <img src="" alt="">
        <p>注册</p>
      </div>
    </footer>
  </div>
</template>
<script>
  import {XInput, Group, XButton, Cell} from 'vux';
  export default{
    components: {
      XInput,
      XButton,
      Group,
      Cell
    },
    data () {
        return {
          isLogin: false
        };
    },
    methods: {
      login () {
          this.isLogin = true;
          setTimeout(() => {
            this.isLogin = false;
          }, 3000);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login-wrapper
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    padding 10px 25px
    background: cornflowerblue
    .login-img
      text-align center
      img
        width 220px
    .login-content
      .login-forget-pwd
        margin-top 15px
        text-align right
        .text
          color: #fff
          font-size 14px
      .login-btn
        margin-top 15px
        .weui-btn.weui-btn_primary
          background: #0000f6;
</style>
