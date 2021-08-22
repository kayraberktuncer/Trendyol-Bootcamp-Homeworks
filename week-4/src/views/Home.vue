<template>
  <div class="home">
    <HelloWorld />
    <ListStarships />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import ListStarships from '../components/ListStarships'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListStarships,
  },
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
