<template>
    <div class="detail">
        <div class="detail-info">
           <div class="left">
              <img :src="info.src" alt="">
          </div>
          <div class="right">
              <h3 class="title">
                {{info.title}}
                <i-tag 
                    class="i-tags"
                    name="烤烟型"
                    color="blue">
                    烤烟型
                </i-tag>
                <i>❤</i>
              </h3>
              <div class="score">
                <i-rate size="18"  :value="info.score" :disabled="true">{{info.score}}</i-rate>
              </div>
              <div class="footer">
                <span class="price">￥{{info.price}}<span class="small">/包</span></span>
                <span class="small">(零售指导价))</span>
                <span class="small">{{info.evaluateCount}}条口碑</span>
              </div> 
          </div>
        </div>
        <Panel title="产品规格" url="../../assets/img/icon-yan.png">
          <div class="spec-box">
            <div class="left">
              <span>品牌：{{spec.name}}</span>
              <span>产品类型： {{spec.type}}</span>
              <span>一氧化碳： {{spec.co}}</span>
            </div>
            <div class="right">
              <span>工业公司： {{spec.compamy}}</span>
              <span>焦油含量： {{spec.tar}}</span>
              <span>规格： {{spec.spec}}</span>
            </div>
          </div>
          <div>
            <p>小盒条形码： {{spec.smallBarCode}}</p>
            <p>条包装条形码：{{spec.barCode}}</p>
          </div>
            <!-- <img src="../../assets/img/icon-yan.png" alt="" slot="icon"> -->
        </Panel>
        <Panel title="烟龄结构" url="../../assets/img/icon-yan.png">
              <i-row v-for="item in jiegou" :key="item.year">
                  <i-col  i-class="framework" span="4"><i-tag :name="item.year" color="#fff" i-class="no-border">{{item.year}}</i-tag></i-col>
                  <i-col  i-class="framework" span="9">
                    <i-progress :percent="item.percent"></i-progress>
                  </i-col>
                  <i-col  i-class="framework" span="3" v-if="item.rewords"><i-tag :name="item.rewords" color="#fff" i-class="no-border">{{item.rewords}}</i-tag></i-col>
                  <i-col  i-class="framework" span="8" v-if="item.score">
                      <i-rate :value="item.score" size="14">{{item.score}}</i-rate>
                  </i-col>
              </i-row>
            <!-- <img src="../../assets/img/icon-yan.png" alt="" slot="icon"> -->
        </Panel>
        <Panel title="评论" url="../../assets/img/icon-yan.png">
          <div class="talk">
            <div class="avatar">
              <i-avatar>梁</i-avatar>
            </div>
            <div class="content">
              <div class="head">
                <span class="name">玉兰</span>
                <i-tag 
                    class="i-tags"
                    name="烟龄：24年"
                    color="blue">
                    烟龄：24年
                </i-tag>
              </div>
              <div class="main">
                  <i-rate value="4" size="14">4</i-rate>
                  <p>这款烟外观精美，高端大气，口感纯正，清香迷人，抽一根久久回味无穷。</p>
                  <p class="date">2018-11-04 08:52:20 
                    <span class="bang">
                      <span class="count">2</span>
                      <i-icon type="praise_fill" />
                    </span>
                  </p>
              </div>
            </div>
          </div>
        </Panel>
        <!-- 固定在底部的按钮 -->
        <i-button i-class="fixed-bottom" bind:click="handleClick" type="info" long="true">评论</i-button>
    </div>
</template>
<script>
import Panel from '@/components/panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      // 基本信息
      info: {},
      // 规格
      spec: {},
      jiegou: [
        {
          year: '1-5年',
          percent: 25,
          rewords: '口味',
          score: 5
        },
        {
          year: '5-10年',
          percent: 48,
          rewords: '口味',
          score: 3
        },
        {
          year: '10-20年',
          percent: 24,
          rewords: '口味',
          score: 4
        },
        {
          year: '20年以上',
          percent: 3
        }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.info = {
        title: '贵烟',
        score: 4,
        price: '23.00',
        evaluateCount: 36,
        like: true,
        src: '../../assets/img/smoke.jpg'
      }
      this.spec = {
        name: '芙蓉王',
        type: '烤烟型',
        co: '8mg',
        compony: '湖南中烟',
        // 焦油
        tar: '8mg',
        spec: '97mm细支',
        // 小盒条形码
        smallBarCode: '69101028201711',
        // 条包装条形码
        barCode: '6901028201728'
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .detail {
    background-color: #eee;
    &-info {
      padding: 16rpx 16rpx 8rpx;
      margin-bottom: 20rpx;
      background-color: #fff;
      display: flex;
      .left {
        img {
          width: 130rpx;
          height: 130rpx;
        }
      }
      .right {
        flex-grow: 1;
        padding: 20rpx 30rpx;
        .title {
          i {
            font-size: 50rpx;
            float: right;
            color: #ccc;
          }
        }
        .score {
          font-size: 28rpx;
          margin-bottom: 14rpx;
        }
        .price {
          font-size: 30rpx;
          font-weight: 600;
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
    .spec-box {
      display: flex;
      color: #888;
      font-size: 26rpx;
      margin-bottom: 30rpx;
      .left {
        width: 50%;
        margin-right: 40rpx;
        border-right: 1px solid #eee;
      }

      span {
        display: block;
        margin-bottom: 10rpx;
      }

    }
    .spec-box + div {
      font-size: 28rpx;
      color: #888;
    }
  }
</style>
<style lang="less">
  .detail { 
    // 去除边框
    .no-border{
      border: none;
    }
    .framework {
      font-size: 28rpx;
      line-height: 50rpx;
      height: 50rpx;
    }
    .talk {
      display: flex;
      margin-bottom: 80rpx;
      .content {
        font-size: 28rpx;
        padding-left: 20rpx;
        flex-grow: 1;
        color: #888;
        .head {
          color: #000;
          font-size: 30rpx;
          .name {
            margin-right: 10rpx;
            vertical-align: middle;
          }
        }
        .date {
          color: #999;
          margin-top: 10rpx;
          .bang {
            float: right;
            .count {
              margin-right: 10rpx;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .fixed-bottom {
      position: fixed;
      width: 100%;
      bottom: 0;
    }
  }
  
</style>
