<template></template>
<script>
export default {
  name: "FetchURL",
  data() {
    return {
      alias: "/",
    };
  },
  async created() {
    let uri = window.location.href.split("#/");
    console.log("Key is", uri[1]);
    this.alias = uri[1];
    const response = await fetch(`http://localhost:3000/${this.alias}`, {
      method: "GET",
    });
    const data = await response.json();
    // console.log("Response status", response.status);
    this.$router.push("/");
    if (response.status === 200) {
      return;
    }
    window.open(`${data.data}`, "_blank");
  },
};
</script>