<template>
  <div>
    <a href="addCh">New Ch</a>
    <b-list-group v-for="ch in ch" :key="ch.id">
      <b-list-group-item>
        Ch Name: {{ ch.name }}
    
        <b-button variant="info" @click="editCh(ch.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteCh(ch.id)">
          Delete
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ch: [],
    };
  },
  created() {
    //auth
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');


    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get('http://localhost:8080/ch/list', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
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