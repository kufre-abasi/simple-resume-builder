<template>
  <v-expansion-panel >
    <v-expansion-panel-title>
      <v-text-field
        name="name"
        class="pa-0"
        id="id"
        variant="flat"
      ></v-text-field>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <!-- <v-col cols="12"> -->
        <!-- <div v-for="p in resume.portfolios">
            <DoubleInput
              :id="p.id"
              @on-remove="removePortfolios"
              @on-update="updatePortfolios"
              label1="Title"
              label2="Link"
              :value1="p.value1"
              :value2="p.value2"
            />
          </div>
        </v-col>
        <v-btn
          prepend-icon="mdi:mdi-plus-thick"
          size="small"
          variant="text"
          rounded="0"
          width="100%"
          class="justify-center"
          @click="addPortfolios"
        >
          Add More
        </v-btn> -->
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
import DoubleInput from './DoubleInput.vue'
export default {
  components: DoubleInput,
  props: ['section'],
  data() {
    return {
      sectionId:this.section.id,
      sectionTitle:this.section.title
    }
  },
  created() {},
  // methods: {
  //   sections:this.sections,
  //   section:{
  //       title:'Title',
  //       description:'Description',
  //       childSections:[],
  //       onAdd:()=>{

  //       },
  //       onRemove:()=>{

  //       },
  //       onUpdate:()=>{

  //       }
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.v-field__input{
  padding: 0 !important;
}
</style>
