<template>
  <div>
    <button @click="$emit('click')" id="submit" class="btns">
      {{ title }}
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    title: String,
  },
  emits: ["click"],
};
</script>

<style>
.btns {
  top: 33%;
  left: 27%;
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 5px 5px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: inherit;
  position: relative;
}
</style>