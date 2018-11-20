<template>
  <div class="search-page">
    <div class="header">
      <search-input ref="search">
        <i-button @click="search" i-class="cha-button__search" type="info" inline>搜索</i-button>
      </search-input>
    </div>
    <div class="tags">
      <h3>热门标签</h3>
      <i-row>
        <i-col span="6" v-for="(item, index) in newList" :key="index">
          <div>
            <a href="/pages/detail/main" class="cha-tag">
                {{item.title}}
            </a>
          </div>
        </i-col>
      </i-row>
    </div>
    <div class="history">
      <h3>历史记录</h3>
    </div>
  </div>

</template>
<script>
  import SearchInput from '@/components/serach_inp'
  export default {
    props: ['url'],
    data () {
      return {
        newList: []
      }
    },
    components: {
      SearchInput
    },
    created () {
      this.getList()
    },
    methods: {
      // 查询内容
      search () {
        let value = this.$refs.search.searchValue
        if (value !== '') {
          wx.navigateTo({
            url: '../shop_list/main?value=' + value
          })
        }
      },
      getList () {
        this.newList = [
          {
            title: '细支烟',
            type: 'xi'
          },
          {
            title: '短支烟',
            type: 'xi'
          },
          {
            title: '爆珠烟',
            type: 'xi'
          },
          {
            title: '雪茄烟',
            type: 'xi'
          },
          {
            title: '细支烟',
            type: 'xi'
          },
          {
            title: '短支烟',
            type: 'xi'
          },
          {
            title: '爆珠烟',
            type: 'xi'
          },
          {
            title: '雪茄烟',
            type: 'xi'
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  @padding: 36rpx;
  @fontSize: 28rpx;
  @themColor: #eee;
  .search-page {
    .header {
      padding: 20rpx @padding;
      background-color: @themColor;
    }
    .tags{
      padding: 20rpx @padding;
      h3 {
        font-size: @fontSize;
        margin-bottom: 20rpx;
      }
      .cha-tag {
        font-size: 24rpx;
        border-radius: 40rpx;
        padding: 10rpx;
        text-align: center;
        margin-right: 20rpx;
        background-color: @themColor;
        color: darken(@themColor, 40%);
        margin-bottom: 30rpx;
      }
    }
    .history {
      padding: 0 @padding;
      h3 {
        font-size: @fontSize; 
      }
    }
  }
</style>

<style lang="less">
.header {
  .serach-inp {
    border-radius: 40rpx;
  }
  .cha-button__search {
    height: 48rpx;
    line-height: 48rpx;
    font-size: 24rpx;
    margin: 0;
    border-radius: 40rpx;
  }
}
</style>

