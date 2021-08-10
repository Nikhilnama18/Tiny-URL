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
      <p v-if="exists">Alias Already exists ! Try another</p>
      <Button @click="click" title="Make Tiny URL" />
      <label for=""></label>
      <div v-if="created" class="showLink">
        <p>The TinyURL link is :</p>
        <input
          type="url"
          :value="this.redirecturl"
          id="redirectlink"
          size="30"
        />
        <button @click="copylink">Copy Link</button>
      </div>
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
      exists: false,
      redirecturl: "",
    };
  },
  methods: {
    async click() {
      if (this.link === "") {
        alert("Please enter the link");
        return;
      }
      if (!this.link.startsWith("https")) this.link = "https://" + this.link;
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
        this.exists = true;
        this.alias = "";
        return;
      }
      this.exists = false;
      this.created = true;
      this.redirecturl = `http://localhost:8080/#/${this.alias}`;
      console.log("Click two");
    },
    async getlink() {
      const response = await fetch(`http://localhost:3000/${this.alias}`, {
        method: "GET",
      });
      const data = await response.json();
      (this.link = ""), (this.alias = "");
      window.open(`${data.data}`, "_blank");
    },
    copylink() {},
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

.showLink {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  border: 0ch;
}
</style>