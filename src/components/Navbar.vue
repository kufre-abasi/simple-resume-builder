<template>
  <v-app-bar color="white" elevation="0">
    
    <template v-slot:prepend>
      <v-btn v-if="$route.name==='edit.resume'" variant="text" icon="mdi:mdi-arrow-left" @click="$router.back()"></v-btn>
      <v-btn class="pa-0 h-auto" variant="text" :to="{name:'home'}" color="white">
        <v-img src="icon.png" class="pa-5 mr-2" />
        <v-img src="logo_text.png" class="pa-10" />
      </v-btn>
      
    </template>
    <!-- 
    <v-app-bar-title>
        Resume
    </v-app-bar-title> -->

    <template v-if="$route.name==='edit.resume'" v-slot:append>
      <v-btn @click="$emit('onExport')" v-if="!isMobile()"  prepend-icon="mdi:mdi-file-download" size="large" variant="text">
        <span>Download PDF</span>
      </v-btn>

      <v-btn @click="$emit('onExport')" v-else  icon="mdi:mdi-printer-eye"   variant="text">
       
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
 import { useDisplay } from 'vuetify'
export default {
  emits: ['onExport'],
  methods:{
    isMobile(){
     
      return this.$vuetify.display.mobile;

    }
  },
  
 

}
</script>

<style lang="scss" scoped></style>
