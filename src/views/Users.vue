<template>
  
  <div>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersVue",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    axios
      .post("/api/users/list", {
        pageNo: 1,
        pageSize: 10,
        searchReq: { id: 0, name: "1", mail: "0", password: "", checked: 0 },
      })
      .then((response) => {
        this.data = response.data;
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  },
};
</script>

<style scoped>
/* Your CSS here */
</style>
