<template>
  <div class="CustomerSatisfaction">
    <h3 id="Satisfaction_title">Customer satisfaction</h3>
    <div class="chart-container" style="position: relative; height:90px; width: 250px;">
      <canvas id="myChart"></canvas>
    </div>
    <div class="row mt-0">
      <span class="threemonth" v-for="(item, index) in ThreeMonth" :key="index">{{ item }} </span>
    </div>
    <div id="month">
      <p>last 2<br />month</p>
      <p>last<br />month</p>
      <p>this<br />month</p>
    </div>
    <div class="row mt-0">
      <img id="Warning" src="../assets/Warning.png" />
      <div id="Satisfaction_top3" v-for="(item, index) in Top3Result" :key="index">{{ item }}</div>
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js';

export default {
  data() {
    return {
      ThreeMonth: [],
      Top3Result: [],
    };
  },
  props: {
    Satisfaction: Object,
  },
  methods: {
    ThreeMonths() {
      this.Satisfaction.Last3Month.forEach((element) => {
        this.ThreeMonth.push(element);
      });
    },
    top3() {
      this.Satisfaction.worse3Route.forEach((element) => {
        this.Top3Result.push(element);
      });
    },
  },
  mounted() {
    var ctx2 = document.getElementById('myChart');
    var myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['', '', ''],
        datasets: [
          {
            yAxisID: 'Dispatch frequencies',
            lineTension: 0,
            backgroundColor: 'rgba(244, 33, 170,0.3)',
            borderColor: 'rgba(244, 33, 170,1)',
            borderWidth: 3,
            pointStrokeColor: '#fff',
            pointStyle: 'crossRot',
            data: this.ThreeMonth,
            cubicInterpolationMode: 'monotone',
            fill: 'false',
          },
        ],
      },
      options: {
        scales: {
          scaleShowGridLines: false,
          yAxes: [
            {
              id: 'Dispatch frequencies',
              type: 'linear',
              position: 'right',
              ticks: {
                max: 100,
                min: Math.min(...this.ThreeMonth) - 10,
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        tooltips: {
          enabled: true,
        },
        legend: {
          display: false,
        },
      },
    });
  },
  created() {
    this.ThreeMonths();
    this.top3();
  },
};
</script>
<style>
#Satisfaction_title {
  font-size: 25px;
}
.chart-container {
  display: inline-block;
  position: absolute;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
}
.CustomerSatisfaction {
  height: auto;
  width: 400px;
  padding: 10px;
  display: block;
  border: solid 2px;
  bottom: 200px;
}
#Satisfaction_top3 {
  font-size: 28px;
  border: solid 1px;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 10px;
  display: inline-block;
}
#month {
  display: inline-flex;
}
#month p {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-right: 23px;
  margin-left: 23px;
}
.threemonth {
  border-radius: 5px;
  height: auto;
  width: auto;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: auto;
  position: relative;
  display: inline-block;
  font-size: 48px;
  font-weight: 700;
}
</style>
