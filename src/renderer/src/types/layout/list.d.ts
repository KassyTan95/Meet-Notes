interface ListData {
  isFocus: boolean
  heavyList: storeData[]
  sort: 'asc' | 'desc'
}

interface storeData {
  id: null | number
  label: string
}

export type { ListData, storeData }
