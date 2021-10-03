<template>
  <div class="airport" :class="{ 'is-international': airport.country !== 'USA' }">
    <p>{{ airport.abbreviation }}</p>
    <p>{{ airport.name }}</p>
    <p>{{ airport.city }}, {{ airport.state }}, {{ airport.country }}</p>
  </div>
</template>

<script>
export default {
  props: {
    airport: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.airport {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.airport p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}

.airport p:last-child {
  font-style: italic;
  font-size: .8rem;
}

.airport.is-international {
	border-color: red;
	color: red;
}
</style>