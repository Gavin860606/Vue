<template>
  <div id="counter">
    <button v-if="counter > 0" v-on:click="counterminus()">-1</button>
    <button v-show="counter < 10" v-on:click="counterplus()">+1</button>
    <p :class="['text', { 'red-bigFont': counter === 10, 'green-smFont': counter === 0 }]">
      The button above has been clicked {{ counter }} times.
    </p>
    <p :class="['text', { 'red-bigFont': counter === 10, 'green-smFont': counter === 0 }]">
      Roman:{{ roman }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  methods: {
    counterplus() {
      this.counter += 1;
    },
    counterminus() {
      this.counter -= 1;
    },
  },
  watch: {
    // counter: function(val)
    counter: (val) => {
      if (val === 10) {
        alert('number acheive 10');
      } else if (val === 0) alert('number acheive 0');
    },
  },
  computed: {
    roman() {
      const hashMap = {
        0: 0,
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        test: 1,
      };
      return hashMap[this.counter];
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.red-bigFont {
  color: red;
  font-size: 30px;
}
.green-smFont {
  color: green;
  font-size: 12px;
}
</style>
