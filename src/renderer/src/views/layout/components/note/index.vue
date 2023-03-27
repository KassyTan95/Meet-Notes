<template>
  <div class="note-box">
    <div class="title-box">
      <div class="title">测试标题</div>
      <div class="operation">
        <share-one class="icon" />
        <find class="icon" />
        <more class="icon" />
      </div>
    </div>
    <div ref="editorRef" class="note"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

import Vditor from 'vditor'
import 'vditor/dist/index.css'

const editorRef = ref()

onMounted(() => {
  init()
})

function init() {
  new Vditor(editorRef.value, {
    height: '100%',
    mode: 'ir', // wysiwyg, ir, sv
    toolbarConfig: {
      pin: true
    },
    cache: {
      enable: false
    },
    after: () => {
      // instance.setValue(props.content)
    },
    // 这里写上传
    upload: {}
  })
}
</script>

<style lang="scss" scoped>
.note-box {
  @apply flex flex-col h-full border-l-[1px] border-gray-200;

  .title-box {
    @apply flex items-center justify-between h-[60px] border-b-[1px] px-2 border-gray-200;

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

  .note {
    @apply flex-1 border-0;
  }
}
</style>
