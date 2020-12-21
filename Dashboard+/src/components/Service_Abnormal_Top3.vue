<template>
  <div class="AbnormalTop3">
    <h3>
      Top3 <br />Abnormal Dispatch Routes <br /><br />
      <img id="Warning_ABtop3" src="../assets/Warning.png" />
      <span id="top3" v-for="(item, index) in Top3Result" :key="index">{{ item.route }} </span>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Top3Result: [],
    };
  },
  name: 'AbnormalTop3',
  props: {
    AbnormalTop3: Array,
  },
  methods: {
    top3() {
      let min = [];
      const top3 = [];
      for (let i = 0; i < this.AbnormalTop3.length; i++) {
        min.push(this.AbnormalTop3[i].passengers / this.AbnormalTop3[i].DispatchFrequencies);
      }

      function bubblesort(arr) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }

        return arr;
      }

      min = bubblesort(min);
      console.log(min);
      for (let x = 0; x < 3; x++) {
        if (top3.length === 3) break;
        this.AbnormalTop3.findIndex(element => {
          if (element.passengers / element.DispatchFrequencies === min[x]) top3.push(element);
        });
      }
      this.Top3Result = top3;
    },
  },
  created() {
    this.top3();
  },
};
</script>
<style>
#top3 {
  border: solid 1px;
  border-radius: 5px;
  padding: 1px 2px;
  margin-right: 10px;
}
#Warning_ABtop3 {
  margin-right: 15px;
  position: relative;
  top: 5px;
}
</style>
