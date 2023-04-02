<template>
  <div class="note-box" :class="{ 'pt-[12px]': platform === 'win' }">
    <div class="title-box titlebar-drag">
      <div class="title">测试标题</div>
      <div class="operation">
        <share-one class="icon" />
        <find class="icon" />
        <more class="icon" />
      </div>
    </div>
    <markdown v-if="store.selectedItem !== null" v-model="mdValue" height="100%" placeholder="欢迎使用MeetNotes" />
    <empty-page v-else />
  </div>
</template>

<script lang="ts" setup>
import listStore from '@renderer/store/listStore'
import { ref } from 'vue'

const store = listStore()
const mdValue = ref<string>('')
const platform: string = window.api.fromPlatform()
</script>

<style lang="scss" scoped>
.note-box {
  @apply flex flex-col h-full border-l-[1px];
  border-color: $global_border_color;

  .title-box {
    @apply flex items-center justify-between h-[80px] border-b-[1px] px-2 border-gray-200;
    border-color: $global_border_color;

    .title {
      @apply text-[20px] font-bold;
    }

    .operation {
      @apply flex;

      .icon {
        @apply text-[16px] ml-1 cursor-pointer;
      }
    }
  }
}
</style>
