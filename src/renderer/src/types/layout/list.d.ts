interface ListData {
  isFocus: boolean
  heavyList: HeavyList[]
}

interface HeavyList {
  label: string
}

interface storeData {
  selectedItem: null | number
}

export type { ListData, storeData }
