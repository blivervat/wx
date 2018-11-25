<template>
  <div class="container">
    <scroll-view :scroll-into-view="toShow" scroll-y   @scroll="scroll" class="scroll-box">
      <div class="header">
        <img src="/assets/img/bg.png" alt="" class="bg-image">
        <div class="show-contents">
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
      <div class="navagitor" ref="navagitor">
        <ul class="navagitor-menu" v-show="navagitorShow">
          <li  v-for="item in allList" :key="item.title" @click="toShow=item.title">{{item.title}}</li>
        </ul>
        <i-panel v-for="item in allList" :key="item.title" :id="item.title" :title="item.title">
          <view>
              <div class="shop-list" v-for="(shop, sIndex) in item.list" :key="sIndex">
                <img src="/assets/img/smoke.jpg" alt="">
                <span>{{shop.title}}</span>
              </div>
          </view>
        </i-panel>
      </div>
    </scroll-view>
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
      navagitorShow: false,
      // 滚动到指定的位置
      toShow: '',
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
      userInfo: {},
      // 所有烟品
      allList: [
        {
          title: 'A',
          list: [
            {
              id: 1,
              title: '阿里山',
              src: ''
            },
            {
              id: 2,
              title: '爱喜',
              src: ''
            }
          ]
        },
        {
          title: 'B',
          list: [
            {
              id: 3,
              title: '白沙',
              src: ''
            }
          ]
        },
        {
          title: 'C',
          list: [
            {
              id: 4,
              title: '长城',
              src: ''
            },
            {
              id: 5,
              title: '长白山',
              src: ''
            }
          ]
        },
        {
          title: 'D',
          list: [
            {
              id: 6,
              title: '大华',
              src: ''
            },
            {
              id: 7,
              title: '钓鱼台',
              src: ''
            },
            {
              id: 8,
              title: '大前门',
              src: ''
            }
          ]
        }
      ]
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
    },
    scroll (e) {
      var _this = this
      var query = wx.createSelectorQuery()
      query.select('.navagitor').boundingClientRect()
      query.exec(function (res) {
        // console.log(res)
        if (res[0].top < 10) {
          _this.navagitorShow = true
        } else {
          _this.navagitorShow = false
        }
      })
    }
  },
  created () {
    this.getNewList()
  }
}
</script>

<style lang="less" scoped>
  @padding: 32rpx;
  .scroll-box {
    height: 100vh;
  }
  .header {
    padding: 20rpx @padding;
    background-color: #fff;
    // 微信小程序无法使用背景图片
    // background-size: 750rpx 360rpx;
    // background-repeat: no-repeat;
    // background-image: url(/assets/img/bg.png);
    .bg-image {
      position: absolute;
      left: 0;
      top: 0;
      width: 750rpx;
      height: 360rpx;
    }
    .show-contents {
      // 给一个层级,解决背景图片问题
      position: relative;
      z-index: 2;
    }
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
  .navagitor {
    position: relative;
    .navagitor-menu {
      color: lighten(blue, 10%);
      text-shadow: 1px 1px 1px fade(blue, 30%);
      font-size: 32rpx;
      position: fixed;
      z-index: 99;
      top: 80rpx;
      right: 40rpx;
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