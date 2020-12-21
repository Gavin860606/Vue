<template>
  <div class="Economy">
    <!-- <Com0></Com0> -->
    <div class="RevenueView">
      <RevenueChart id="RevenueChartCom" v-bind:RevenueData="RevenueData"></RevenueChart>
      <Revenue id="RevenueCom" v-bind:RevenueData="RevenueData"></Revenue>
    </div>
    <div class="FuelView">
      <FuelChart id="FuelChartCom" v-bind:FuelData="FuelData"></FuelChart>
      <Fuel id="FuelCom" v-bind:FuelData="FuelData"></Fuel>
    </div>
    <div class="CostView">
      <Cost v-bind:repair="repair" v-bind:fine="fine"></Cost>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RevenueChart from '@/components/Economy_RevenueChart.vue';
import FuelChart from '@/components/Economy_FuelChart.vue';
import Fuel from '@/components/Economy_Fuel.vue';
import Revenue from '@/components/Economy_Revenue.vue';
import Cost from '@/components/Economy_Cost.vue';

export default {
  name: 'Economy',
  components: {
    RevenueChart,
    FuelChart,
    Fuel,
    Revenue,
    Cost,
  },
  data() {
    return {
      RevenueData: {
        thisYear: [18500, 25000, 31000, 27500, 29500, 35000, 28000, 24500, 31000, 22500],
        lastYear: [
          18000,
          26500,
          28000,
          22000,
          27000,
          30000,
          32000,
          28000,
          20000,
          24000,
          28000,
          20000,
        ],
        goal: 300000,
        isGoingUp: false,
      },
      FuelData: {
        thisYear: [185, 240, 250, 260, 270, 260, 300, 250, 280, 240],
        lastYear: [250, 280, 290, 240, 230, 290, 240, 260, 200, 270, 280, 320],
        goal: 3500,
        isGoingUp: false,
      },
      repair: {
        thisMonthCost: 1458,
        isGoingUp: true,
      },
      fine: {
        thisMonthCost: 1200,
        isGoingUp: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#RevenueCom {
  width: 300px;
  border: solid 1px;
  position: relative;
  left: 800px;
  background-color: #1b3b49;
  color: #fcfcfc;
}
#RevenueChartCom {
  position: absolute;
  width: 720px;
  background-color: #314e5b;
  color: #fcfcfc;
}
.RevenueView {
  position: relative;
}
.FuelView {
  position: relative;
  margin-top: 30px;
}
.CostView {
  position: relative;
  left: 1200px;
  bottom: 900px;
}
#FuelCom {
  width: 300px;
  border: solid 1px;
  position: relative;
  left: 800px;
  background-color: #1b3b49;
  color: #fcfcfc;
}
#FuelChartCom {
  position: absolute;
  width: 720px;
  background-color: #314e5b;
  color: #fcfcfc;
}
</style>
