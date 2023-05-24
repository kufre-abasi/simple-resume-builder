<template>
  <!-- Education -->

  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-col class="pa-0 mx-auto">
        <div class="text-caption">{{ currentData.name }}</div>
        <div class="text-subtitle-2">{{ currentData.employer }}</div>
      </v-col>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            rounded="0"
            name="ref_name"
            label="Full Name"
            id="ref_name"
            variant="underlined"
            v-model="currentData.name"
            @input="update"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            rounded="0"
            name="ref_company"
            label="Company"
            id="ref_company"
            variant="underlined"
            v-model="currentData.employer"
            @input="update"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            rounded="0"
            name="ref_email"
            label="Email"
            id="ref_email"
            variant="underlined"
            v-model="currentData.email"
            @input="update"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-text-field
            type="tel"
            rounded="0"
            name="ref_phone"
            label="Phone"
            id="ref_phone"
            variant="underlined"
            v-model="currentData.phone"
            @input="update"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        prepend-icon="mdi:mdi-delete"
        color="grey"
        variant="text"
        @click="$emit('onRemove', id)"
        >Remove</v-btn
      >
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
import moment from 'moment'
export default {
  props: ['id', 'name', 'empolyer', 'email', 'phone'],
  emits: ['onRemove', 'onUpdate'],
  data() {
    return {
      minLengthRule: [(v) => v.length >= 50 || 'Min 50 characters'],
      currentData: {
        id: this.id,
        name: this.name,
        employer: this.employer,
        email: this.email,
        phone: this.phone,
      },

      PREV_LENGTH: 0,
    }
  },

  methods: {
    update() {
      // Emit an event to update the resume data in the parent component
      this.$emit('onUpdate', this.currentData)
    },
  },
}
</script>

<style lang="scss" scoped></style>
