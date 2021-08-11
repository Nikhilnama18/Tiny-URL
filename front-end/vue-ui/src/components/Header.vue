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
/* .titlePos {
  right: 20%;
  height: 30%;
  background: #88ad41;
  margin: 5px;
  padding: 10px 20px;
} */
</style>