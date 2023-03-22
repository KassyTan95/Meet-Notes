<script lang="ts" setup>
const openBrowser = (url: string): void => window.api.openExt(url)
</script>

<template>
  <div class="footer-box">
    <div class="left">
      <div class="l-item g-pointer hover" @click="openBrowser('https://github.com/KassyTan95/Meet-Notes')">
        <span> <github class="icon" /> 喜欢请到GitHub点个Star吧 </span>
      </div>

      <div class="l-item g-pointer hover" @click="openBrowser('mailto:kassyt@126.com')">
        <span><mail-open class="icon" /> kassyt@126.com </span>
      </div>
    </div>
    <div class="right">
      <div class="r-item g-pointer hover">
        <span> <setting /> 设置 </span>
      </div>

      <div class="r-item g-pointer hover">
        <span> <update-rotation /> 检查更新 </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-box {
  @apply flex items-center justify-between  w-full h-full border-t-[1px] border-l-[1px] border-gray-200 text-[12.5px] text-[#868686] font-semibold pl-1 pr-1 shadow-xl;

  .left {
    @apply flex;

    .l-item {
      @apply mr-2.5;
    }
  }

  .right {
    @apply flex;

    .r-item {
      @apply ml-2.5;
    }
  }

  .hover {
    @apply hover:text-[#9f9f9f];
  }

  .icon {
    @apply text-[14px];
  }
}
</style>
