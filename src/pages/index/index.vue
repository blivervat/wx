<template>
  <div class="container">
    <div class="header">
      <i-input  title="收货人" autofocus placeholder="名字" />
      <div class="banner">
          <img src="../../assets/img/banner.jpg" alt="">
      </div>
      <i-tab-bar  bindchange="handleChange" >
          <i-tab-bar-item key="homepage" img="/assets/img/tar.jpg"  title="细支烟"></i-tab-bar-item>
          <i-tab-bar-item key="group" img="/assets/img/tar.jpg"  title="短支烟"></i-tab-bar-item>
          <i-tab-bar-item key="remind" img="/assets/img/tar.jpg" title="爆珠烟"></i-tab-bar-item>
          <i-tab-bar-item key="mine" img="/assets/img/tar.jpg" title="雪茄烟"></i-tab-bar-item>
        <i-tab-bar-item key="mine" img="/assets/img/tar.jpg" title="雪茄烟"></i-tab-bar-item>
      </i-tab-bar>
  </div>
  <div class="main">
    <i-cell-group>
        <i-cell title="新品上市" value="查看更多" is-link></i-cell>
    </i-cell-group>
    <i-row>
      <i-col span="6" i-class="col-class">
        <div><img src="../../assets/img/smoke.jpg" alt=""></div>
        <span>芙蓉王(硬细支)</span>
      </i-col>
      <i-col span="6" i-class="col-class">
        <div><img src="../../assets/img/smoke.jpg" alt=""></div>
        <span>芙蓉王(硬细支)</span>
        
      </i-col>
      <i-col span="6" i-class="col-class">
        <div><img src="../../assets/img/smoke.jpg" alt=""></div>
        <span>芙蓉王(硬细支)</span>
      </i-col>
      <i-col span="6" i-class="col-class">
        <div><img src="../../assets/img/smoke.jpg" alt=""></div>
        <span>芙蓉王(硬细支)</span>
      </i-col>
    </i-row>

    <div class="small_banner">
        <img src="../../assets/img/small_banner.png" alt="">
    </div>

  </div>

  <i-panel title="A" i-class="show-list-title">
    <view>
        <div class="shop-list">
          <img src="/assets/img/smoke.jpg" alt="">
          <span>555香烟</span>
        </div>
         <div class="shop-list">
          <img src="/assets/img/smoke.jpg" alt="">
          <span>555香烟</span>
        </div>
    </view>
  </i-panel>


  </div>
</template>

<script>

export default {
  data () {
    return {
      current: 'homepage',
      userInfo: {}
    }
  },

  methods: {
    handleChange ({ detail }) {
      this.setData({
        current: detail.key
      })
    }
  },

  created () {}
}
</script>

<style lang="less" scoped>
  .header {
    padding:0 16rpx;
    background-color: #fff;
  }
  .main {
    margin-top: 20rpx;
    padding:0 16rpx;
    background-color: #fff;
  }
  .banner img{
    width: 718rpx;
    height: 308rpx;
  }
  .col-class {
    span {
      font-size: 12px;
    }
    img {
      border: 1px solid #ccc;
      width: 158rpx;
      height: 158rpx;
    }
  }
  .small_banner {
    margin: 60rpx 0 0;
    img {
      width: 718rpx;
      height: 165rpx;

    }
  }

  .shop-list {
    display: flex;
    align-items: center;
    padding: 30rpx 16rpx;
    border-bottom: 1px solid #eee;
    img {
      width: 100rpx;
      height: 100rpx;
      border: 1px solid #ccc;
      margin-right: 30rpx;
    }
    &:last-child {
      border-bottom: none;
    }
  }

</style>