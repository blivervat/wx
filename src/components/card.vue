<template>
  <ul class="show-list">
    <li v-for="item in list" :key="item.id">
        <div class="left">
            <img :src="item.src" alt="">
        </div>
        <div class="right">
            <h3 class="title">
              {{item.title}}
              <i-tag 
                  class="i-tags"
                  name="烤烟型"
                  color="blue">
                  烤烟型
              </i-tag>
            </h3>
            <div class="score">
              <i-rate  :value="item.score" :disabled="true">{{item.score}}</i-rate>
            </div>
            <div class="footer">
              <span class="price">￥{{item.price}}<span class="small">/包</span></span>
              <span class="small">(零售指导价))</span>
              <span class="small">{{item.evaluateCount}}条口碑</span>
            </div> 
        </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style lang="less" scoped>
.show-list {
  li {
    display: flex;
    padding: 16rpx;
    border-bottom: 1px solid #eee;
    &:last-child {
      border-bottom: none;
    }
    .left {
      img {
        border: 1px solid #ccc;
        width: 158rpx;
        height: 158rpx;
      }
    }
    .right {
      flex-grow: 1;
      padding: 0 30rpx;
      .score {
        margin-bottom: 14rpx;
      }
      .price {
        color: #ef555c;
        .small {
          color: #ef555c;
        }
      }
      .small {
        font-size: 24rpx;
        color: #888;
        &+.small {
          float: right;
        }
      }
      .footer {
        line-height: 32rpx;
      }
    }
  }
}
</style>
