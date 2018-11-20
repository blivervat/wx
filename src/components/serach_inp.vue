<template>
    <div class="serach-inp">

       <i-icon type="search" size="28" />
       <a :href="url" v-if="url">
          <input type="text" placeholder="搜索烟名/品牌">
       </a>
       <input v-else type="text" placeholder="搜索烟名/品牌">
       <slot>
          <i-icon type="scan" size="28" @click="sao" />
       </slot>
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
  padding: 10rpx;
  border-radius: 10rpx;
  background-color: #fff;
  a, input {
    flex-grow: 1;
    font-size: 28rpx;
  }
  input {
    height: 100%;
  }
}
</style>
