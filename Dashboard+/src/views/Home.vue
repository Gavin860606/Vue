<template>
  <div class="home">
    <img alt="ECS" src="../assets/ECS.png" style="margin: 30px" />
    <!-- <Com0></Com0> -->
    <Header v-bind:msg="text"></Header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import Com0 from '@/components/TestCom.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    // Com0,
    Header,
  },
  data() {
    return {
      text: 'Dashboard+ Economy & Service',
    };
  },
};
</script>

<style lang="scss" scoped></style>
