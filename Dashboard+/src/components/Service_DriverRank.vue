<template>
  <div class="DriverRank">
    <div id="RankTitle">Top 3 Drivers</div>
    <div class="container ">
      <div id="DriverIcon" class="d-flex justify-content-center">
        <div id="Driver0">
          <img id="CrownIcon" src="../assets/Gold.png" />
          <img id="DriverPNG" src="../assets/Driver0.png" />
        </div>
        <div id="Driver1">
          <img id="CrownIcon" src="../assets/Silver.png" />
          <img id="DriverPNG" src="../assets/Driver1.png" />
        </div>
        <div id="Driver2">
          <img id="CrownIcon" src="../assets/Bronze.png" />
          <img id="DriverPNG" src="../assets/Driver2.png" />
        </div>
      </div>
      <div class="DriverRank_ul d-flex justify-content-center">
        <div id="DriverVfor" v-for="(item, index) in this.DriverRank" :key="index">
          <div id="DriverName">{{ item.driverName }}</div>
          <br />
          <div id="vehicleId">{{ item.vehicleId }}</div>
          <br />
          <div id="Rank">{{ (item.safety + item.eco) / 2 }}</div>
          <br />
          <div style="word-spacing: 15px;">Safety ECO</div>
          <div id="SafetyEco">{{ item.safety }} {{ item.eco }}</div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Top3Result: [],
    };
  },
  name: 'DriverRank',
  props: {
    DriverRank: Array,
  },
  methods: {
    top3() {
      this.DriverRank.forEach(element => {
        this.Top3Result.push((element.safety + element.eco) / 2);
      });
    },
  },
  created() {
    this.top3();
  },
};
</script>
<style>
.DriverRank_ul {
  display: flex;
}
#DriverName {
  font-size: 24px;
  font-weight: 700;
}
#vehicleId {
  font-size: 18px;
  font-weight: 200;
}
#Rank {
  font-size: 40px;
  font-weight: 800;
}
#SafetyEco {
  font-size: 20px;
  font-weight: 600;
  word-spacing: 30px;
}
#RankTitle {
  font-size: 30px;
  font-weight: 700;
  padding: 10px;
}
#DriverPNG {
  border-radius: 60px;
  width: 75px;
  height: 75px;
  margin-left: 65px;
  margin-right: 60px;
}
#Driver0 {
  display: block;
  margin-top: 20px;
  margin-left: 5px;
}
#Driver1 {
  display: block;
  margin-top: 20px;
  margin-left: 5px;
}
#Driver2 {
  display: block;
  margin-top: 20px;
}
#DriverIcon {
  display: flex;
}
#CrownIcon {
  left: 114px;
  bottom: 52px;
  position: relative;
  margin-bottom: 10px;
}
#DriverVfor {
  margin-left: 30px;
  margin-right: 30px;
}
</style>
