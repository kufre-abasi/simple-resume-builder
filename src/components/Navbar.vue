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
      <v-btn icon="mdi:mdi-printer-eye" @click="$emit('onExport')"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  emits: ['onExport'],
  
}
</script>

<style lang="scss" scoped></style>
