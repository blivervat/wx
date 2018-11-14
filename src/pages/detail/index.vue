<template>
    <div class="detail">
        <div class="detail-info"></div>
        <Panel title="产品规格">
            <div slot="footer">123</div>
            <!-- <img src="../../assets/img/icon-yan.png" alt="" slot="icon"> -->
        </Panel>

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
      dataList: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      for (var i = 0; i < 5; i++) {
        this.dataList = {
          info: {
            title: '贵烟',
            score: 4,
            price: 23,
            evaluateCount: 36,
            like: true
          }
        }
      }
      console.log(this.dataList)
    }
  }
}
</script>
