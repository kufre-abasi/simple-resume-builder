<template>
    <v-app-bar
    color="white"
    elevation="0"
  >
    <template v-slot:prepend>
        <v-img src="icon.png" class="pa-5 mr-2"/>
        <v-img src="logo_text.png" class="pa-10"/>

    
    </template>
<!-- 
    <v-app-bar-title>
        Resume
    </v-app-bar-title> -->

    <template v-slot:append>
      <v-btn icon="mdi:mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>

</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>