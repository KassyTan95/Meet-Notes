<script lang="ts" setup></script>

<template>
  <main class="main">
    <div class="asside"></div>

    <div class="content-box">
      <div class="body">
        <div class="list"></div>
        <div class="content"></div>
      </div>

      <div class="footer"></div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  @apply flex;

  .asside {
    @apply w-[75px] bg-slate-400 h-screen;
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
