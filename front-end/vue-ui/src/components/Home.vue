<template>
  <div class="containers">
    <div class="HomePos">
      Enter your Long URL
      <br />
      <input v-model="link" type="url" id="link" placeholder="URL" size="45" />
      <br />
      <p>Your Customized link is</p>
      <p>
        localhost:8080/

        <input v-model="key" type="text" id="key" placeholder="alias" />
      </p>
      <Button @click="click" title="Make Tiny URL" />
    </div>
    <div class="URLposition" v-if="created">
      <p>created Link is</p>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "Home",
  components: {
    Button,
  },
  data() {
    return {
      link: "",
      key: "",
      created: false,
    };
  },
  methods: {
    click() {
      if (this.link === "") {
        alert("Please entre the link");
        return;
      }
      this.created = true;
      console.log("Click two");
    },
  },
};
</script>

<style >
.HomePos {
  background: #f4f4f4;
  margin: 10px;
  padding: 20px 10px;
}
.containers {
  max-width: 500px;
  margin: 50px auto;
  overflow: auto;
  min-height: 100px;
  border: 1px solid steelblue;
  padding: 20px;
  border-radius: 20px;
}
</style>