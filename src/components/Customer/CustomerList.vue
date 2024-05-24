<template>
  <section class="w-1/3 bg-white rounded-lg p-4 mr-4 overflow-y-auto divide-y">
    <div class="flex">
      <label class="flex cursor-pointer items-start gap-4 pl-4">
        <div class="flex items-center">
          <input type="checkbox" class="size-5 rounded-lg border-slate-200" />
        </div>

        <h2 class="text-xs font-semibold mb-4 text-slate-500 ml-2">Name</h2>
      </label>
    </div>
    <div class="space-y-0 divide-y pt-3">
      <label
        class="group flex justify-between items-center cursor-pointer items-start gap-4 p-4 transition hover:bg-gray-200 hover:rounded-lg"
        v-for="customer in customers"
        :key="customer.id"
        :for="'checkbox-' + customer.id"
      >
        <div class="main-block flex">
          <input
            type="checkbox"
            class="size-5 rounded-lg border-slate-300"
            :id="'checkbox-' + customer.id"
          />

          <img :src="customer.avatar" :alt="customer.name" class="w-15 h-15 rounded-full ml-5" />
          <div class="flex flex-col">
            <span class="ml-4 text-black-700 font-semibold">{{ customer.name }}</span>
            <span class="ml-4 text-xs text-slate-400">@{{ customer.username }}</span>
          </div>
        </div>
        <div class="icon-block">
          <font-awesome-icon
            class="hidden group-hover:inline text-slate-400"
            icon="chevron-right"
          />
        </div>
      </label>
    </div>
  </section>
</template>

<script>
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faChevronRight)

export default {
  data() {
    return {
      customers: [
        {
          id: 1,
          name: 'Chelsie Haley',
          username: 'chelsiehaly',
          avatar: 'https://fakeimg.pl/40x40?text=User'
        },
        {
          id: 2,
          name: 'Orion Luettgen',
          username: 'orionluettgen',
          avatar: 'https://fakeimg.pl/40x40?text=User'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Scoped styles specific to CustomerList.vue */
</style>
