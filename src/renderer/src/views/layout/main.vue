

<template>
  <main class="main">
    
    <div class="flex flex-col items-center asside">
      <div class="flex items-center justify-center h-12 avatar">
        <me theme="filled" size="40" fill="#333" :strokeWidth="3" />
      </div>

      <div class="flex items-center justify-center refresh">
        <refresh theme="outline" size="16" fill="#333" :strokeWidth="3" />
      </div>

      <div class="flex flex-col items-center side-button-group">
        <div class="button-group-item-active button-group-item" @click="new_file">
          <plus theme="outline" size="20" fill="#fff" :strokeWidth="5" />
          
        </div>
        <div class="button-group-item">
          <calendar theme="outline" size="16" fill="#333" :strokeWidth="3" />
        </div>
        <div class="button-group-item">
          <check-one theme="outline" size="16" fill="#333" :strokeWidth="3" />
        </div>
        <div class="button-group-item">
          <high-speed-rail theme="outline" size="16" fill="#333" :strokeWidth="3" />
        </div>
        <div class="button-group-item">
          <application-menu theme="outline" size="16" fill="#333" :strokeWidth="3" />
        </div>
        <div class="button-group-item">
          <document-folder theme="outline" size="16" fill="#333" :strokeWidth="3" />
        </div>
        <div class="button-group-item">
          <share-two theme="outline" size="16" fill="#333" :strokeWidth="3" />
        </div>
        <div class="button-group-item">
          <recycle-bin theme="outline" size="16" fill="#333" :strokeWidth="3" />
        </div>
      </div>
    </div>

    <div class="content-box">
      <div class="body">
        <div class="list">{{ a }}</div>
        <div class="content">3333</div>
      </div>

      <div class="footer">444</div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import {
  Me,
  Refresh,
  Plus,
  Calendar,
  CheckOne,
  HighSpeedRail,
  ApplicationMenu,
  DocumentFolder,
  ShareTwo,
  RecycleBin
} from '@icon-park/vue-next'

const a = '1231'

function new_file() {
  console.log('asdfsdf')
}
</script>

<style lang="scss" scoped>
.main {
  @apply flex;

  .asside {
    @apply w-[75px] h-screen;
    .avatar {
      @apply w-full;
    }
    .refresh {
      @apply h-[40px] w-[40px] bg-gray-100 rounded-sm;
    }
    .side-button-group {
      .button-group-item {
        @apply h-[40px] w-[40px] flex items-center justify-center my-1 rounded-sm
        hover:bg-gray-100	bg-opacity-100 cursor-pointer	
        active:bg-green-700;
      }

      .button-group-item-active {
        @apply bg-green-700
        hover:bg-green-600;
      }
    }
  }

  .content-box {
    @apply flex flex-1 flex-col;

    .body {
      display: flex;
      height: calc(100% - 25px);

      .list {
        @apply w-[315px] h-full bg-green-300;
      }

      .content {
        @apply h-full flex-1 bg-yellow-600;
      }
    }

    .footer {
      @apply bg-purple-300 flex-1;
    }
  }
}
</style>
