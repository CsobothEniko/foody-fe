<template>
  <div>
    <a>Ch Page </a>
    <b-list-group v-for="ch in ch" :key="ch.id">
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Ch
        <span class="caret"></span></button>
      <ul class="dropdown-menu">
          <li><a href=""></a>{{ ch.name }}</li>
      </ul>
      </div>
    </b-list-group>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      ch: []
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("ch/list")
        .then((response) => {
          this.ch = response.data;
        });
    },
    editCh(id) {
      this.$router.push("editCh/" + id)
    },
    deleteCh(id) {
      this.axios
        .delete("ch/" + id)
        .then(() => {
          this.updateList();
          alert("success");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>