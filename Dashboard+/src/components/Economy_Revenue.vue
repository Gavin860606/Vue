<template>
  <div id="RevenueDoughnut">
    <h2 class="title">Revenue</h2>

    <div id="RevenuePercentChart" style="position: relative; height:150px; width: 250px;">
      <canvas id="Revenue"></canvas>
      <p id="RevenuePercentage">{{ percentage }}%</p>
    </div>
    <br />
    <div>
      This Month
      <p id="Revenue_ThisMonth">$ {{ ThisMonth }}</p>
    </div>
    <div id="RevenueCompare">
      <p>Compare with <br />Last month</p>
      <img
        v-if="this.RevenueData.isGoingUp === true"
        id="up"
        src="../assets/UPArrow.png"
        style="border : solid 1px padding-left:10px"
      />
      <img
        v-if="this.RevenueData.isGoingUp === false"
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
    RevenueData: Object,
  },
  mounted() {
    var ctx2 = document.getElementById('Revenue');
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
            data: [this.Sum, this.RevenueData.goal - this.Sum],
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
      this.RevenueData.thisYear.forEach(element => {
        this.Sum += element;
      });
      console.log(this.Sum);
    },
  },
  computed: {
    ThisMonth() {
      let val = this.RevenueData.thisYear[this.RevenueData.thisYear.length - 1];
      val = (val / 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return val;
    },
    percentage() {
      return Math.round((this.Sum / this.RevenueData.goal) * 100 * 10) / 10;
    },
  },
  created() {
    this.sum();
  },
};
</script>
<style>
#RevenueDoughnut {
  padding: 5px;
  border: 1px solid;
  position: relative;
}
#RevenuePercentChart {
  margin: auto;
  border: solid 1px;
}
#RevenuePercentage {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  top: 30px;
  left: 93px;
}
#Revenue_ThisMonth {
  font-size: 36px;
  font-weight: 800;
  margin: auto;
}
.title {
  text-align: left;
}
</style>
