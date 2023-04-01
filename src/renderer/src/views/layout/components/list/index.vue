<script lang="ts" setup>
import { ListData } from '@renderer/types/layout/list'
import listStore from '@renderer/store/listStore'
import { onMounted, reactive } from 'vue'

const data = reactive<ListData>({
  isFocus: false,
  heavyList: []
})

const store = listStore()

const maxSize = 100

onMounted(() => {
  for (let i = 0; i < maxSize; i++) {
    data.heavyList.push({
      label: 'Option ' + (i + 1)
    })
  }
})
</script>

<template>
  <div class="list-box">
    <div class="search-box titlebar-drag">
      <div class="search titlebar-remove-drag" :class="{ active: data.isFocus }">
        <search class="icon" />
        <input type="text" placeholder="搜索笔记" @focus="data.isFocus = true" @blur="data.isFocus = false" />
      </div>
      <div class="sort">
        <sort-amount-down class="icon" />
      </div>
    </div>

    <q-virtual-scroll v-slot="{ index }" class="row-box" :items="data.heavyList">
      <q-item :key="index" dense>
        <div class="row-item" :class="{ active: index === store.selectedItem }" @click="store.setSelect(index)">
          <div class="title">测试标题{{ index }}</div>
          <div class="details">
            <div class="time">2023.01.01</div>
            <div class="size">3.2k</div>
          </div>
        </div>
      </q-item>
    </q-virtual-scroll>
  </div>
</template>

<style lang="scss" scoped>
.list-box {
  @apply flex flex-col h-full w-full border-l-[1px];
  border-color: $global_border_color;

  .search-box {
    @apply flex justify-center items-center h-[75px] p-[5px];

    .search {
      @apply w-[222px] h-[33px] flex items-center rounded-md border-[1px] bg-[#f4f6f7] px-1 duration-300;
      border-color: $global_border_color;

      input {
        @apply w-full text-[12px] text-gray-500 bg-[#f4f6f7] ml-0.5;
      }
    }

    .active {
      @apply border-[1px] border-[#6588f6] duration-500;
    }

    .sort {
      @apply ml-1;
    }
  }

  .row-box {
    @apply flex-1 p-[5px] overflow-hidden hover:overflow-y-auto;
    &:hover {
      overflow-y: overlay;
    }

    .row-item {
      @apply flex flex-col justify-between w-full h-[70px] px-[10px] py-[13px] border-b-[1px] cursor-pointer hover:bg-[#f4f6f7] rounded-sm;
      border-color: $global_border_color;

      .title {
        @apply text-[15px] font-bold;
      }

      .details {
        @apply flex justify-between;
      }
    }

    :deep(.q-item) {
      @apply p-0;
    }

    .active {
      @apply bg-[#f4f6f7] rounded-sm;
    }
  }

  .icon {
    @apply text-[18px] text-gray-400;
  }
}
</style>
