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
  // 全部配置参见文档 https://ld246.com/article/1549638745630
  new Vditor(editorRef.value, {
    // i18n: '', // 国际化, 见ITips
    height: '100%',
    minHeight: 500, // 最小高度
    width: '', // 宽度
    theme: 'classic', // dark or classic
    mode: 'ir', // wysiwyg, ir, sv
    lang: 'zh_CN', // en_US, fr_FR, ja_JP, ko_KR, ru_RU, sv_SE, zh_CN, zh_TW
    tab: '\t',
    typewriterMode: true, // 是否启用打字机模式
    value: '', // 初始化值
    placeholder: '...',
    // cdn: '', // 自建cdn地址
    debugger: true, // 是否显示日志
    // undoDelay: 1, // 历史记录间隔
    icon: 'material', // ant or material
    // toolbar: [
    //   // 自定义工具栏按钮
    //   {
    //     hotkey: '⇧⌘S', // 快捷键
    //     suffix: '', // 插入编辑器中的后缀
    //     prefix: '', // 插入编辑器中的前缀
    //     name: 'sponsor', // 唯一标识
    //     tipPosition: 's', // 提示位置 'n', 'ne', 'nw', 's', 'se', 'sw', 'w', 'e'
    //     tip: '成为赞助者', // 提示内容
    //     className: 'right', // 样式名
    //     icon: '<svg t="1589994565028" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2808" width="32" height="32"><path d="M506.6 423.6m-29.8 0a29.8 29.8 0 1 0 59.6 0 29.8 29.8 0 1 0-59.6 0Z" fill="#0F0F0F" p-id="2809"></path><path d="M717.8 114.5c-83.5 0-158.4 65.4-211.2 122-52.7-56.6-127.7-122-211.2-122-159.5 0-273.9 129.3-273.9 288.9C21.5 562.9 429.3 913 506.6 913s485.1-350.1 485.1-509.7c0.1-159.5-114.4-288.8-273.9-288.8z" fill="#FAFCFB" p-id="2810"></path><path d="M506.6 926c-22 0-61-20.1-116-59.6-51.5-37-109.9-86.4-164.6-139-65.4-63-217.5-220.6-217.5-324 0-81.4 28.6-157.1 80.6-213.1 53.2-57.2 126.4-88.8 206.3-88.8 40 0 81.8 14.1 124.2 41.9 28.1 18.4 56.6 42.8 86.9 74.2 30.3-31.5 58.9-55.8 86.9-74.2 42.5-27.8 84.3-41.9 124.2-41.9 79.9 0 153.2 31.5 206.3 88.8 52 56 80.6 131.7 80.6 213.1 0 103.4-152.1 261-217.5 324-54.6 52.6-113.1 102-164.6 139-54.8 39.5-93.8 59.6-115.8 59.6zM295.4 127.5c-72.6 0-139.1 28.6-187.3 80.4-47.5 51.2-73.7 120.6-73.7 195.4 0 64.8 78.3 178.9 209.6 305.3 53.8 51.8 111.2 100.3 161.7 136.6 56.1 40.4 88.9 54.8 100.9 54.8s44.7-14.4 100.9-54.8c50.5-36.3 108-84.9 161.7-136.6 131.2-126.4 209.6-240.5 209.6-305.3 0-74.9-26.2-144.2-73.7-195.4-48.2-51.9-114.7-80.4-187.3-80.4-61.8 0-127.8 38.5-201.7 117.9-2.5 2.6-5.9 4.1-9.5 4.1s-7.1-1.5-9.5-4.1C423.2 166 357.2 127.5 295.4 127.5z" fill="#141414" p-id="2811"></path><path d="M353.9 415.6m-33.8 0a33.8 33.8 0 1 0 67.6 0 33.8 33.8 0 1 0-67.6 0Z" fill="#0F0F0F" p-id="2812"></path><path d="M659.3 415.6m-33.8 0a33.8 33.8 0 1 0 67.6 0 33.8 33.8 0 1 0-67.6 0Z" fill="#0F0F0F" p-id="2813"></path><path d="M411.6 538.5c0 52.3 42.8 95 95 95 52.3 0 95-42.8 95-95v-31.7h-190v31.7z" fill="#5B5143" p-id="2814"></path><path d="M506.6 646.5c-59.6 0-108-48.5-108-108v-31.7c0-7.2 5.8-13 13-13h190.1c7.2 0 13 5.8 13 13v31.7c0 59.5-48.5 108-108.1 108z m-82-126.7v18.7c0 45.2 36.8 82 82 82s82-36.8 82-82v-18.7h-164z" fill="#141414" p-id="2815"></path><path d="M450.4 578.9a54.7 27.5 0 1 0 109.4 0 54.7 27.5 0 1 0-109.4 0Z" fill="#EA64F9" p-id="2816"></path><path d="M256 502.7a32.1 27.5 0 1 0 64.2 0 32.1 27.5 0 1 0-64.2 0Z" fill="#EFAFF9" p-id="2817"></path><path d="M703.3 502.7a32.1 27.5 0 1 0 64.2 0 32.1 27.5 0 1 0-64.2 0Z" fill="#EFAFF9" p-id="2818"></path></svg>',
    //     toolbar: [], // 子菜单
    //     click() {
    //       alert('捐赠地址：https://ld246.com/sponsor')
    //     }
    //   }
    // ],
    toolbarConfig: {
      hide: false, // 是否隐藏工具栏
      pin: false // 是否固定工具栏
    },
    counter: {
      // 计数器
      enable: false
    },
    cache: {
      enable: false
    },
    image: {
      // 图片预览处理 https://ld246.com/article/1549638745630#options-image
      isPreview: true // 是否预览图片
    },
    after: () => {
      // 渲染完成回调
      // instance.setValue(props.content)
    },
    input: () => {
      // 输入后触发
    },
    focus: () => {
      // 编辑器聚焦后触发
    },
    blur: () => {
      // 失焦后触发
    },
    esc: () => {
      // 按下esc触发
    },
    ctrlEnter: () => {
      // 按下ctrl + enter后触发
    },
    select: () => {
      // 选中文字后触发
    },
    upload: {
      // 上传处理 https://ld246.com/article/1549638745630#options-upload
    }
  })
}
</script>

<style lang="scss" scoped>
.note-box {
  @apply flex flex-col h-full border-l-[1px];
  border-color: $global_border_color;

  .title-box {
    @apply flex items-center justify-between h-[60px] border-b-[1px] px-2 border-gray-200;
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

  .note {
    @apply flex-1 border-0;
  }
}
</style>
