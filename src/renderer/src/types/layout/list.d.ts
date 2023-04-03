interface ListData {
  isFocus: boolean
  heavyList: HeavyList[]
  sort: 'asc' | 'desc'
}

interface HeavyList {
  label: string
}

interface storeData {
  selectedItem: null | number
}

export type { ListData, storeData }
