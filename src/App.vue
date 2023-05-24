<template>
  <v-app>
    <Navbar @on-export="exportPDF" />
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {event} from "vue-gtag";
import Error from './components/Error.vue'
import Navbar from './components/Navbar.vue'
import html2pdf from "html2pdf.js";
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
    ...mapGetters(['allHeadlines', 'isLoading', 'error']),
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
      const div = document.createElement('div')

    
      div.style.position = 'relative'

      div.style.padding = '0'
      div.style.margin = '0'
      const cloned = element.cloneNode(true)
      div.innerHTML += element.innerHTML
      var opt = {
        margin: 0.5,
        filename: `${generateHashUniqueID()}_resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      }

      html2pdf().from(div).set(opt).save()

      // event('exportPDF', { method: 'Google' })
    },
  },

  created() {},
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
