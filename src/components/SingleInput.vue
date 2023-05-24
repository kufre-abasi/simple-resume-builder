<template>
  <v-row align="center" class="mt-2"> 
    <v-text-field
    rounded="0"
    :name="label + '[' + id + ']'"
    :placeholder="label"
    :id="label + '[' + id + ']'"
    variant="underlined"
    v-model="currentData.value"
    @input="update"
    class="mr-2"
  ></v-text-field>
  <v-btn
    rounded="lg"
    icon="mdi:mdi-delete"
    color="grey"
    variant="text"
    @click="$emit('onRemove', id)"
  ></v-btn>
  </v-row>
  
</template>

<script>
export default {
  props: ['id', 'value','label'],
  emits: ['onRemove', 'onUpdate'],

  methods: {
    update() {
      // Emit an event to update the resume data in the parent component
      this.$emit('onUpdate', this.currentData)
    },
  },
  data() {
    return {
      currentData:{
        id: this.id,
        value: this.value,
      }
      
    }
  },
}
</script>

<style lang="scss" scoped></style>
