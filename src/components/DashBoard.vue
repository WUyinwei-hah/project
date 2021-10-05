<template>
  <div  class="box-card colbt">
    <div style="width: 100%;height: 32%" class="rowbt">
      <el-card v-for="o in 3" :key="o" style="width: 32%;height: 100%" >
        <div v-for="o in 3" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
      <div style="width: 100%;height: 65%;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
          <div id="myChart" style="height: 100%;width: 100%"></div>
      </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: "DashBoard",
  mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('myChart'));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
}
</script>

<style scoped>
.box-card{
  width: 100%;
  height: 90vh;
}
</style>