<template></template>
<script>
export default {
  name: "FetchURL",
  data() {
    return {
      alias: "/",
    };
  },
  // when Host address is hit with a alias
  async created() {
    //Get  the enitre URL and split it based on conditions
    let url = window.location.href.split("#/");
    // Store the alias
    this.alias = url[1];
    // Fetch Link from backend if it is present
    const response = await fetch(`http://localhost:3000/${this.alias}`, {
      method: "GET",
    });

    const data = await response.json();
    // If the alias is not present Push it to our Home Page
    this.$router.push("/");
    if (response.status === 200) {
      return;
    }
    // Open a their link in new Page
    window.location.href = `${data.data}`;
    // window.open(`${data.data}`, "_blank");
  },
};
</script>