interface ListData {
  isFocus: boolean
  activeItem: number | null
  heavyList: HeavyList[]
}

interface HeavyList {
  label: string
}

export type { ListData }
