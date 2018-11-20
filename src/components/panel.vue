<template>
    <div class="panel">
        <div class="panel_header">
            <h3 class="title">
                <img v-if="url" :src="url" alt="">
                <!-- <slot name="icon"></slot> -->
                {{title}}
            </h3>
        </div>
         
        <div class="panel_body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  props: ['url', 'title'],
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.panel {
  background-color: #fff;
  margin-bottom: 20rpx;
  &_header {
    .title {
      padding: 30rpx 16rpx;
      font-size: 33rpx;
      font-weight: 600;
      img {
        vertical-align: top;
        width: 40rpx;
        height: 40rpx;
      }
    }
    border-bottom: 1px solid #eee;
  }
  &_body {
    padding: 30rpx 16rpx;
  }
}
</style>

