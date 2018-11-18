<template>
    <div class="serach-inp">

       <i-icon type="search" size="28" />
       <a :href="url">
          <input type="text" placeholder="搜索烟名/品牌">
       </a>
       <i-icon type="scan" size="28" @click="sao" />
    </div>
</template>
<script>
export default {
  props: ['url'],
  methods: {
    sao () {
      wx.scanCode({
        success (res) {
          console.log(res)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.serach-inp {
  display: flex;
  padding: 10rpx 0;
  margin: 10rpx 0 20rpx;
  a {
    flex-grow: 1;
    font-size: 28rpx;
  }
}
</style>
