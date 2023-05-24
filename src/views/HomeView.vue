<template>
  <v-main>
    <v-row class="pa-4 pa-lg-4 pa-md-4 pa-sm-4 bg-grey-lighten-3" style="height:100%">
      <v-container > 
        <v-row align="center" justify="center" style="height:100%">
          <v-col cols="10" lg="6" md="8">
            <v-card  elevation="0" class="bg-grey-lighten-3 text-center">
              <v-card-title class="text-h5 text-wrap">
                "Unlock Your Career Potential"
              </v-card-title>
              <v-card-text  class="text-pre-wrap">
                
                Transform Your Job Prospects: Create a Compelling Resume with our Simple and Strong Resume Builder. 
                Take Charge of Your Future Today and Get Noticed with our Simple and Strong Resume Builder
              </v-card-text>

              <v-card-actions class="pt-0 flex-column" >
                
                    <v-btn prepend-icon="mdi:mdi-auto-fix"  class="bg-black pa-4 ma-2" size="x-large" variant="flat"  :to="{
                        name:'edit.resume'
                    }">
                        New Resume
                    </v-btn>
                    <v-btn  prepend-icon="mdi:mdi-lightbulb-on-outline" class="bg-black pa-4" size="x-large" target="_blank" href="https://hwpi.harvard.edu/files/ocs/files/hes-resume-cover-letter-guide.pdf"  variant="flat" >
                        Tips
                    </v-btn>
               
              </v-card-actions>
              <v-card-subtitle  class="text-pre-wrap">
                Notes: This webstie doesn't collect about any personal information but analytics information will be collected for using this webstie.
                You can use freely for your own purposes.
                If you want to suggest anything for this website, click the link below.
               <a href=" https://github.com/lolvOid/simple-resume-builder" target="_blank">Link</a>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        
      </v-container>
    </v-row>
   
  </v-main>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {},
}
</script>
