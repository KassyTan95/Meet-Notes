<template>
  <main class="main">
    <Asside />

    <div class="content-box">
      <div class="body">
        <div class="list">
          <List />
        </div>
        <div class="content">
          <Note />
        </div>
      </div>

      <div class="footer">
        <Footer />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import Asside from '@renderer/views/layout/components/asside/index.vue'
import List from '@renderer/views/layout/components/list/index.vue'
import Note from '@renderer/views/layout/components/note/index.vue'
import Footer from '@renderer/views/layout/components/footer/index.vue'
</script>

<style lang="scss" scoped>
.main {
  @apply flex;

  .content-box {
    @apply flex flex-1 flex-col;

    .body {
      display: flex;
      height: calc(100vh - 25px);

      .list {
        @apply w-[315px] h-full;
      }

      .content {
        @apply w-full;
      }
    }

    .footer {
      @apply flex-1;
    }
  }
}
</style>
