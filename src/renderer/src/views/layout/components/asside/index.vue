.
<template>
  <div class="flex flex-col items-center asside titlebar-drag">
    <div class="flex items-center justify-center h-12 avatar">
      <me theme="filled" size="40" :stroke-width="3" />
      <q-menu :offset="[-10, -40]">
        <q-list style="min-width: 100px">
          <q-item v-close-popup clickable>
            <q-item-section class="!flex !flex-row !justify-start items-center">
              <user theme="filled" />
              <div class="ml-0.5">个人信息</div>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section class="!flex !flex-row !justify-start items-center">
              <laptop-computer theme="outline" />
              <div class="ml-0.5">账号信息</div>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section class="!flex !flex-row items-center !justify-start">
              <helpcenter theme="outline" />
              <div class="ml-0.5">帮助与反馈</div>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section class="!flex !flex-row items-center !justify-start">
              <arrow-circle-up theme="outline" />
              <div class="ml-0.5">检查更新</div>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section class="!flex !flex-row items-center !justify-start">
              <info theme="outline" />
              <div class="ml-0.5">关于我们</div>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section class="!flex !flex-row items-center !justify-start">
              <setting-one theme="outline" />
              <div class="ml-0.5">设置</div>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section class="!flex !flex-row items-center !justify-start">
              <logout theme="outline" />
              <div class="ml-0.5">退出登录</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>

    <div class="flex items-center justify-center refresh" @click="$q.dark.toggle">
      <refresh theme="outline" fill="#333" size="16" :stroke-width="3" />
    </div>

    <div class="flex flex-col items-center side-button-group">
      <div class="button-group-item-active button-group-item" @click="new_file">
        <plus theme="outline" size="20" fill="#fff" :stroke-width="5" @click="show_tooltip = false" />
        <q-tooltip v-model="show_tooltip" class="tooltip" anchor="center right" self="center left"> 新建 </q-tooltip>
        <q-menu anchor="top right" self="top left" :offset="[10, 0]">
          <q-list style="min-width: 100px">
            <q-item v-close-popup clickable>
              <q-item-section class="!flex !flex-row !justify-start items-center">
                <file-addition theme="filled" size="28" fill="#333" />
                <div class="ml-0.5">空白文档</div>
              </q-item-section>
            </q-item>
            <q-item v-close-popup clickable>
              <q-item-section class="!flex !flex-row items-center !justify-start">
                <folder-plus theme="filled" size="28" fill="#333" />
                <div class="ml-0.5">新建文件夹</div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
      <div class="button-group-item">
        <calendar theme="outline" size="16" :stroke-width="3" />
      </div>
      <div class="button-group-item">
        <check-one theme="outline" size="16" :stroke-width="3" />
      </div>
      <div class="button-group-item">
        <high-speed-rail theme="outline" size="16" :stroke-width="3" />
      </div>
      <div class="button-group-item">
        <application-menu theme="outline" size="16" :stroke-width="3" />
      </div>
      <div class="button-group-item">
        <document-folder theme="outline" size="16" :stroke-width="3" />
      </div>
      <div class="button-group-item">
        <share-two theme="outline" size="16" :stroke-width="3" />
      </div>
      <div class="button-group-item">
        <recycle-bin theme="outline" size="16" :stroke-width="3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
const $q = useQuasar()
const show_tooltip = ref(false)

function new_file() {
  console.log('asdfsdf')
}
</script>

<style lang="scss" scoped>
.asside {
  @apply w-[75px] h-screen;

  .avatar {
    @apply w-full;
  }
  .refresh {
    @apply h-[40px] w-[40px] bg-gray-300 rounded-sm cursor-pointer;
  }
  .side-button-group {
    :hover {
      @apply text-green-700;
    }
    .button-group-item {
      @apply h-[40px] w-[40px] flex items-center justify-center my-1 rounded-sm
        hover:bg-gray-300	bg-opacity-100 cursor-pointer;
    }

    .button-group-item-active {
      @apply bg-green-700
        hover:bg-green-600;
    }
  }
}
.plus-pop {
  width: 500px;
  height: 500px;
  background-color: #000;
}
</style>
