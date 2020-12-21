<template>
  <div id="FuelDoughnut">
    <h2 class="title">Fuel</h2>
    <div id="FuelPercentChart" style="position: relative; height:150px; width: 250px;">
      <canvas id="Fuel"></canvas>
      <p id="FuelPercentage">{{ percentage }}%</p>
    </div>
    <br />
    <div>
      This Month
      <p id="Fuel_ThisMonth">{{ ThisMonth }} L</p>
    </div>
    <div id="FuelCompare">
      <p>Compare with <br />Last month</p>
      <img
        v-if="this.FuelData.isGoingUp === true"
        id="up"
        src="../assets/UPArrow.png"
        style="border : solid 1px padding-left:10px"
      />
      <img
        v-if="this.FuelData.isGoingUp === false"
        id="down"
        src="../assets/DownArrow.png"
        style="border : solid 1px padding-left:10px"
      />
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js';

export default {
  components: {},
  data() {
    return {
      Sum: 0,
    };
  },
  props: {
    FuelData: Object,
  },
  mounted() {
    var ctx2 = document.getElementById('Fuel');
    var FuelChart = new Chart(ctx2, {
      type: 'doughnut',
      plugins: [{}],
      data: {
        labels: [],
        datasets: [
          {
            label: '2020',
            yAxisID: '2020',
            backgroundColor: ['#2dd9d0', '#dcdcdc'],
            hoverBackgroundColor: ['#20b2aa', '#696969'],
            hoverBorderColor: ['#20b2aa', '#ffffff'],
            lineTension: 0,
            borderWidth: 1,
            data: [this.Sum, this.FuelData.goal - this.Sum],
            spanGaps: 'false',
            fill: 'false',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              display: false,
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
        cutoutPercentage: 70,
      },
    });
  },
  methods: {
    sum() {
      this.FuelData.thisYear.forEach((element) => {
        this.Sum += element;
      });
      console.log(this.Sum);
    },
  },
  computed: {
    ThisMonth() {
      return this.FuelData.thisYear[this.FuelData.thisYear.length - 1];
    },
    percentage() {
      return Math.round((this.Sum / this.FuelData.goal) * 100 * 10) / 10;
    },
  },
  created() {
    this.sum();
  },
};
</script>
<style>
#FuelDoughnut {
  width: auto;
  padding: 5px;
  border: 1px solid;
  position: relative;
}
#FuelPercentChart {
  margin: auto;
  border: solid 1px;
}
#FuelPercentage {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  top: 30px;
  left: 93px;
}
#Fuel_ThisMonth {
  font-size: 36px;
  font-weight: 800;
  margin: auto;
}
#FuelCompare {
}
#up {
  position: relative;
  left: 80px;
  bottom: 60px;
}
#down {
  position: relative;
  left: 80px;
  bottom: 60px;
}
.title {
  text-align: left;
}
</style>
