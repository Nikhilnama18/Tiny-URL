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
        <input v-model="alias" type="text" id="key" placeholder="alias" />
      </p>
      <p v-if="exitis">Alias Already Exitis ! Try another</p>
      <Button @click="click" title="Make Tiny URL" />
      <a v-if="created" href="http://localhost:3000">Created Link is </a>
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
      alias: "",
      created: false,
      exitis: false,
      redirect: "http://localhost:3000/",
    };
  },
  methods: {
    async click() {
      if (this.link === "") {
        alert("Please enter the link");
        return;
      }
      if (this.alias === "") {
        alert("Please enter the alias");
        return;
      }
      const data = {
        link: this.link,
        key: this.alias,
      };
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        this.exitis = true;
        this.alias = "";
        return;
      }
      this.exitis = false;
      this.created = true;
      this.redirect += this.alias;
      console.log(this.redirect);
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