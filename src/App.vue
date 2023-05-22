<template>
  <v-app>
      <Navbar/>
       <router-view ></router-view>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Error from './components/Error.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  
  components: {
    Navbar,
    Error,
    
  },
  data() {
    return {
     
    }
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
   
  },

  created() {
    
    
  },
  watch: {
    searchQuery(val) {
      this.highLightText = val.q != ' ' ? val.q : ''
    },
    $route: {
      handler(route) {
      
      },
      immediate: true,
    },
  },
}
</script>
