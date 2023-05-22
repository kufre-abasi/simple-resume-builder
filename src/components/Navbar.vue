<template>
    <v-app-bar
    color="white"
    elevation="0"
  >
    <template v-slot:prepend>
        <img src="icon.png" style="height: 100%;padding:0.5em" />
        <img src="logo_text.png" style="height: 50%;padding:0.5em" />

    
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