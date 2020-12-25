<template>
  <div class="ServiceContainer">
    <!-- <Com0></Com0> -->
    <div class="container-fluid p-5">
      <div class="row">
        <div class="col-lg-3">
          <CustomerSatisfaction
            class="CustomerSatisfactionclass"
            v-bind:Satisfaction="Satisfaction"
          ></CustomerSatisfaction>
        </div>

        <div class="col-lg-7 ">
          <DriverRank class="DriverRank" v-bind:DriverRank="DriverRank"></DriverRank>
        </div>

        <div class="col-lg-2">
          <SafetyEco class="safetyeco" v-bind:data="SafetyEco"></SafetyEco>
        </div>
      </div>
      <div class="row mt-4 ">
        <div class="col-lg-8 pr-0">
          <AbnormalChart class="AbnormalChart" v-bind:chartdata="abnormalTop3"></AbnormalChart>
        </div>
        <div class="col-lg-4 pl-0">
          <AbnormalTop3 class="AbnormalTop3" v-bind:AbnormalTop3="abnormalTop3"></AbnormalTop3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import Com0 from '@/components/TestCom.vue';
import SafetyEco from '@/components/Service_SafetyEco.vue';
import AbnormalTop3 from '@/components/Service_Abnormal_Top3.vue';
import AbnormalChart from '@/components/Service_AbnormalChart.vue';
import CustomerSatisfaction from '@/components/Service_CustomerSatisfaction.vue';
import DriverRank from '@/components/Service_DriverRank.vue';

export default {
  name: 'Service',
  components: {
    // Com0,
    SafetyEco,
    AbnormalTop3,
    AbnormalChart,
    CustomerSatisfaction,
    DriverRank,
  },
  data() {
    return {
      SafetyEco: {
        SafetyRoute: '246',
        ECORoute: '123',
      },
      abnormalTop3: [
        {
          route: '26',
          passengers: 520,
          DispatchFrequencies: 200,
        },
        {
          route: '53',
          passengers: 1300,
          DispatchFrequencies: 200,
        },
        {
          route: '74',
          passengers: 1350,
          DispatchFrequencies: 220,
        },
        {
          route: '95',
          passengers: 1360,
          DispatchFrequencies: 235,
        },
        {
          route: '102',
          passengers: 740,
          DispatchFrequencies: 215,
        },
        {
          route: '134',
          passengers: 1480,
          DispatchFrequencies: 244,
        },
        {
          route: '138',
          passengers: 1520,
          DispatchFrequencies: 268,
        },
        {
          route: '147',
          passengers: 520,
          DispatchFrequencies: 215,
        },
        {
          route: '159',
          passengers: 1300,
          DispatchFrequencies: 198,
        },
        {
          route: '247',
          passengers: 1320,
          DispatchFrequencies: 208,
        },
        {
          route: '259',
          passengers: 980,
          DispatchFrequencies: 250,
        },
        {
          route: '266',
          passengers: 1300,
          DispatchFrequencies: 238,
        },
        {
          route: '287',
          passengers: 995,
          DispatchFrequencies: 232,
        },
        {
          route: '612',
          passengers: 1400,
          DispatchFrequencies: 215,
        },
        {
          route: '741',
          passengers: 700,
          DispatchFrequencies: 205,
        },
        {
          route: '783',
          passengers: 720,
          DispatchFrequencies: 210,
        },
        {
          route: '902',
          passengers: 888,
          DispatchFrequencies: 200,
        },
        {
          route: '914',
          passengers: 620,
          DispatchFrequencies: 185,
        },
        {
          route: '974',
          passengers: 1321,
          DispatchFrequencies: 208,
        },
        {
          route: '990',
          passengers: 500,
          DispatchFrequencies: 200,
        },
      ],
      Satisfaction: {
        Last3Month: [82, 90, 85],
        worse3Route: ['307', '247', '356'],
      },
      DriverRank: [
        {
          driverName: 'Chris Thompson',
          vehicleId: 'SM-134',
          safety: 97,
          eco: 100,
        },
        {
          driverName: 'Tom Anderson',
          vehicleId: 'DF-146',
          safety: 100,
          eco: 91,
        },
        {
          driverName: 'Zack Brown',
          vehicleId: 'TA-570',
          safety: 98,
          eco: 89,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.safetyeco {
  // border: solid 2px;
  height: 100%;
  padding: 30px 10px;
  background-color: #11303e;
}
.AbnormalTop3 {
  height: 100%;
  background-color: #11303e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 50px;
}
.ServiceContainer {
  color: #fcfcfc;
  height: 1000px;
}
.home {
  width: 100vw;
}
.AbnormalChart {
  position: relative;
  padding: 30px 50px;
  background-color: #11303e;
}
.DriverRank {
  // border: solid;
  padding: 30px 20px;
  background-color: #11303e;
}
.busStopBg {
  position: fixed;
}
</style>
