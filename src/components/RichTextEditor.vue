<template>
  <div>
    <div ref="editor" class="quill-editor"></div>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default {
  data() {
    return {
      quill: null,
    }
  },
  emits: ['input'],
  mounted() {
    this.quill = new Quill(this.$refs.editor, {
      theme: 'snow',
      modules: {
        keyboard: {
          bindings: {
            tab: false, // Disable tab key binding to prevent losing focus
          },
        },
        toolbar: [
          [{ list: 'bullet' }, { list: 'ordered' }], // Show only bullet list option
        ],
      },
      placeholder: 'Description',
      formats: ['list'],
    })

    
  },
  props: {
    value: String,
  },
}
</script>

<style>

</style>
