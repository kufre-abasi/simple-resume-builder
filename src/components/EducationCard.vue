<template>
  <!-- Education -->

  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-col class="pa-0 mx-auto">
        <div class="text-caption">{{ currentData.schoolName }}</div>
        <div class="text-subtitle-2 " style="color:grey">
          {{formatDate(currentData.startDate) }} - {{ formatDate(currentData.endDate)}}

        </div>
      </v-col>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            rounded="0"
            name="school_name"
            label="School"
            id="school_name"
            variant="underlined"
            v-model="currentData.schoolName"
            @input="updateEducation"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            rounded="0"
            name="degree"
            label="Degree"
            id="degree"
            variant="underlined"
            v-model="currentData.degree"
            @input="updateEducation"
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
                @input="updateEducation"
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
                @input="updateEducation"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-text-field
            rounded="0"
            name="location"
            label="Location"
            id="location"
            variant="underlined"
            v-model="currentData.schoolLocation"
            @input="updateEducation"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea
            @input="handleInput"
            v-model="currentData.edDesContent"
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
        >Remove</v-btn>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
import moment from 'moment'
export default {
  props: [
    'id',
    'schoolName',
    'degree',
    'startDate',
    'endDate',
    'schoolLocation',
    'edDescription',
    'edDesContent',
  ],
  emits: ['onRemove', 'onUpdate'],
  data() {
    return {
      minLengthRule: [(v) => v.length >= 50 || 'Min 50 characters'],
      currentData: {
        id: this.id,
        schoolName: this.schoolName,
        startDate: this.startDate,
        endDate: this.endDate,
        degree: this.degree,
        schoolLocation: this.schoolLocation,
        edDescription: this.edDescription,
        edDesContent: this.edDesContent,
      },

      PREV_LENGTH: 0,
    }
  },

  methods: {
    handleInput(event) {
      const bullet = '\u2022'
      const newLength = this.currentData.edDesContent.length

      const characterCode = this.currentData.edDesContent
        .substr(-1)
        .charCodeAt(0)

      if (newLength > this.PREV_LENGTH) {
        if (characterCode === 10) {
          const lines = this.currentData.edDesContent.split('\n')
          const currentLine = lines[lines.length - 1]
          const indentation = this.getIndentation(currentLine)
          this.currentData.edDesContent = `${this.currentData.edDesContent}${indentation}${bullet} `
        } else if (newLength === 1) {
          this.currentData.edDesContent = `${bullet} ${this.currentData.edDesContent}`
        }
      }
      this.currentData.edDescription = this.currentData.edDesContent
        .replace(/• /g, '')
        .replace(/\n/g, '||')
        .split('||')

      this.updateEducation()
      this.PREV_LENGTH = newLength
    },
    getIndentation(line) {
      const match = line.match(/^\s+/)
      return match ? match[0] : ''
    },
    formatDate(val) {
      return moment(val).format('MMMM YYYY')
    },
    updateEducation() {
      // Emit an event to update the resume data in the parent component
      this.$emit('onUpdate', this.currentData)
    },
  },
}
</script>

<style lang="scss" scoped></style>
