<template>
  <!-- Education -->

  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-col class="pa-0 mx-auto">
        <div class="text-caption">{{ currentData.certName }}</div>
        <div class="text-subtitle-2" style="color: grey">
          {{ formatDate(currentData.startDate) }} -
          {{ formatDate(currentData.endDate) }}
        </div>
      </v-col>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            rounded="0"
            name="title"
            label="Title"
            id="title"
            variant="underlined"
            v-model="currentData.certName"
            @input="updateCertificate"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            rounded="0"
            name="url"
            label="Link"
            id="url"
            variant="underlined"
            v-model="currentData.link"
            @input="updateCertificate"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                type="date"
                rounded="0"
                name="start_date"
                label="Start"
                id="start_date"
                variant="underlined"
                v-model="currentData.startDate"
                @input="updateCertificate"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                type="date"
                rounded="0"
                name="end_date"
                label="End"
                id="end_date"
                variant="underlined"
                v-model="currentData.endDate"
                @input="updateCertificate"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
    

        <v-col cols="12">
          <v-textarea
            @input="handleInput"
            v-model="currentData.certDesContent"
            variant="underlined"
            auto-grow
            label="Description"
            rows="10"
            id="description"
            row-height="30"
            shaped
            counter
            :rules="minLengthRule"
          ></v-textarea>
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
  props: [
    'id',
    'certName',
    'link',
    'startDate',
    'endDate',
    'certDescription',
    'certDesContent',
  ],
  emits: ['onRemove', 'onUpdate'],
  data() {
    return {
      minLengthRule: [(v) => v.length >= 50 || 'Min 50 characters'],
      currentData: {
        id: this.id,
        certName: this.certName,
        startDate: this.startDate,
        endDate: this.endDate,
        link: this.link,

        certDescription: this.certDescription,
        certDesContent: this.certDesContent,
      },

      PREV_LENGTH: 0,
    }
  },

  methods: {
    handleInput(event) {
      const bullet = '\u2022'
      const newLength = this.currentData.certDesContent.length

      const characterCode = this.currentData.certDesContent
        .substr(-1)
        .charCodeAt(0)

      if (newLength > this.PREV_LENGTH) {
        if (characterCode === 10) {
          const lines = this.currentData.certDesContent.split('\n')
          const currentLine = lines[lines.length - 1]
          const indentation = this.getIndentation(currentLine)
          this.currentData.certDesContent = `${this.currentData.certDesContent}${indentation}${bullet} `
        } else if (newLength === 1) {
          this.currentData.certDesContent = `${bullet} ${this.currentData.certDesContent}`
        }
      }
      this.currentData.certDescription = this.currentData.certDesContent
        .replace(/• /g, '')
        .replace(/\n/g, '~~~')
        .split('~~~')

      this.updateCertificate()
      this.PREV_LENGTH = newLength
    },
    getIndentation(line) {
      const match = line.match(/^\s+/)
      return match ? match[0] : ''
    },
    formatDate(val) {
      return moment(val).format('MMMM YYYY')
    },
    updateCertificate() {
      // Emit an event to update the resume data in the parent component
      this.$emit('onUpdate', this.currentData)
    },
  },
}
</script>

<style lang="scss" scoped></style>
