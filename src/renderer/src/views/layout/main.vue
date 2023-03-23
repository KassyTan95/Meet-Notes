<template>
  <main class="main">
    <Asside></Asside>

    <div class="content-box">
      <div class="body">
        <div class="list">22222</div>
        <div class="content">3333</div>
      </div>

      <div class="footer">
        <Footer />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import Footer from '@renderer/views/layout/components/footer/index.vue'
import Asside from '@renderer/views/layout/components/asside/index.vue'

</script>

<style lang="scss" scoped>
.main {
  @apply flex;

  

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
      @apply flex-1;
    }
  }
}
</style>
