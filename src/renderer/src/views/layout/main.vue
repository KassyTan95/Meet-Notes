<template>
  <main class="main">
    <Setting />

    <q-splitter v-model="splitterModel" class="flex-1" :limits="[3, 50]">
      <template #before>
        <Asside />
      </template>

      <template #after>
        <div class="content-box">
          <q-splitter v-model="insideModel" class="body" :limits="[15, 30]">
            <template #before>
              <div class="list">
                <List />
              </div>
            </template>

            <template #after>
              <div class="content">
                <Note />
              </div>
            </template>
          </q-splitter>

          <div class="footer">
            <Footer />
          </div>
        </div>
      </template>
    </q-splitter>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Asside from '@renderer/views/layout/components/asside/index.vue'
import List from '@renderer/views/layout/components/list/index.vue'
import Note from '@renderer/views/layout/components/note/index.vue'
import Footer from '@renderer/views/layout/components/footer/index.vue'
import Setting from '@renderer/views/layout/components/setting/index.vue'

const splitterModel = ref(10)
const insideModel = ref(10)
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
        @apply w-full h-full;
      }

      .content {
        @apply w-full h-full;
      }
    }

    .footer {
      @apply flex-1;
    }
  }
}
</style>
