<script lang="ts" setup>
import { reactive } from 'vue'
import { loginData } from '@renderer/types/login'

const data = reactive<loginData>({
  tab: 'phone',
  isPwd: true,
  form: {
    username: '',
    password: ''
  }
})
</script>

<template>
  <div class="login-container">
    <div class="logo">logo</div>
    <div class="login">
      <div class="login-box">
        <div class="title">
          <span>欢迎使用 MeetNotes</span>
          <span>为什么要登录?</span>
        </div>

        <div class="login-main">
          <q-tabs
            v-model="data.tab"
            dense
            align="justify"
            @update:model-value=";(data.form.username = ''), (data.form.password = '')">
            <q-tab class="text-primary" name="phone" label="手机号" />
            <q-tab class="text-primary" name="email" label="邮箱" />
          </q-tabs>

          <div class="login-form">
            <q-input
              v-model="data.form.username"
              :label="data.tab === 'phone' ? '手机号' : '邮箱'"
              outlined
              dense
              class="my-[15px]" />
            <q-input v-model="data.form.password" :type="data.isPwd ? 'password' : 'text'" label="密码" outlined dense>
              <template #append>
                <q-icon
                  :name="data.isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="data.isPwd = !data.isPwd" />
              </template>
            </q-input>

            <q-btn color="primary" label="登 录" class="mt-[25px] !w-full" @click="$router.replace('/')" />

            <div class="opt-btn">
              <div>注册</div>
              <div>忘记密码</div>
            </div>
            <div class="wx-login-btn" @click="$router.replace('/')"><wechat theme="filled" />微信登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  @apply flex flex-col h-screen w-screen;
  background-image: radial-gradient(400px, #eceff6, #ffffff);

  .logo {
    @apply h-[130px] leading-[130px] px-3 w-full;
  }

  .login {
    @apply flex justify-center items-center w-full p-3;

    .login-box {
      @apply flex flex-col w-[395px] h-[480px] bg-white border-[1px] border-[#eaecf0] rounded-[8px] shadow-sm;

      .title {
        @apply flex flex-col items-center justify-center h-[130px] pt-1;

        span:first-child {
          @apply text-[25px] font-bold;
        }

        span:last-child {
          @apply text-[13px] text-gray-400;
        }
      }

      .login-main {
        @apply px-[30px] py-[15px];

        .opt-btn {
          @apply flex justify-between text-[14px] text-[#3874cb] h-[25px] mt-[10px] border-b-[1px] border-[#e9ebef];

          div {
            @apply hover:text-[#5386d1] cursor-pointer;
          }
        }

        .wx-login-btn {
          @apply h-[35px] leading-[35px] mt-[20px] text-[16px] border-[1px] border-[#e9ebef] text-center text-[#64d376] hover:border-[#64d376] cursor-pointer rounded-[4px];
        }
      }
    }
  }
}
</style>
