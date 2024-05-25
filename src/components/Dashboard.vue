<template>
  <CustomerList />
  <CustomerDetails />
</template>

<script>
import CustomerList from './Customer/CustomerList.vue'
import CustomerDetails from './Customer/CustomerDetails.vue'

export default {
  components: {
    CustomerList,
    CustomerDetails
  }
}
</script>

<style scoped>
body {
  scrollbar-width: thin;
  scrollbar-color: transparent;
}

.bg-price {
  background: transparent;
}

/* This will affect the entire page */
::-webkit-scrollbar {
  width: 5px; /* Width of the scrollbar */
}

::-webkit-scrollbar-track {
  background: transparent; /* Color of the track */
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #c8c7c7; /* Color of the scroll thumb */
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9b9b9b; /* Color of the scroll thumb on hover */
}
</style>
