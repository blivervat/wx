<template>
  <div class="container">
    <div class="header" style=" background-image: url(/assets/img/bg.png);">
      <search-input url="/pages/search_list/main"></search-input>
      <div class="banner">
          <img src="../../assets/img/banner.jpg" alt="">
      </div>
      <ul class="table-bar">
        <li v-for="item in navBar" :key="item.title">
          <a href="/pages/shop_list/main">
            <img :src="item.url" alt=""><br />
            <span>{{item.title}}</span>
          </a>
        </li>
      </ul>
  </div>
  <div class="main">
    <i-cell-group>
        <i-cell title="新品上市" value="查看更多" is-link url="/pages/new_list/main"></i-cell>
    </i-cell-group>
    <i-row>
      <i-col span="6" i-class="col-class" v-for="(item, index) in newList" :key="index">
        <div><a href="/pages/detail/main"><img src="../../assets/img/smoke.jpg" alt=""></a></div>
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
import SearchInput from '@/components/serach_inp'

export default {
  components: {
    SearchInput
  },
  data () {
    return {
      current: 'homepage',
      navBar: [
        {
          url: '/assets/img/xi.png',
          title: '细支烟'
        },
        {
          url: '../../assets/img/tar.jpg',
          title: '短支烟'
        },
        {
          url: '../../assets/img/baozhu.png',
          title: '珠爆烟'
        },
        {
          url: '../../assets/img/xuejia.png',
          title: '雪茄烟'
        },
        {
          url: '../../assets/img/xiqing.png',
          title: '喜庆用烟'
        }
      ],
      // 新品上市
      newList: [],
      userInfo: {}
    }
  },

  methods: {
    handleChange ({ detail }) {
      this.setData({
        current: detail.key
      })
    },
    getNewList () {
      const arr = new Array(4)
      arr.fill({
        url: '../../assets/img/smoke.jpg',
        title: '芙蓉王(硬细支)'
      })
      this.newList = arr
    }
  },
  created () {
    this.getNewList()
  }
}
</script>

<style lang="less" scoped>
  @padding: 32rpx;
  .header {
    padding: 20rpx @padding;
    background-color: #fff;
    background-size: 750rpx 360rpx;
    background-repeat: no-repeat;
    .table-bar {
      display: flex;
      justify-content: space-around;
      li {
        text-align: center;
        img {
          width: 107rpx;
          height: 104rpx;
        }
        span {
          font-size: 28rpx;
        }
      }
    }
  }
  .main {
    margin-top: 20rpx;
    padding:0 @padding;
    background-color: #fff;
  }
  .banner {
    margin-top: 30rpx;
    img{
      width: 750rpx - 2 * @padding;
      max-height: 308rpx;
      border-radius: 20rpx;
    }
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
      width: 750rpx - 2 * @padding;
      height: 165rpx;

    }
  }

  .shop-list {
    display: flex;
    align-items: center;
    padding: 30rpx @padding;
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