<template>
  <div class="bg-white rounded-lg p-4 flex justify-between items-center mb-4">
    <div class="relative w-full">
      <form class="flex">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="outline-none border border-gray-300 rounded-lg pl-10 pr-5 py-2 text-xs bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search or type command"
            required
          />
        </div>
      </form>
    </div>
    <button class="flex items-center mx-5 px-4 py-2 bg-blue-600 text-white rounded-lg">
      <Plus class="mr-2" :size="20" />
      Create
    </button>
    <div class="flex icon-list">
      <MessageSquareText class="mx-3 text-slate-400 cursor-pointer" :size="20" />
      <BellIcon class="mx-3 text-slate-400 cursor-pointer" :size="20" />
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

<script setup>
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faAdd)
import { Plus, MessageSquareText, BellIcon } from 'lucide-vue-next'
</script>
