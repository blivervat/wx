<template>
    <div>
        <Card :list='dataList'></Card>
    </div>
</template>
<script>
import Card from '@/components/card'

export default {
  components: {
    Card
  },
  data () {
    return {
      dataList: []
    }
  },
  onLoad: function (option) {
    // 获取传递值
    console.log(option.value)
    this.getData()
  },
  methods: {
    getData () {
      this.dataList = []
      for (var i = 0; i < 5; i++) {
        this.dataList.push({
          id: i + 1,
          title: '七匹狼' + i,
          price: Math.floor(Math.random() * 50) + '.00',
          score: Math.floor(Math.random() * 6),
          evaluateCount: Math.floor(Math.random() * 21),
          src: '../../assets/img/smoke.jpg'
        })
      }
      console.log(this.dataList)
    }
  }
}
</script>
