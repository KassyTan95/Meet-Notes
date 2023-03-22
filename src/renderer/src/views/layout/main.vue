<script lang="ts" setup>
  import { Me } from '@icon-park/vue-next';
</script>

<template>
  <main class="main">
    <div class="flex flex-col items-center asside">
        <div class="flex items-center justify-center h-12 avatar">
          <me theme="filled" size="40" fill="#333" :strokeWidth="3"/>
          

        </div>
    </div>

    <div class="content-box">
      <div class="body">
        <div class="list">222</div>
        <div class="content">333</div>
      </div>

      <div class="footer">444</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  @apply flex;

  .asside {
    @apply w-[75px] h-screen;
    .avatar {
      @apply w-full;
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
