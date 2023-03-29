import { storeData } from '@renderer/types/layout/list'
import { defineStore } from 'pinia'

export default defineStore('list', {
  state: () => {
    return {
      selectedItem: null
    } as storeData
  },
  actions: {
    setSelect(val: number) {
      this.selectedItem = val
    }
  }
})
