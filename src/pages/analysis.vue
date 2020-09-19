<template>
    <div>
        <a-card class="line-chart">
            <line-chart :chart-data="datacollection"></line-chart>
            <button @click="fillData()">Randomize</button>
        </a-card>
        <!-- <line-chart></line-chart> -->
        <!-- <line></line> -->
    </div>
</template>

<script>
    import LineChart from '../components/Chart/LineChart.js'
    // import { Line } from 'vue-chartjs'
    export default {
        components:{
            LineChart,
            // Line
        },
        data () {
            return {
                datacollection: null
            }
        },
        mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.datacollection = {
                labels: [this.getRandomInt(), this.getRandomInt()],
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [this.getRandomInt(), this.getRandomInt()]
                    }, {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [this.getRandomInt(), this.getRandomInt()]
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
        width: 400px;
    }
</style>