<template>
  <div class="ServiceAbnormal">
    <h2 class="title">Abnormal dispatch</h2>
    <div id="Service_AbnormalChart" style="position: relative; width: 900px; height: 350px; ">
      <canvas id="myChart2"></canvas>
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js';

export default {
  components: {},
  data() {
    return {
      routeArray: [],
      dispatchArray: [],
      passengersArray: [],
    };
  },
  props: {
    chartdata: Array,
  },
  mounted() {
    var ctx2 = document.getElementById('myChart2');
    var myChart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: this.routeArray,
        datasets: [
          {
            label: 'Dispatch frequencies',
            yAxisID: 'Dispatch frequencies',
            backgroundColor: 'rgba(0, 204, 204, 0.3)',
            borderColor: 'rgba(0, 204, 204, 1)',
            lineTension: 0,
            borderWidth: 3,
            pointStrokeColor: '#fff',
            pointStyle: 'circle',
            data: this.dispatchArray,
            spanGaps: 'false',
            fill: 'false',
            type: 'line',
          },
          {
            label: 'passengers',
            yAxisID: 'passengers',
            backgroundColor: 'rgba(10, 108, 202,0.3)',
            borderColor: 'rgba(10, 108, 202,1)',
            borderWidth: 1,
            pointStrokeColor: '#fff',
            pointStyle: 'circle',
            data: this.passengersArray,
            spanGaps: 'false',
            fill: 'false',
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: 'white',
          },
        },
        scales: {
          yAxes: [
            {
              id: 'Dispatch frequencies',
              type: 'linear',
              position: 'right',
              ticks: {
                max: 400,
                min: 0,
                fontColor: 'white',
              },
            },
            {
              id: 'passengers',
              type: 'linear',
              position: 'left',
              ticks: {
                max: 2500,
                min: 0,
                fontColor: 'white',
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              barPercentage: 0.5,
              gridLines: {
                display: false,
              },
              ticks: {
                stepSize: 2,
                fontColor: 'white',
              },
            },
          ],
        },
      },
    });
  },
  methods: {
    route() {
      this.chartdata.forEach(element => {
        this.routeArray.push(element.route);
      });
    },
    dispatch() {
      this.chartdata.forEach(element => {
        this.dispatchArray.push(element.DispatchFrequencies);
      });
    },
    passengers() {
      this.chartdata.forEach(element => {
        this.passengersArray.push(element.passengers);
      });
    },
  },
  created() {
    this.route();
    this.dispatch();
    this.passengers();
  },
};
</script>
<style>
.title {
  text-align: left;
}
/* .ServiceAbnormal {
  position: relative;
  bottom: 200px;
} */
#myChart2 {
  width: 900px !important;
  height: 350px !important;
}
</style>
