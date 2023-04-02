import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }

  interface Api {
    openExt: (url: string) => void
    fromPlatform: () => 'win' | 'mac' | 'linux'
  }
}
