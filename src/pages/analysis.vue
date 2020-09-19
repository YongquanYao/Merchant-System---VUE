<template>
    <div>
        <a-row type="flex" justify="space-between">
             <a-card class="line-chart">
                <line-chart :chart-data="linedata1"></line-chart>
            </a-card>
            <a-card class="line-chart">
                <line-chart :chart-data="linedata2"></line-chart>
            </a-card>
            <a-card class="bar-chart">
                <bar-chart :chart-data="bardata"></bar-chart>
            </a-card>
            <a-card class="bubble-chart">
                <bubble-chart :chart-data="bubbledata"></bubble-chart>
            </a-card>
        </a-row>
         <a-row type="flex" justify="space-between">
            <a-card class="bottom-chart">
                <pie-chart :chart-data="piedata"></pie-chart>
            </a-card>
            <a-card class="middle-card">
                <a-button ref="play" class="radmonBtn" @click="fillData()">Randomize</a-button>
                <a-button class="radmonBtn" @click="cancelChartplay()">Stop</a-button>
                <a-table :columns="columns" :data-source="tabledata" :pagination='false'>
                    <!-- <a slot="name" slot-scope="text">{{ text }}</a> -->
                </a-table>
            </a-card>
            <a-card class="bottom-chart">
                <radar-chart :chart-data="radardata"></radar-chart>
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
    import RadarChart from '../components/Chart/RadarChart.js'
    // import { Line } from 'vue-chartjs'
    export default {
        props:{
            chartData: {}
        },
        components:{
            LineChart,
            BarChart,
            BubbleChart,
            PieChart,
            RadarChart
        },
        data () {
            return {
                linedata1: null,
                linedata2: null,
                bardata: null,
                bubbledata: null,
                piedata: null,
                radardata: null,
                
                columns:[
                    {
                        title: 'One',
                        dataIndex: 'one',
                        key: 'one',
                        scopedSlots: { customRender: 'one' },
                        sorter: true,
                    },
                    {
                        title: 'Two',
                        dataIndex: 'two',
                        key: 'two',
                        scopedSlots: { customRender: 'two' },
                        sorter: true,
                    },
                    {
                        title: 'Three',
                        dataIndex: 'three',
                        key: 'three',
                        scopedSlots: { customRender: 'three' },
                        sorter: true,
                    },
                ],
                tabledata: null,
                interval: setInterval(() => {
                    this.fillData()
                },2000)
            }
        },
        mounted () {
            this.fillData()
            this.chartPlay()
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
                this.piedata = {
                    labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
                     datasets: [
                        {
                        backgroundColor: ['#f88080', '#ebebeb', '#eb4034','#999','#db1709','#555'],
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                },
                this.radardata = {
                    labels: ['Januaray', 'February', 'March', 'April', 'May', 'June'],
                     datasets: [
                        {
                        label: 'Radar',
                        backgroundColor: ['#f88080', '#ebebeb', '#eb4034','#999','#db1709','#555'],
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                },
                this.tabledata = [
                    {
                        key: 'one',
                        one: this.getRandomInt(),
                        two: this.getRandomInt(),
                        three: this.getRandomInt(),
                    },
                    {
                        key: 'two',
                        one: this.getRandomInt(),
                        two: this.getRandomInt(),
                        three: this.getRandomInt(),
                    },
                ]
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            },
            chartPlay(){
                this.interval
            },
            cancelChartplay(){
                clearInterval(this.interval);
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
    .bottom-chart{
        width: 285px;
        margin-top: 25px;
    }
    .middle-card{
        width: 500px;
        height: 260px;
        margin-top: 25px;
    }
    .radmonBtn{
        margin-bottom: 3px;
        font-size: 13px;
        margin-right: 4px;
    }
</style>