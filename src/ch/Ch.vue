<template>
  <div class="">
    <a href="addCh">New Ch</a>
    <b-list-group v-for="ch in ch" :key="ch.id">
      <b-list-group-item>
        Id: {{ ch.id }}
        Name: {{ ch.name }}
        Quantity: {{ ch.quantity }}
        {{ ch.name }}
        Calorie: {{ ch.calorie }}
        Type: {{ ch.type }}
    
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
import axios from 'axios';
export default {
  data() {
    return {
      ch: [],
    };
  },
  created() {
   

    this.updateList();
  },
  methods: {
    updateList() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

      axios.get('http://localhost:8080/ch/list', {
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
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

      axios.delete("ch/" + id,{ headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }})
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