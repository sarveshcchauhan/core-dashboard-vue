<template>
  <div class="bg-white rounded-lg p-4 flex justify-between items-center mb-4">
    <div class="relative w-full">
      <input
        type="text"
        class="border border-gray-300 rounded-lg pl-10 pr-4 py-2"
        placeholder="Search or type a command"
      />
      <font-awesome-icon class="absolute left-3 top-3 text-gray-400" icon="bell" />
    </div>
    <button class="flex items-center mx-5 px-4 py-2 bg-blue-600 text-white rounded-lg">
      <font-awesome-icon icon="add" class="mr-2" /> Create
    </button>
    <div class="flex icon-list">
      <font-awesome-icon class="text-gray-400 mx-3" icon="message" />
      <font-awesome-icon class="text-gray-400 ml-3" icon="message" />
    </div>
    <div class="flex items-center mr-4 ml-2">
      <i class="fas fa-bell text-gray-600 text-xl"></i>
      <img
        src="https://fakeimg.pl/40x40?text=User"
        alt="User Avatar"
        class="w-10 h-10 rounded-full ml-4"
      />
    </div>
  </div>
</template>

<script>
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faAdd)
</script>
