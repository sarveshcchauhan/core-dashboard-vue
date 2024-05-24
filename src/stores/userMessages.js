import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserMessagesStore = defineStore('userMessages', {
  state: () => ({
    data: []
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/entries')
        this.data = response.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async addData(entry) {
      try {
        const response = await axios.post('http://localhost:3000/entries', entry)
        this.data.push(response.data)
      } catch (error) {
        console.error('Error adding data:', error)
      }
    }
  }
})
