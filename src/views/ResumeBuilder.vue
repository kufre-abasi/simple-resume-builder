<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" lg="4">
          <v-card flat>
            <!-- <v-text-field label="Position"> -->

            <!-- </v-text-field> -->
            <form>
              <v-expansion-panels variant="accordion">
                <v-expansion-panel title="PERSONAL INFORMATION">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          rounded="0"
                          name="job_title"
                          label="Job Title"
                          id="job_title"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" md="4">
                        <v-text-field
                          rounded="0"
                          name="first_name"
                          label="First Name"
                          id="first_name"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" md="4">
                        <v-text-field
                          rounded="0"
                          name="middle_name"
                          label="Middle Name (Optional)"
                          id="middle_name"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" md="4">
                        <v-text-field
                          rounded="0"
                          name="last_name"
                          label="Last Name"
                          id="last_name"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="candidate_email"
                          label="Email"
                          id="candidate_email"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="candidate_phone"
                          label="Phone"
                          id="candidate_phone"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="country"
                          label="Country"
                          id="country"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="city"
                          label="City"
                          id="city"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="address"
                          label="Address"
                          id="address"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="postalcode"
                          label="Postal Code"
                          id="postalcode"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="nationality"
                          label="Nationality"
                          id="nationality"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="date_of_birth"
                          label="Date of Birth (Optional)"
                          id="date_of_birth"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="SUMMARY">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <v-textarea
                          variant="underlined"
                          auto-grow
                          label="Summary"
                          rows="4"
                          id="summary"
                          row-height="30"
                          shaped
                          v-model="content"
                          ref="textarea"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="EXPERIENCES">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <!-- Company -->

                        <v-expansion-panels variant="popout">
                          <v-expansion-panel>
                            <v-expansion-panel-title>
                              <v-col class="pa-0 mx-auto">
                                <div class="text-caption">COPMANY</div>
                                <div class="text-subtitle-2">2022 - 2023</div>
                              </v-col>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                              <v-row>
                                <v-col cols="12">
                                  <v-text-field
                                    rounded="0"
                                    name="job_title"
                                    label="Job Title"
                                    id="job_title"
                                    variant="underlined"
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
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                  <v-textarea
                                    @input="handleInput"
                                    v-model="content"
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
                                color="red"
                                flat
                                >Remove</v-btn
                              >
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="EDUCATION">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <!-- Company -->

                        <v-expansion-panels variant="popout">
                          <v-expansion-panel>
                            <v-expansion-panel-title>
                              <v-col class="pa-0 mx-auto">
                                <div class="text-caption">School</div>
                                <div class="text-subtitle-2">2022 - 2023</div>
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
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    rounded="0"
                                    name="degree"
                                    label="Degree"
                                    id="degree"
                                    variant="underlined"
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
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                  <v-textarea
                                    @input="handleInput"
                                    v-model="content"
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
                                color="red"
                                flat
                                >Remove</v-btn
                              >
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="SKILLS">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          rounded="0"
                          name="skill_0"
                          label="Skill_0"
                          id="skill_0"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="CERTIFICATION">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <!-- Company -->

                        <v-expansion-panels variant="popout">
                          <v-expansion-panel>
                            <v-expansion-panel-title>
                              <v-col class="pa-0 mx-auto">
                                <div class="text-caption">Certificate</div>
                                <div class="text-subtitle-2">2022 - 2023</div>
                              </v-col>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                              <v-row>
                                <v-col cols="12">
                                  <v-text-field
                                    rounded="0"
                                    name="cert_name"
                                    label="Name"
                                    id="cert_name"
                                    variant="underlined"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    rounded="0"
                                    name="cert_link"
                                    label="Link"
                                    id="cert_link"
                                    variant="underlined"
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
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                  <v-textarea
                                    @input="handleInput"
                                    v-model="content"
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
                                color="red"
                                flat
                                >Remove</v-btn
                              >
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="LANGUAGES">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          rounded="0"
                          name="language_0"
                          label="Language_0"
                          id="language_0"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="REFERENCES">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <!-- Company -->

                        <v-expansion-panels variant="popout">
                          <v-expansion-panel>
                            <v-expansion-panel-title>
                              <v-col class="pa-0 mx-auto">
                                <div class="text-caption">References Name</div>
                                <div class="text-subtitle-2">Data</div>
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
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    rounded="0"
                                    name="ref_company"
                                    label="Company"
                                    id="ref_company"
                                    variant="underlined"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    rounded="0"
                                    name="ref_email"
                                    label="Email"
                                    id="ref_email"
                                    variant="underlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    rounded="0"
                                    name="ref_phone"
                                    label="Phone"
                                    id="ref_phone"
                                    variant="underlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-btn
                                prepend-icon="mdi:mdi-delete"
                                color="red"
                                flat
                                >Remove</v-btn
                              >
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="SOCIAL LINKS">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <!-- Company -->

                        <v-expansion-panels variant="popout">
                          <v-expansion-panel>
                            <v-expansion-panel-title>
                              <v-col class="pa-0 mx-auto">
                                <div class="text-caption">LinkedIn</div>
                                <div class="text-subtitle-2">Link</div>
                              </v-col>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                              <v-row>
                                <v-col cols="12">
                                  <v-text-field
                                    rounded="0"
                                    name="social_name"
                                    label="Name"
                                    id="social_name"
                                    variant="underlined"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    rounded="0"
                                    name="cert_link"
                                    label="Link"
                                    id="cert_link"
                                    variant="underlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-btn
                                prepend-icon="mdi:mdi-delete"
                                color="red"
                                flat
                                >Remove</v-btn
                              >
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="PORTFOLIO">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <!-- Company -->

                        <v-expansion-panels variant="popout">
                          <v-expansion-panel>
                            <v-expansion-panel-title>
                              <v-col class="pa-0 mx-auto">
                                <div class="text-caption">Name</div>
                                <div class="text-subtitle-2">Link</div>
                              </v-col>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                              <v-row>
                                <v-col cols="12">
                                  <v-text-field
                                    rounded="0"
                                    name="porfolio_name"
                                    label="Name"
                                    id="porfolio_name"
                                    variant="underlined"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    rounded="0"
                                    name="portfolio_link"
                                    label="Link"
                                    id="portfolio_link"
                                    variant="underlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-btn
                                prepend-icon="mdi:mdi-delete"
                                color="red"
                                flat
                                >Remove</v-btn
                              >
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-row class="mt-2 pa-4">
                  <v-btn class="w-100" variant="text"> Add More Section </v-btn>
                </v-row>
              </v-expansion-panels>
            </form>
          </v-card>
        </v-col>
        <v-col cols="12" lg="8" class="d-none d-lg-block">
          <v-row class="bg-grey-darken-2 pa-4" align="center" justify="center">
            <div class="page-document">
              <div class="page-title">Name</div>
              <div class="page-role-title">Director</div>
              <div class="page-subtitle-1">Email | Phone</div>
              <div class="page-subtitle-1">Social</div>
              <div class="page-subtitle-1">Address</div>

              <div class="page-section">
                <div class="page-section-title">
                  Section 1
                  <div class="page-divider"></div>
                  <div class="page-section-content">
                    <div class="page-section-content-title-1">Company</div>
                    <div class="page-section-content-title-1">Company</div>
                  </div>
                  <div class="page-section-content">
                    <div class="page-section-content-title-2">Creative Director and Web/AR/VR Developer</div>
                    <div class="page-section-content-title-2">Company</div>
                  </div>
                
                </div>

                  <div class="page-section-list-group">
                      <ul>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                      </ul>
                  </div>
              </div>

              <div class="page-section">
                <div class="page-section-title">
                  Section 1
                  <div class="page-divider"></div>
                  <div class="page-section-content">
                    <div class="page-section-content-title-1">Company</div>
                    <div class="page-section-content-title-1">Company</div>
                  </div>
                  <div class="page-section-content">
                    <div class="page-section-content-title-2">Company</div>
                    <div class="page-section-content-title-2">Company</div>
                  </div>
                
                </div>

                  <div class="page-section-list-group">
                      <ul>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                      </ul>
                  </div>
              </div>

            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import RichTextEditor from '../components/RichTextEditor.vue'

export default {
  components: {
    RichTextEditor,
  },
  data() {
    return {
      richTextContent: '<p>Initial content</p>',
      content: '',
      PREV_LENGTH: 0,
      minLengthRule: [(v) => v.length >= 255 || 'Min 255 characters'],
    }
  },
  methods: {
    handleInput(event) {
      const bullet = '\u2022'
      const newLength = this.content.length
      const characterCode = this.content.substr(-1).charCodeAt(0)

      if (newLength > this.PREV_LENGTH) {
        if (characterCode === 10) {
          const lines = this.content.split('\n')
          const currentLine = lines[lines.length - 1]
          const indentation = this.getIndentation(currentLine)
          this.content = `${this.content}${indentation}${bullet} `
        } else if (newLength === 1) {
          this.content = `${bullet} ${this.content}`
        }
      }

      this.PREV_LENGTH = newLength
    },
    getIndentation(line) {
      const match = line.match(/^\s+/)
      return match ? match[0] : ''
    },
  },
  watch: {
    content(val) {},
  },
}
</script>

<style lang="css" scoped>
.page-document {
  font-family: Arial, Helvetica, sans-serif !important;
  color: black;
  background-color: white;
  width: 21cm;
  height: 27.9cm;
  padding: 0.5in;
}
.page-title {
  font-weight: bold;
  font-size: 16pt;
  text-align: center;
  margin-bottom: 6pt;
}
.page-role-title {
  font-weight: bold;
  font-size: 12pt;
  text-align: center;
  margin-bottom: 6pt;
}
.page-subtitle-1 {
  font-size: 9pt;
  text-align: center;
  margin-bottom: 6pt;
}
.page-section {
  width: 100%;
  margin-bottom: 16pt;
  align-items: center;
  justify-content: center;
}
.page-section-content {
  display: flex;
  justify-content: space-between;
}
.page-section-content-title-1 {
  font-weight: bold;
  font-size: 10pt;

  margin-bottom: 6pt;
}
.page-section-content-title-2 {
  font-weight: 400;
  font-size: 10pt;
  font-style: italic;
  margin-bottom: 6pt;
}
.page-divider {
  width: 100%;
  background-color: black;
  height: 1pt;
  margin-bottom: 6pt;
}
.page-section-title {
  font-weight: bold;
  font-size: 12pt;
  text-align: center;
  margin: 12pt 0;
}
.page-section-list-group ul , .page-section-list-group ul li{
    font-size: 10pt;

}
.page-section-list-group{
 padding:0 2.5em;

}
.page-list-section{

}
.page-regular-section{
    
}
.page-line-between-section{

}
.page-ref-section{

}
.page-social-section{

}
.page-portfolio-section{
    
}
</style>
