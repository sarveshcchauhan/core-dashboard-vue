<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <body class="bg-gray-200">
    <div class="flex h-screen p-3">
      <SideBar />
      <main class="flex-1 flex flex-col px-6">
        <Header />
        <div class="flex flex-1 overflow-hidden"><RouterView /></div>
      </main>
    </div>
  </body>
</template>

<script>
import SideBar from './components/SideBar/SideBar.vue'
import Header from './components/Header/Header.vue'

export default {
  components: {
    SideBar,
    Header
  }
}
</script>
