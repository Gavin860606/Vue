<template>
  <div class="Header">
    <h3>{{ msg }} Page</h3>
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
<style>
.Header {
  margin: 100px;
  font-size: 32px;
  color: #fcfcfc;
}
</style>
