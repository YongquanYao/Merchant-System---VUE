<template>
    <div>
        <a-row type="flex" justify="space-between">
             <a-card class="line-chart">
                <line-chart :chart-data="linedata1"></line-chart>
            <!-- <a-button @click="fillData()">Randomize</a-button> -->
            </a-card>
            <a-card class="line-chart">
                <line-chart :chart-data="linedata2"></line-chart>
            <!-- <a-button @click="fillData()">Randomize</a-button> -->
            </a-card>
            <a-card class="bar-chart">
                <bar-chart :chart-data="bardata"></bar-chart>
            </a-card>
            <a-card class="bubble-chart">
                <bubble-chart :chart-data="bubbledata"></bubble-chart>
            </a-card>
        </a-row>
         <a-row type="flex" justify="space-between">
            <a-card class="bubble-chart">
                <pie-chart :chart-data="linedata1"></pie-chart>
            </a-card>
         </a-row>
            <!-- Bar,
  HorizontalBar,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Bubble,
  Scatter, -->
    </div>
</template>

<script>
    import LineChart from '../components/Chart/LineChart.js'
    import BarChart from '../components/Chart/BarChart.js'
    import BubbleChart from '../components/Chart/BubbleChart.js'
    import PieChart from '../components/Chart/PieChart.js'
    // import { Line } from 'vue-chartjs'
    export default {
        components:{
            LineChart,
            BarChart,
            BubbleChart,
            PieChart
        },
        data () {
            return {
                linedata: null,
                bardata: null,
                bubbledata: null,
            }
        },
        mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.linedata1 = {
                    labels: [0, 10, 20, 30, 100],
                    datasets: [
                        {
                        label: 'One',
                        backgroundColor: '#ebebeb',
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                },
                this.linedata2 = {
                    labels: [0, 10, 20, 30, 100],
                    datasets: [
                        {
                        label: 'Two',
                        backgroundColor: '#f87979',
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                },
                this.bardata = {
                    labels: ['One', 'Two'],
                    datasets: [
                        {
                            label: 'January',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        },
                        {
                            label: 'February',
                            backgroundColor: '#ebebeb',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                },
                this.bubbledata = {
                    labels: ['One', 'Two'],
                    datasets: [
                        {
                            label: 'January',
                            backgroundColor: '#f87979',
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#249EBF',
                            data: [{
                                x:this.getRandomInt(), 
                                y:this.getRandomInt(),
                                r:5,
                            }]
                        },
                        {
                            label: 'February',
                            backgroundColor: '#f87979',
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#249EBF',
                            data: [{
                                x:this.getRandomInt(), 
                                y:this.getRandomInt(),
                                r:5,
                            }]
                        },
                        {
                            label: 'March',
                            backgroundColor: '#ebebeb',
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#249EBF',
                            data: [{
                                x:this.getRandomInt(), 
                                y:this.getRandomInt(),
                                r:5,
                            }]
                        },
                        {
                            label: 'Apirl',
                            backgroundColor: '#ebebeb',
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#249EBF',
                            data: [{
                                x:this.getRandomInt(), 
                                y:this.getRandomInt(),
                                r:5,
                            }]
                        }
                    ]
                }
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        }
    }
</script>

<style lang="css" scoped>
    .line-chart{
        width: 285px;
        margin-top: 40px;
    }
    .bar-chart{
        width: 285px;
        margin-top: 40px;
    }
    .bubble-chart{
        width: 285px;
        margin-top: 40px;
    }
</style>