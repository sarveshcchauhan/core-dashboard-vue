<script setup></script>

<template>
  <aside class="w-80 bg-white p-4 flex flex-col rounded-lg">
    <div class="logo mb-4">
      <img src="https://fakeimg.pl/100x100?text=Logo" alt="Logo" class="w-20 h-20 rounded-full" />
    </div>
    <nav>
      <ul>
        <li class="mb-2">
          <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-lg">
            <font-awesome-icon icon="home" />
            <span class="ml-4">Home</span>
          </a>
        </li>
        <li class="mb-2">
          <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-lg">
            <font-awesome-icon icon="box" />
            <span class="ml-4">Products</span>
          </a>
        </li>
        <li class="mb-2">
          <a href="/user" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-lg">
            <font-awesome-icon icon="user" />
            <span class="ml-4">User Message</span>
          </a>
        </li>
        <li class="mb-2">
          <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-lg">
            <font-awesome-icon icon="users" />
            <span class="ml-4">Customers</span>
          </a>
          <ul class="ml-8 mt-2">
            <li class="mb-2">
              <a href="/" class="text-gray-600 hover:bg-gray-200 rounded-lg px-2 py-1 block"
                >Overview</a
              >
            </li>
            <li>
              <a href="/" class="text-gray-600 hover:bg-gray-200 rounded-lg px-2 py-1 block"
                >Customer list</a
              >
            </li>
          </ul>
        </li>
        <li class="mb-2">
          <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-lg">
            <font-awesome-icon icon="shopping-cart" />
            <span class="ml-4">Shop</span>
          </a>
        </li>
        <li class="mb-2">
          <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-lg">
            <font-awesome-icon icon="chart-line" />
            <span class="ml-4">Income</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-lg">
            <font-awesome-icon icon="bullhorn" />
            <span class="ml-4">Promote</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="mt-auto flex flex-col">
      <hr />
      <div class="flex justify-between my-6">
        <span class=""> Help & Getting Started </span>
        <span
          class="inline-flex items-center rounded-md bg-purple-300 px-2 py-1 text-xs font-medium text-black-700"
          >8</span
        >
      </div>

      <div class="flex items-center">
        <span class="text-gray-500">Light</span>
        <label class="switch ml-2">
          <input type="checkbox" id="theme-toggle" />
          <span class="slider round"></span>
        </label>
        <span class="text-gray-500 ml-2">Dark</span>
      </div>
    </div>
  </aside>
</template>

<script>
import {
  faHome,
  faBox,
  faUsers,
  faShoppingCart,
  faBullhorn,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faHome, faBox, faUsers, faShoppingCart, faBullhorn, faUser)
</script>
