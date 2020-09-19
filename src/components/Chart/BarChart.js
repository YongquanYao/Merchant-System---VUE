import { Bar,mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'],
    // data: () => ({
    //   chartdata: {
    //     labels: ['January', 'February'],
    //     datasets: [
    //       {
    //         label: 'Data One',
    //         backgroundColor: '#f87979',
    //         data: [40, 20]
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false
    //   }
    // }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}