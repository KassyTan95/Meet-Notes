<script lang="ts" setup>
import type { ListData } from '@renderer/types/layout/list'
import { reactive } from 'vue'

const data = reactive<ListData>({
  isFocus: false
})
</script>

<template>
  <div class="list-box">
    <div class="search-box">
      <div class="search" :class="{ active: data.isFocus }">
        <search class="icon" />
        <input type="text" placeholder="搜索笔记" @focus="data.isFocus = true" @blur="data.isFocus = false" />
      </div>
      <div class="sort">
        <sort-amount-down class="icon" />
      </div>
    </div>
    <div class="row-box">
      <div class="row-item"></div>
      <div class="row-item"></div>
      <div class="row-item"></div>
      <div class="row-item"></div>
      <div class="row-item"></div>
      <div class="row-item"></div>
      <div class="row-item"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-box {
  @apply flex flex-col h-full w-full border-l-[1px];

  .search-box {
    @apply flex justify-center items-center h-[65px] p-[5px];

    .search {
      @apply w-[222px] h-[30px] flex items-center rounded-md border-[1px] border-[#f4f6f7] bg-[#f4f6f7] pl-1 pr-1;

      input {
        @apply w-full text-[12px] text-gray-500 bg-[#f4f6f7] ml-0.5;
      }
    }

    .active {
      @apply border-[1px] border-[#6588f6];
    }

    .sort {
      @apply ml-1;
    }
  }

  .row-box {
    @apply flex-1 bg-pink-200 p-[5px] overflow-auto;

    .row-item {
      @apply w-full h-[130px] bg-white border-b-[1px];
    }
  }

  .icon {
    @apply text-[18px] text-gray-400;
  }
}
</style>
