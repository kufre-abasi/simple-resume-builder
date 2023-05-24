<template>
  <v-app>
    <Navbar @on-export="exportPDF" />
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { event } from 'vue-gtag'
import Error from './components/Error.vue'
import Navbar from './components/Navbar.vue'
import html2pdf from 'html2pdf.js'
import { generateHashUniqueID } from './helpers'

export default {
  name: 'App',

  components: {
    Navbar,
    Error,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isLoading', 'error']),
    hasError() {
      return this.error != ''
    },
    headlines() {
      if (this.sources) {
        return this.allHeadlines.filter((h) => h.source.id === this.sources)
      }
      return this.allHeadlines
    },
    errorMessage() {
      return this.error
    },
    needLoading() {
      return this.isLoading
    },
  },
  methods: {
    exportPDF() {
      var element = document.getElementById('document_page')
      var container = document.createElement('div')
      container.style.width = '100%'
      container.style.display = 'flex'
      container.style.justifyContent = 'center'
      container.appendChild(element.cloneNode(true))

      var opt = {
        margin: 0.5,
        filename: `${generateHashUniqueID()}_resume.pdf`,
        image: { type: 'jpeg', quality:1 },
        html2canvas: {
          letterRendering: true,
          useCORS: true,
          logging: true,
          scale: 2,
        },
        pagebreak: { mode: 'css' },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      }

      html2pdf().from(container).set(opt).save()
      event('exportPDF', { method: 'Google' })
    },
  },

  created() {
    event('index', { method: 'Google' })


  },
  watch: {
    searchQuery(val) {
      this.highLightText = val.q != ' ' ? val.q : ''
    },
    $route: {
      handler(route) {},
      immediate: true,
    },
  },
}
</script>
