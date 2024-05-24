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
