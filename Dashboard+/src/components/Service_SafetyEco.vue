<template>
  <div class="SafetyRoute">
    <h3>
      <img id="Heart" src="../assets/Safe_Eco_Heart.png" />
      <br />
      Safety Route
      <p>{{ data.SafetyRoute }}</p>
    </h3>
    <br />
    <h3>
      <img id="Leaf" src="../assets/Safe_Eco_Leaf.png" />
      <br />
      ECO Route
      <p>{{ data.ECORoute }}</p>
    </h3>
    <img id="Bus" src="../assets/Safe_Eco_Bus.png" />
  </div>
</template>

<script>
export default {
  name: 'SafetyEco',
  props: {
    data: Object,
  },
};
</script>
<style></style>
