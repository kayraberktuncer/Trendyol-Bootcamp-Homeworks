<template>
  <div class="home-content">
    <div class="search-bar">
      <input type="text" placeholder="Search by name" v-model="search" />
      <button @click="handleSearch">Search</button>
    </div>
    <div class="starships">
      <div v-for="ship in starships" :key="ship.id">
        <router-link :to="'/' + ship.url.split('/').reverse()[1]">
          <div class="shipCard">
            <img src="../assets/starship.png" width="200" />
            <div class="shipCard-info">
              <h3>{{ ship.name }}</h3>
              <p>{{ ship.model }}</p>
              <p>{{ ship.hyperdrive_rating }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ListStarships',
  data() {
    return {
      search: '',
      starships: [],
    }
  },
  methods: {
    handleSearch: function() {
      axios
        .get(`https://swapi.dev/api/starships?search=${this.search}`)
        .then((response) => {
          this.starships = [...response.data.results]
        })
    },
  },
  mounted() {
    axios.get(`https://swapi.dev/api/starships`).then((response) => {
      this.starships = [...response.data.results]
    })
  },
}
</script>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.starships {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.shipCard {
  width: 400px;
  border: 1px solid black;
}
</style>
