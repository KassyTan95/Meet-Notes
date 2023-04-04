import { storeData } from '@renderer/types/layout/list'
import { defineStore } from 'pinia'

export default defineStore('list', {
  state: () => {
    return {
      id: null,
      label: ''
    } as storeData
  },
  actions: {
    setSelect(item: storeData) {
      this.id = item.id
      this.label = item.label
    }
  }
})
