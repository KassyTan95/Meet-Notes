<script lang="ts" setup>
import { reactive } from 'vue'
import { LoginData } from '@renderer/types/login'
import { login } from '@renderer/api/access'

const data = reactive<LoginData>({
  tab: 'phone',
  type: 'form',
  isPwd: true,
  form: {
    username: '',
    password: ''
  }
})

// 登录
const loginSubmit = async () => {
  const res = await login(data.form)
  console.log('res', res)
}
</script>

<template>
  <div class="login-container">
    <div class="logo titlebar-drag">logo</div>
    <div class="login">
      <div class="login-box">
        <div class="title">
          <span>欢迎使用 MeetNotes</span>
          <span>为什么要登录?</span>
        </div>

        <div class="login-main">
          <div v-if="data.type === 'form'">
            <q-tabs
              v-model="data.tab"
              dense
              align="justify"
              @update:model-value=";(data.form.username = ''), (data.form.password = '')">
              <q-tab class="text-primary" name="phone" label="手机号" />
              <q-tab class="text-primary" name="email" label="邮箱" />
            </q-tabs>

            <q-input
              v-model="data.form.username"
              :label="data.tab === 'phone' ? '手机号' : '邮箱'"
              outlined
              dense
              class="mt-[25px] mb-[15px]" />
            <q-input v-model="data.form.password" :type="data.isPwd ? 'password' : 'text'" label="密码" outlined dense>
              <template #append>
                <q-icon
                  :name="data.isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="data.isPwd = !data.isPwd" />
              </template>
            </q-input>

            <q-btn color="primary" label="登 录" class="mt-[25px] !w-full" @click="loginSubmit" />

            <div class="opt-btn">
              <div>注册</div>
              <div>忘记密码</div>
            </div>
            <div class="wx-login-btn" @click="data.type = 'wechat'"><wechat theme="filled" />微信登录</div>
          </div>

          <div v-else class="login-scan-code">
            <div class="scan-code-box">二维码</div>
            <div class="agreement">扫码表示同意 <span>服务协议</span> 和 <span>隐私协议</span></div>
            <div class="form-login-btn" @click="data.type = 'form'">手机号/邮箱登录</div>
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
        @apply px-[30px];

        .opt-btn {
          @apply flex justify-between text-[14px] text-[#3874cb] h-[25px] mt-[10px] border-b-[1px] border-[#e9ebef];

          div {
            @apply hover:text-[#5386d1] cursor-pointer;
          }
        }

        .wx-login-btn {
          @apply h-[35px] leading-[35px] mt-[20px] text-[16px] border-[1px] border-[#e9ebef] text-center text-[#64d376] hover:border-[#64d376] cursor-pointer rounded-[4px];
        }

        .login-scan-code {
          @apply flex flex-col justify-center items-center;

          .scan-code-box {
            @apply w-[185px] h-[185px] leading-[185px] text-center border-[1px] border-[#e9ebef];
          }

          .agreement {
            @apply w-full text-center text-[12px] text-[#b5b7bc] h-[50px] mt-[8px] leading-[50px] border-b-[1px] border-[#e9ebef];

            span {
              @apply text-[#3874cb] cursor-pointer;
            }
          }

          .form-login-btn {
            @apply w-full h-[35px] leading-[35px] text-center mt-[30px] border-[1px] text-[#3874cb] border-[#e9ebef] rounded-[4px] cursor-pointer hover:border-[#3874cb];
          }
        }
      }
    }
  }
}
</style>
