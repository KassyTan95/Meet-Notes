import { contextBridge, shell } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  /**
   * 从浏览器打开链接
   * @param url
   */
  openExt: (url: string): void => {
    shell.openExternal(url)
  },
  fromPlatform: (): string => {
    const platformMap = { darwin: 'mac', win32: 'win', linux: 'linux' }
    return platformMap[process.platform]
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
