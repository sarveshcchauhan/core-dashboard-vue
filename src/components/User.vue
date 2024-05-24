<template>
  <div class="w-full bg-white rounded-lg">
    <div class="flex justify-between p-4 mb-4">
      <h4 class="text-slate-700">User Messages</h4>
      <button @click="openModal" class="bg-blue-500 text-white py-2 px-4 rounded-md">
        Add New Message
      </button>
      <Modal :isOpen="isModalOpen" @close="closeModal" @save="saveData" />
    </div>
    <div class="overflow-x-auto p-6">
      <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead class="text-left">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Message</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          <tr class="odd:bg-gray-50" v-for="(entry, index) in userDataStore.data" :key="index">
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{{ entry.name }}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ entry.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useUserMessagesStore } from './../stores/userMessages.js'
import Modal from './UserModal.vue'

export default {
  name: 'user',
  components: {
    Modal
  },
  setup() {
    const isModalOpen = ref(false)
    const userDataStore = useUserMessagesStore()

    onMounted(async () => {
      await userDataStore.fetchData()
    })

    const openModal = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    const saveData = (data) => {
      userDataStore.addData(data)
    }

    return {
      isModalOpen,
      openModal,
      closeModal,
      saveData,
      userDataStore
    }
  }
}
</script>
