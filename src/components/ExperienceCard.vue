<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-col class="pa-0 mx-auto">
        <div class="text-caption">{{ currentData.companyName }}</div>
        <div class="text-subtitle-2 " style="color:grey">
          {{formatDate(currentData.startDate) }} - {{ formatDate(currentData.endDate)}}

        </div>
      </v-col>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            rounded="0"
            :name="'employer_name[' + id + ']'"
            label="Employer"
            :id="'employer_name[' + id + ']'"
            variant="underlined"
            v-model="currentData.companyName"
            @input="updateExperience"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            rounded="0"
            :name="'job_title[' + id + ']'"
            label="Job Title"
            :id="'job_title[' + id + ']'"
            variant="underlined"
            v-model="currentData.jobTitle"
            @input="updateExperience"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                type="date"
                rounded="0"
                :name="'start_date[' + id + ']'"
                label="Start"
                :id="'start_date[' + id + ']'"
                variant="underlined"
                v-model="currentData.startDate"
                @input="updateExperience"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                type="date"
                rounded="0"
                :name="'end_date[' + id + ']'"
                label="End"
                :id="'end_date[' + id + ']'"
                variant="underlined"
                v-model="currentData.endDate"
                @input="updateExperience"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-text-field
            rounded="0"
            :name="'employer_location[' + id + ']'"
            label="Location"
            :id="'employer_location[' + id + ']'"
            variant="underlined"
            v-model="currentData.companyLocation"
            @input="updateExperience"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea
            @input="handleInput"
            v-model="currentData.jobDesContent"
            variant="underlined"
            auto-grow
            label="Description"
            rows="10"
            :id="'description[' + id + ']'"
            row-height="30"
            shaped
            counter
            :rules="minLengthRule"
            style="word-break: break-all"
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
    'companyName',
    'startDate',
    'endDate',
    'jobTitle',
    'companyLocation',
    'jobDescription',
    'jobDesContent',
  ],
  emits: ['onRemove', 'onUpdate'],
  data() {
    return {
      minLengthRule: [(v) => v.length >= 255 || 'Min 255 characters'],
      currentData: {
        id: this.id,
        companyName: this.companyName,
        startDate: this.startDate,
        endDate: this.endDate,
        jobTitle: this.jobTitle,
        companyLocation: this.companyLocation,
        jobDescription: this.jobDescription,
        jobDesContent: this.jobDesContent,
      },

      PREV_LENGTH: 0,
    }
  },

  methods: {
    handleInput(event) {
      const bullet = '\u2022'
      const newLength = this.currentData.jobDesContent.length

      const characterCode = this.currentData.jobDesContent
        .substr(-1)
        .charCodeAt(0)

      if (newLength > this.PREV_LENGTH) {
        if (characterCode === 10) {
          const lines = this.currentData.jobDesContent.split('\n')
          const currentLine = lines[lines.length - 1]
          const indentation = this.getIndentation(currentLine)
          this.currentData.jobDesContent = `${this.currentData.jobDesContent}${indentation}${bullet} `
        } else if (newLength === 1) {
          this.currentData.jobDesContent = `${bullet} ${this.currentData.jobDesContent}`
        }
      }
      this.currentData.jobDescription = this.currentData.jobDesContent.replace(/• /g, '').replace(/\n/g, '||').split("||");
  


      this.updateExperience()
      this.PREV_LENGTH = newLength
    },
    getIndentation(line) {
      const match = line.match(/^\s+/)
      return match ? match[0] : ''
    },
    formatDate(val) {
      return moment(val).format('MMMM YYYY')
    },
    updateExperience() {
      // Emit an event to update the resume data in the parent component
      this.$emit('onUpdate', this.currentData)
    },
  },
}
</script>

<style lang="scss" scoped></style>
