<template>
  <aside class="w-80 bg-white p-4 flex flex-col rounded-lg">
    <div class="logo mb-4">
      <img src="https://fakeimg.pl/100x100?text=Logo" alt="Logo" class="w-20 h-20 rounded-full" />
    </div>
    <nav>
      <ul>
        <li class="mb-2">
          <a
            href="/"
            class="flex items-center p-2 text-slate-500 font-semibold hover:bg-gray-200 rounded-lg"
          >
            <Home class="text-slate-500" :size="20" /> <span class="ml-4">Home</span>
          </a>
        </li>
        <li class="mb-2">
          <a
            href="/"
            class="flex items-center p-2 text-slate-500 font-semibold hover:bg-gray-200 rounded-lg"
          >
            <Gem class="text-slate-500" :size="20" />
            <span class="ml-4">Products</span>
          </a>
        </li>
        <li class="mb-2">
          <a
            href="/user"
            class="flex items-center p-2 text-slate-500 font-semibold hover:bg-gray-200 rounded-lg"
          >
            <CircleUser class="text-slate-500" :size="20" />
            <span class="ml-4">User Message</span>
          </a>
        </li>
        <li class="mb-2">
          <a
            href="/"
            class="flex items-center p-2 text-slate-500 font-semibold hover:bg-gray-200 rounded-lg"
          >
            <CircleUser class="text-slate-500" :size="20" />
            <span class="ml-4">Customers</span>
          </a>
          <ul class="ml-8 mt-2">
            <li class="mb-2">
              <a
                href="/"
                class="text-slate-500 font-semibold hover:bg-gray-200 rounded-lg px-2 py-1 block"
                >Overview</a
              >
            </li>
            <li>
              <a
                href="/"
                class="text-slate-500 font-semibold hover:bg-gray-200 rounded-lg px-2 py-1 block"
                >Customer list</a
              >
            </li>
          </ul>
        </li>
        <li class="mb-2">
          <a
            href="/"
            class="flex items-center p-2 text-slate-500 font-semibold hover:bg-gray-200 rounded-lg"
          >
            <Store class="text-slate-500" :size="20" />
            <span class="ml-4">Shop</span>
          </a>
        </li>
        <li class="mb-2">
          <a
            href="/"
            class="flex items-center p-2 text-slate-500 font-semibold hover:bg-gray-200 rounded-lg"
          >
            <PieChart class="text-slate-500" :size="20" />
            <span class="ml-4">Income</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center p-2 text-slate-500 font-semibold hover:bg-gray-200 rounded-lg"
          >
            <BadgePercent class="text-slate-500" :size="20" />
            <span class="ml-4">Promote</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="mt-auto flex flex-col">
      <hr />
      <div class="flex my-6">
        <ul>
          <li class="flex justify-between items-center mb-2">
            <a href="/" class="flex items-center p-2 text-slate-500 font-semibold">
              <CircleHelp class="text-slate-500" :size="20" />
              <span class="ml-4">Help & Getting Started</span>
            </a>
            <div class="badge ml-6">
              <span
                class="flex justify-end rounded-md bg-purple-300 px-2 py-1 text-xs font-medium text-black-900"
                >8</span
              >
            </div>
          </li>
        </ul>
      </div>

      <label
        class="p-1 themeSwitcherTwo shadow-two relative inline-flex cursor-pointer select-none items-center justify-center bg-gray-200 dark:bg-dark-2 rounded-xl"
      >
        <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
        <span
          class="light text-primary bg-gray dark:bg-dark-3 flex items-center space-x-[6px] rounded-xl py-1 px-[20px] text-sm font-medium"
          :class="{
            'text-primary bg-gray dark:bg-dark-3': isChecked,
            'active bg-white': !isChecked
          }"
        >
          <SunMedium class="text-slate-500" :size="20" />
          <span> Light Mode </span>
        </span>
        <span
          class="light text-primary bg-gray dark:bg-dark-3 flex items-center space-x-[6px] rounded-xl py-1 px-[20px] text-sm font-medium"
          :class="{
            'text-primary bg-gray dark:bg-dark-3': !isChecked,
            'active bg-white': isChecked
          }"
        >
          <Moon class="text-slate-500" :size="20" />
          <span>Dark Mode</span>
        </span>
      </label>
    </div>
  </aside>
</template>

<script setup>
import {
  Home,
  Gem,
  CircleUser,
  Store,
  BadgePercent,
  PieChart,
  SunMedium,
  Moon,
  CircleHelp
} from 'lucide-vue-next'

import { ref } from 'vue'
const isChecked = ref(false)

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
}
</script>
<style scoped></style>
