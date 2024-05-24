<template>
  <section class="flex-1 bg-white rounded-lg p-6">
    <div class="flex items-center mb-4">
      <img
        src="https://fakeimg.pl/80x80?text=User"
        alt="Chelsie Haley"
        class="w-20 h-20 rounded-full"
      />
      <div class="ml-4">
        <h3 class="text-xl text-slate-800 font-semibold mb-1">Chelsie Haley</h3>
        <span class="text-slate-400">@chelsiehaly</span>
      </div>
      <div class="ml-auto flex items-center">
        <button
          class="group flex items-center justify-between gap-4 rounded-lg border-2 border-slate-200 px-6 py-2 m-2 text-black-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
        >
          <span class="font-medium transition-colors group-hover:text-white"> Follow </span>
          <font-awesome-icon class="group-hover:text-white" icon="add" />
        </button>
        <button
          class="group flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-6 py-2 text-black-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
        >
          <span class="font-medium transition-colors group-hover:text-white"> Message</span
          ><font-awesome-icon class="group-hover:text-white" icon="message" />
        </button>
      </div>
    </div>

    <div class="mb-4">
      <label class="text-slate-800 font-semibold">Private note</label>
      <textarea
        class="w-full border border-gray-300 rounded-lg px-4 py-2"
        placeholder="Private note"
      ></textarea>
    </div>

    <div class="flex items-center mb-4">
      <i class="fas fa-envelope text-slate-800"></i>

      <span class="ml-2 text-slate-800">
        <font-awesome-icon class="group-hover:text-slate-400" icon="mail" />
        fahey.designer@robot.co</span
      >
    </div>

    <div class="flex items-center space-x-4 mb-4">
      <i class="fas fa-link text-gray-600"></i>
      <a href="http://test-link.com" class="text-blue-600">robot.co</a>
    </div>

    <div class="overflow-x-auto">
      <table class="table-auto w-full">
        <thead class="text-xs font-semibold text-gray-400 bg-gray-50">
          <tr class="border-b border-slate-200 mb-2">
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-left">Product</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-left">Price</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-end">Date</div>
            </th>
          </tr>
        </thead>
        <tbody class="text-sm divide-y divide-gray-100">
          <tr v-for="product in products" :key="product.id" class="even:bg-gray-100 odd:bg-white">
            <td class="p-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                    class="rounded-lg"
                    :src="product.image"
                    width="40"
                    height="40"
                    alt="Alex Shatov"
                  />
                </div>
                <div class="flex flex-col font-medium text-gray-800">
                  <span class="text-md font-bold mb-1">{{ product.title }}</span>
                  <span class="text-xs text-slate-500">{{ product.link }}</span>
                </div>
              </div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-left font-medium">
                <span class="bg-price px-1 py-1 rounded-md">{{ product.price }}</span>
              </div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-md text-end text-slate-400 font-semibold">{{ product.date }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { faAdd, faMessage } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faAdd, faMessage)

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Product title',
          link: 'http://test-link.com',
          image: 'https://fakeimg.pl/40x40?text=User',
          price: '$64.00',
          date: 'Apr 9, 2021'
        },
        {
          id: 2,
          title: 'Product title',
          link: 'http://test-link.com',
          image: 'https://fakeimg.pl/40x40?text=User',
          price: '$64.00',
          date: 'Apr 9, 2021'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Scoped styles specific to CustomerDetails.vue */
</style>
