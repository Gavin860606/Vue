<template>
  <div class="small">
    <h2 class="title">Fuel Consumption</h2>
    <div id="FuelChartid" >
      <canvas id="FuelChart" style="position: relative; width: 1000px; height: 340px;"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  components: {},
  data() {
    return {
      estimateMonth: null,
      FuelDataLocal: Object,
    };
  },
  props: {
    FuelData: Object,
  },
  mounted() {
    const labels = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const values2020 = this.FuelDataLocal.thisYear;
    const values2019 = this.FuelDataLocal.lastYear;
    const data2020 = labels.map((label, index) => ({ x: label, y: values2020[index] }));
    const data2019 = labels.map((label, index) => ({ x: label, y: values2019[index] }));

    var FuelChart = new Chart(document.getElementById('FuelChart'), {
      type: 'scatter',
      plugins: [
        {
          afterDraw: (chart) => {
            var ctx = chart.chart.ctx;
            var xAxis = chart.scales['x-axis-1'];
            var yAxis = chart.scales['y-axis-1'];
            chart.config.data.datasets[0].data.forEach((value, index) => {
              if (index > 0) {
                var valueFrom = data2020[index - 1];
                var xFrom = xAxis.getPixelForValue(valueFrom.x);
                var yFrom = yAxis.getPixelForValue(valueFrom.y);
                var xTo = xAxis.getPixelForValue(value.x);
                var yTo = yAxis.getPixelForValue(value.y);
                ctx.save();
                ctx.strokeStyle = '#00cccc';
                ctx.lineWidth = 2;
                if (index > this.estimateMonth) {
                  ctx.setLineDash([5, 10]);
                }
                ctx.beginPath();
                ctx.moveTo(xFrom, yFrom);
                ctx.lineTo(xTo, yTo);
                ctx.stroke();
                ctx.restore();
              }
            });
            chart.config.data.datasets[1].data.forEach((value, index) => {
              if (index > 0) {
                var valueFrom = data2019[index - 1];
                var xFrom = xAxis.getPixelForValue(valueFrom.x);
                var yFrom = yAxis.getPixelForValue(valueFrom.y);
                var xTo = xAxis.getPixelForValue(value.x);
                var yTo = yAxis.getPixelForValue(value.y);
                ctx.save();
                ctx.strokeStyle = '#b2cfcc';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(xFrom, yFrom);
                ctx.lineTo(xTo, yTo);
                ctx.stroke();
                ctx.restore();
              }
            });
          },
        },
      ],
      data: {
        datasets: [
          {
            label: '2020',
            data: data2020,
            pointBackgroundColor: 'rgba(0, 204, 204, 1)',
            backgroundColor: 'rgba(0, 204, 204,1)',
            borderColor: 'rgba(0, 204, 204,1)',
            pointRadius: 3,
          },
          {
            label: '2019',
            data: data2019,
            pointBackgroundColor: 'rgba(178,207,204, 1)',
            backgroundColor: 'rgba(178,207,204,1)',
            borderColor: 'rgba(178,207,204,1)',
            pointRadius: 3,
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
          xAxes: [
            {
              type: 'category',
              labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'June',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              ticks: {
                stepSize: 1,
                fontColor: 'white',
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: 'white',
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
  methods: {
    estimateThisYear() {
      this.FuelDataLocal = JSON.parse(JSON.stringify(this.FuelData));
      this.estimateMonth = this.FuelData.thisYear.length - 1;
      for (let i = this.FuelData.thisYear.length; i < 12; i++) {
        this.FuelDataLocal.thisYear[i] = Math.round(this.FuelData.lastYear[i] * 1.1);
      }
      console.log('thisFuel', this.FuelData.thisYear);
    },
  },
  created() {
    this.estimateThisYear();
  },
};
</script>
<style>
.title {
  text-align: left;
}
#FuelChartid {

  padding-left:20px

}
</style>
