<template>
  <div class="search-page">
    <div class="header">
      <search-input url="/pages/search_list/main"></search-input>
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
  @padding: 18rpx;
  @fontSize: 28rpx;
  @themColor: #eee;
  .search-page {
    padding: @padding;
  }
  .header {
    background-color: @themColor;
  }
  .tags{
    margin-bottom: 20rpx;
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
      margin-bottom: 30rpx;
    }
  }
  .history {
    h3 {
      font-size: @fontSize; 
    }
  }
</style>


