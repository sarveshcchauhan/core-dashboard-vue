<template>
  <section class="flex-1 bg-white rounded-lg p-6 overflow-auto">
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
          <Plus class="group-hover:text-white" :size="20" />
        </button>
        <button
          class="group flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-6 py-2 text-black-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
        >
          <span class="font-medium transition-colors group-hover:text-white"> Message</span>
          <MessageSquareTextIcon class="group-hover:text-white" :size="20" />
        </button>
      </div>
    </div>

    <div class="mb-4">
      <span class="flex items-center text-slate-800 font-semibold"
        >Private note <CircleAlert class="text-slate-500 ml-3" :size="20"
      /></span>

      <div class="mt-3 h-40">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      </div>
    </div>

    <div class="space-y-4 divide-y mb-6">
      <div class="flex items-center space-x-4">
        <Mail class="text-slate-500" :size="20" /><span
          class="ml-2 text-black font-semibold cursor-pointer"
          >fahey.designer@robot.co</span
        >
      </div>

      <div class="flex items-center space-x-7">
        <Twitter class="text-slate-500 mt-4 cursor-pointer" :size="20" />
        <Instagram class="text-slate-500 mt-4 cursor-pointer" :size="20" />
        <Facebook class="text-slate-500 mt-4 cursor-pointer" :size="20" />
      </div>

      <div class="flex items-center space-x-4">
        <Link2 class="text-slate-500 mt-4" :size="20" />
        <a href="http://test-link.com" class="text-black font-semibold mt-4">robot.co</a>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="table-auto w-full">
        <thead class="text-sm font-semibold text-gray-400 bg-gray-50">
          <tr class="border-b border-slate-200 mb-3">
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
<style>
.ck-editor__editable {
  height: 100px !important;
}
</style>
<script setup>
import { ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {
  Plus,
  MessageSquareTextIcon,
  Link2,
  Mail,
  Twitter,
  Instagram,
  Facebook,
  CircleAlert
} from 'lucide-vue-next'

//CKEDITOR
const editor = ref(ClassicEditor)
const editorData = ref('')
const editorConfig = ref({
  toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote']
})

//Product list
const products = ref([
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
  },
  {
    id: 2,
    title: 'Product title',
    link: 'http://test-link.com',
    image: 'https://fakeimg.pl/40x40?text=User',
    price: '$64.00',
    date: 'Apr 9, 2021'
  }
])
</script>
