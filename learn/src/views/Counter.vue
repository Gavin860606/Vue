<template>
  <div class="Counter">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Header v-bind:msg="text"></Header>
    <CounterCom></CounterCom>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue';
import CounterCom from '@/components/Counter.vue';

export default {
  name: 'Counter',
  components: {
    Header,
    CounterCom,
  },
  data() {
    return {
      text: 'Counter',
    };
  },
};
</script>

<style lang="scss" scoped></style>
