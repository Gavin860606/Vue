<template>
  <div class="hello">
    <h3>Header Components: I'm {{ msg }} Page</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>
