<template>
  <div >
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style  scoped>
h1 {
  position: fixed;
  left: 45%;
  top: 13%;
}
</style>