<template>
    <div>
      <div class="un-login">
        <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">点击登录</button>
      </div>
      <div class="login">

      </div>
    </div>
</template>
<script>
import qcloud from 'wafer2-client-sdk'
import config from '../../config.js'
export default {
  methods: {
    doLogin: function () {
      qcloud.setLoginUrl(config.loginUrl)
      const session = qcloud.Session.get()

      if (session) {
        // 第二次登录
        // 或者本地已经有登录态
        // 可使用本函数更新登录态
        qcloud.loginWithCode({
          success: res => {
          },
          fail: err => {
            console.error(err)
          }
        })
      } else {
        // 首次登录
        qcloud.login({
          success: res => {
          },
          fail: err => {
            console.error(err)
          }
        })
      }
    }
  }
}
</script>