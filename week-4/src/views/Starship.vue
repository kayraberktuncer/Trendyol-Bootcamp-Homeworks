<template>
  <div class="starship-detail-page">
    <router-link to="/" class="back-button">Back to Main Page</router-link>
    <div class="starship-detail">
      <div class="starship-img">
        <img src="../assets/starship.png" alt="Starship" width="400" />
      </div>
      <div class="starship-info">
        <h1>{{ starship.name }}</h1>
        <p>Model: {{ starship.model }}</p>
        <p>Hyperdrive Rating: {{ starship.hyperdrive_rating }}</p>
        <p>Passengers: {{ starship.passengers }}</p>
        <p>Max Atmosphering Speed: {{ starship.max_atmosphering_speed }}</p>
        <p>Manufacturer: {{ starship.manufacturer }}</p>
        <p>Crew: {{ starship.crew }}</p>
        <p>Cargo Capacity: {{ starship.cargo_capacity }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Starship',
  data() {
    return {
      starship: {},
    }
  },
  created() {
    axios
      .get(`https://swapi.dev/api/starships/${this.$route.params.id}`)
      .then((res) => (this.starship = res.data))
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.starship-detail-page {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.starship-detail {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.starship-info {
  display: flex;
  flex-direction: column;
  padding: 3rem;
}
.back-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  width: 10rem;
  height: 2rem;
  margin-right: auto;
  margin-left: auto;
}
.back-button:hover {
  color: yellow;
}
</style>
