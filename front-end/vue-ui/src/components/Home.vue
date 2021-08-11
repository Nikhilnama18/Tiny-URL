<template>
  <div class="containers">
    <div class="HomePos">
      <Header title="TINY URL" />
      <br />
      <input
        class="linkField"
        v-model="link"
        type="url"
        id="link"
        placeholder="Enter your Long URL"
      />
      <br />
      <p>
        http://localhost:8080/
        <input
          v-model="alias"
          type="text"
          id="key"
          placeholder="Alias"
          class="aliasField"
        />
      </p>

      <p v-if="exists">Alias Already exists ! Try another</p>

      <Button @click="makeTURL" title="Make Tiny URL" />
      <div class="showLink" v-if="created">
        <p>The TinyURL link is :</p>
        <!-- <label for="" class="copyFiedl" id="redirectlink">{{
          redirecturl
        }}</label> -->
        <input
          class="coypField"
          type="url"
          name="title"
          :value="this.redirecturl"
          id="redirectlink"
          ref="urls"
        />
        <!-- :disabled="validate" -->
        <!-- Copy Link -->
        <!-- <v-icon @click="copyDoiToClipboard(citingDoi)">
          {{ redirecturl }}</v-icon
        > -->
        <!-- <a
          href="http://localhost:3000/try101"
          class="text-dark"
          target="_blank"
          rel="noopener noreferrer"
          ref="mylink"
        >
          {{ redirecturl }}
        </a> -->
        <button class="copybtn" @click="copylink">
          <i class="fa fa-copy" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Button,
    Header,
  },
  data() {
    return {
      link: "",
      alias: "",
      created: false,
      exists: false,
      redirecturl: "",
      validate: true,
    };
  },
  methods: {
    async makeTURL() {
      // Validations

      if (this.link === "") {
        alert("Please enter the link");
        return;
      }

      if (!this.link.startsWith("https")) {
        this.link = "https://" + this.link;
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

      // Alias is already present in DB
      if (response.status === 200) {
        this.exists = true;
        this.alias = "";
        return;
      }

      this.exists = false;
      this.created = true;
      this.redirecturl = `http://localhost:8080/#/${this.alias}`;
    },

    // To Copy the link from a field
    copylink() {
      // this.validate = false;
      const copytext = document.getElementById("redirectlink");
      copytext.select();
      copytext.setSelectionRange(0, 99999);
      document.execCommand("copy");
      // this.validate = true;
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

.showLink {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  border: 0ch;
}

.linkField {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}
/* input[type="text"],
select  */
.aliasField {
  width: 30%;
  padding: 12px 10px;
  margin: 10px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-sizing: content-box;
}
.coypField {
  width: 60%;
  padding: 12px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}
.copybtn {
  top: 33%;
  left: 0%;
  display: inline-block;
  background: steelblue;
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