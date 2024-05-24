<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
      <h2 class="text-xl font-semibold mb-4 pb-4 border-b-2 text-slate-800">Enter User Message</h2>
      <form @submit.prevent="save">
        <div class="mb-4">
          <label for="name" class="block text-xs font-medium text-slate-700"> Name </label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Enter your name"
            class="mt-1 h-10 w-full rounded-md border-2 pl-2 border-slate-300 shadow-sm sm:text-sm outline-none"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-slate-700" for="message">Message</label>
          <textarea
            id="message"
            v-model="message"
            class="mt-1 block w-full rounded-md border-2 outline-none border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            @click="close"
            class="bg-gray-300 text-gray-700 py-2 px-4 rounded-md mr-2"
          >
            Close
          </button>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      name: '',
      message: '',
      errors: {}
    }
  },
  methods: {
    //to close the modal
    close() {
      this.$emit('close')
      this.errors = {}
    },
    //it will validate and save the ressult
    save() {
      this.errors = {}
      if (!this.name) {
        this.errors.name = 'Name is required.'
      }
      if (!this.message) {
        this.errors.message = 'Message is required.'
      }
      if (!this.errors.name && !this.errors.message) {
        this.$emit('save', { name: this.name, message: this.message })
        this.close()
      }
    }
  }
}
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:checked + .slider:before {
  transform: translateX(18px);
}

.dark .bg-gray-100 {
  background-color: #1a202c;
}

.dark .bg-white {
  background-color: #2d3748;
}

.dark .text-gray-700 {
  color: #a0aec0;
}

.dark .text-gray-600 {
  color: #718096;
}

.dark .border-gray-300 {
  border-color: #4a5568;
}

.dark .text-blue-600 {
  color: #63b3ed;
}

.dark .bg-blue-600 {
  background-color: #2b6cb0;
}
</style>
