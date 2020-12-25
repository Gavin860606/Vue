<template>
  <div class="Economy_Cost">
    <h1>
      Cost
    </h1>
    <p>compared with last month</p>
    <br /><img id="CostRepair" src="../assets/Cost_Repair.png" />
    <div>
      Repair costs
      <p id="RepairCost">$ {{ RepairCost }}</p>
      <img
        v-if="this.repair.isGoingUp === true"
        id="Eco_Cost_img"
        src="../assets/UPArrow.png"
        style="border : solid 1px padding-left:10px"
      />
      <img
        v-if="this.repair.isGoingUp === false"
        id="Eco_Cost_img"
        src="../assets/DownArrow.png"
        style="border : solid 1px padding-left:10px"
      />
    </div>
    <br />
    <img id="CostFine" src="../assets/Cost_Fine.png" />
    <div>
      Fine
      <p id="Fine">$ {{ Fine }}</p>
      <img
        v-if="this.fine.isGoingUp === true"
        id="Eco_Fine_img"
        src="../assets/UPArrow.png"
        style="border : solid 1px padding-left:10px"
      />
      <img
        v-if="this.fine.isGoingUp === false"
        id="Eco_Fine_img"
        src="../assets/DownArrow.png"
        style="border : solid 1px padding-left:10px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Economy_Cost',
  props: {
    repair: Object,
    fine: Object,
  },
  computed: {
    RepairCost() {
      let val = this.repair.thisMonthCost;
      val = (val / 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return val;
    },
    Fine() {
      let val = this.fine.thisMonthCost;
      val = (val / 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return val;
    },
  },
};
</script>
<style>
.Economy_Cost {
  width: 320px;
  height: 845px;
  background-color: #2a4452;
  color: #fcfcfc;
  padding-top: 70px;
  margin-left: 105px;
}
#Fine {
  font-size: 36px;
  font-weight: 800;
}
#RepairCost {
  font-size: 36px;
  font-weight: 800;
}
#Eco_Cost_up {
  position: relative;
  left: 100px;
  bottom: 68px;
}
#Eco_Cost_img {
  position: relative;
  left: 100px;
  bottom: 68px;
}
#Eco_Fine_img {
  position: relative;
  left: 100px;
  bottom: 62px;
}
#CostRepair {
  position: relative;
  right: 100px;
  top: 80px;
}
#CostFine {
  position: relative;
  right: 100px;
  top: 80px;
}
</style>
