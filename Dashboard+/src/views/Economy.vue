<template>
<div class="container-fluid p-5">
  <div class="Economy">
    <!-- <Com0></Com0> -->
<div class="row">
  <div class="col-lg-9">
    <div class="row">
        <div class="col-lg-10">
        <RevenueChart id="RevenueChartCom" v-bind:RevenueData="RevenueData"></RevenueChart>
        </div>
        <div class="col-lg-2">
        <Revenue id="RevenueCom" v-bind:RevenueData="RevenueData"></Revenue>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-lg-10">
        <FuelChart id="FuelChartCom" v-bind:FuelData="FuelData"></FuelChart>
        </div>
        <div class="col-lg-2 ">
        <Fuel id="FuelCom" v-bind:FuelData="FuelData"></Fuel>
         </div>
      </div>
</div>
  <div class="col-lg-3">
        <div class="CostView">
          <Cost v-bind:repair="repair" v-bind:fine="fine"></Cost>
        </div>
        </div>
  </div>
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
  background-color: #11303e;
  color: #fcfcfc;
}
#RevenueChartCom {
  position: relative;;
  background-color:#2a4452;
  padding-right: 50px;
}

.CostView {
  position: relative;
}
#FuelCom {
  width: 300px;
 background-color: #11303e;
  color: #fcfcfc;
}
#FuelChartCom {
  position: relative;
  background-color: #2a4452;
  padding-right: 50px;
}

</style>
