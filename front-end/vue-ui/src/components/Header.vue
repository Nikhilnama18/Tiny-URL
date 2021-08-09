<template>
  <div class="titlePos">
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
  position: relative;
  left: 45%;
  top: 1%;
}
.titlePos {
  right: 30%;
  height: 30%;
  background: #88ad41;
  margin: 5px;
  padding: 10px 20px;
}
</style>