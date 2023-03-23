<template>
    <div class="note" ref="editorRef"></div>
</template>
  
<script lang="ts" setup>

import { ref, onMounted } from 'vue'

import Vditor from 'vditor'
import 'vditor/dist/index.css'

const editorRef = ref()
let instance


onMounted(() => {
    init()
})

function init() {

    instance = new Vditor(editorRef.value, {
        height: "100%",
        mode: 'ir', // wysiwyg, ir, sv
        toolbarConfig: {
            pin: true
        },
        cache: {
            enable: false
        },
        after: () => {
            // instance.setValue(props.content)
        },
        // 这里写上传
        upload: {
        }
    })
}

</script>
  

<style lang="scss" scoped>
.note {
    @apply h-full flex-1;
}
</style>