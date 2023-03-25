/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  RENDERER_VITE_API_BASE_URL: string
  RENDERER_VITE_API_TIMEOUT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
