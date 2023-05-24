<template>
  <v-row align="center">
    <v-col cols="12" sm="5" md="5" lg="5">
      <v-text-field
        rounded="0"
        :name="label1 + '[' + id + ']'"
        :placeholder="label1"
        :id="label1 + '[' + id + ']'"
        variant="underlined"
        v-model="currentData.value1"
        @input="update"
        class="mr-2"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="5" md="5" lg="5">
      <v-text-field
        rounded="0"
        :name="label2 + '[' + id + ']'"
        :placeholder="label2"
        :id="label2 + '[' + id + ']'"
        variant="underlined"
        v-model="currentData.value2"
        @input="update"
        class="mr-2"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="2" md="2" lg="2">
      <v-btn
        rounded="lg"
        icon="mdi:mdi-delete"
        color="grey"
        variant="text"
        @click="$emit('onRemove', id)"
      ></v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['id', 'value1', 'value2', 'label1', 'label2'],
  emits: ['onRemove', 'onUpdate'],

  methods: {
    update() {
      // Emit an event to update the resume data in the parent component
      this.$emit('onUpdate', this.currentData)
    },
  },
  data() {
    return {
      currentData: {
        id: this.id,
        value1: this.value1,
        value2: this.value2,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
