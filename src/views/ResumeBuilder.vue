<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6">
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
                          v-model="resume.personalInfo.jobTitle"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" md="4">
                        <v-text-field
                          rounded="0"
                          name="first_name"
                          label="First Name"
                          id="first_name"
                          variant="underlined"
                          v-model="resume.personalInfo.firstname"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" md="4">
                        <v-text-field
                          rounded="0"
                          name="middle_name"
                          label="Middle Name (Optional)"
                          id="middle_name"
                          variant="underlined"
                          v-model="resume.personalInfo.middlename"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" md="4">
                        <v-text-field
                          rounded="0"
                          name="last_name"
                          label="Last Name"
                          id="last_name"
                          variant="underlined"
                          v-model="resume.personalInfo.lastname"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="resume_email"
                          label="Email"
                          id="resume_email"
                          variant="underlined"
                          v-model="resume.personalInfo.email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="resume_phone"
                          label="Phone"
                          id="resume_phone"
                          variant="underlined"
                          v-model="resume.personalInfo.phone"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="country"
                          label="Country"
                          id="country"
                          variant="underlined"
                          v-model="resume.personalInfo.country"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="city"
                          label="City"
                          id="city"
                          variant="underlined"
                          v-model="resume.personalInfo.city"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="address"
                          label="Address"
                          id="address"
                          variant="underlined"
                          v-model="resume.personalInfo.address"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="postalcode"
                          label="Postal Code"
                          id="postalcode"
                          variant="underlined"
                          v-model="resume.personalInfo.postalCode"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          rounded="0"
                          name="nationality"
                          label="Nationality"
                          id="nationality"
                          variant="underlined"
                          v-model="resume.personalInfo.nationality"
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
                          label="Subject"
                          rows="4"
                          id="summary"
                          row-height="30"
                          shaped
                          v-model="resume.summary"
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
                        <v-expansion-panels
                          variant="popout"
                          v-model="expPanels"
                        >
                          <ExperienceCard
                            v-for="experience in resume.experiences"
                            :key="experience.id"
                            :id="experience.id"
                            :company-name="experience.companyName"
                            :start-date="experience.startDate"
                            :end-date="experience.endDate"
                            :job-title="experience.jobTitle"
                            :company-location="experience.companyLocation"
                            :job-description="experience.jobDescription"
                            :job-des-content="experience.jobDesContent"
                            @on-remove="removeExperience"
                            @on-update="updateExperience"
                            v-bind="experience"
                          />
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                        @click="addExperience"
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
                        <v-expansion-panels variant="popout" v-model="edPanels">
                          <EducationCard
                            v-for="education in resume.educations"
                            :key="education.id"
                            :id="education.id"
                            :school-name="education.schoolName"
                            :degree="education.degree"
                            :start-date="education.startDate"
                            :end-date="education.endDate"
                            :school-location="education.schoolLocation"
                            :job-description="education.edDescription"
                            :job-des-content="education.edDesContent"
                            @on-remove="removeEducation"
                            @on-update="updateEducation"
                            v-bind="education"
                          />
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                        @click="addEducation"
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
                        <div v-for="skill in resume.skills">
                          <SingleInput
                            :id="skill.id"
                            :value="skill.name"
                            label="Skill"
                            @on-remove="removeSkills"
                            @on-update="updateSkills"
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
                        @click="addSkills"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="CERTIFICATIONS">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <v-expansion-panels
                          variant="popout"
                          v-model="certPanels"
                        >
                          <CertificateCard
                            v-for="certificate in resume.certificates"
                            :key="certificate.id"
                            :id="certificate.id"
                            :cert-name="certificate.certName"
                            :link="certificate.link"
                            :start-date="certificate.startDate"
                            :end-date="certificate.endDate"
                            :cert-description="certificate.edDescription"
                            :cert-des-content="certificate.edDesContent"
                            @on-remove="removeCertificates"
                            @on-update="updateCertificates"
                            v-bind="certificate"
                          />
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                        @click="addCertificates"
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
                        <div v-for="language in resume.languages">
                          <SingleInput
                            :id="language.id"
                            :value="language.name"
                            label="Language"
                            @on-remove="removeLanguages"
                            @on-update="updateLanguages"
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
                        @click="addLanguages"
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
                        <v-expansion-panels
                          variant="popout"
                          v-model="refPanels"
                        >
                          <References
                            v-for="reference in resume.references"
                            :key="reference.id"
                            :id="reference.id"
                            :name="reference.name"
                            :email="reference.email"
                            :phone="reference.phone"
                            @on-remove="removeReferences"
                            @on-update="updateReferences"
                            v-bind="reference"
                          />
                        </v-expansion-panels>
                      </v-col>
                      <v-btn
                        prepend-icon="mdi:mdi-plus-thick"
                        size="small"
                        variant="text"
                        rounded="0"
                        width="100%"
                        class="justify-center"
                        @click="addReferences"
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
                        <div v-for="sl in resume.socialLinks">
                          <DoubleInput
                            :id="sl.id"
                            @on-remove="removeSoicalLinks"
                            @on-update="updateSoicalLinks"
                            label1="Title"
                            label2="Link"
                            :value1="sl.value1"
                            :value2="sl.value2"
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
                        @click="addSoicalLinks"
                      >
                        Add More
                      </v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="PORTFOLIOS">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <div v-for="p in resume.portfolios">
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
        <v-col cols="12" lg="6" class="d-none d-lg-block">
          <v-row class="bg-grey-darken-2 pa-4" align="center" justify="center">
            <div class="page-document">
              <div class="page-title">
                {{
                  resume.personalInfo.firstname +
                  ' ' +
                  resume.personalInfo.middlename +
                  ' ' +
                  resume.personalInfo.lastname
                }}
              </div>
              <div class="page-role-title">
                {{ resume.personalInfo.jobTitle }}
              </div>
              <div class="page-subtitle-1">
                <a
                  style="text-decoration: none; color: black"
                  :href="'mailto:' + resume.personalInfo.email"
                  >{{ resume.personalInfo.email }}</a
                >
                |
                <a
                  style="text-decoration: none; color: black"
                  :href="'tel:' + resume.personalInfo.phone"
                  >{{ resume.personalInfo.phone }}</a
                >
              </div>
              <div
                class="page-subtitle-1"
                v-if="resume.personalInfo.nationality"
              >
                {{ resume.personalInfo.nationality }}
              </div>
              <div class="page-subtitle-1">Social</div>
              <div class="page-subtitle-1">
                {{
                  resume.personalInfo.address
                    ? resume.personalInfo.address + ','
                    : ''
                }}{{
                  resume.personalInfo.city
                    ? resume.personalInfo.city + ','
                    : ''
                }}{{
                  resume.personalInfo.postalCode
                    ? resume.personalInfo.postalCode + ','
                    : ''
                }}{{
                  resume.personalInfo.country ? resume.personalInfo.country : ''
                }}
              </div>
              <!-- Summary -->
              <div class="page-section" v-if="resume.summary">
                <div class="page-section-title">
                  Summary
                  <div class="page-divider"></div>
                </div>

                <div class="page-section-child">
                  <div class="page-summary-text">
                    {{ resume.summary }}
                  </div>
                </div>
              </div>
              <!-- Experiences -->
              <div class="page-section">
                <div class="page-section-title">
                  EXPERIENCES
                  <div class="page-divider"></div>
                  <div
                    class="page-sub-section"
                    v-for="experience in resume.experiences"
                    :key="experience.id"
                  >
                    <div class="page-section-content">
                      <div class="page-section-content-title-1">
                        {{ experience.companyName }}
                      </div>
                      <div class="page-section-content-title-1">
                        {{ experience.companyLocation }}
                      </div>
                    </div>
                    <div class="page-section-content">
                      <div class="page-section-content-title-2">
                        {{ experience.jobTitle }}
                      </div>
                      <div class="page-section-content-title-3">
                        {{ formatDate(experience.startDate) }} -
                        {{ formatDate(experience.endDate) }}
                      </div>
                    </div>

                    <div class="page-section-list-group">
                      <ul>
                        <li v-for="e in experience.jobDescription">
                          {{ e }}
                        </li>
                        <!-- <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li> -->
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Education -->
              <div class="page-section">
                <div class="page-section-title">
                  EDUCATION
                  <div class="page-divider"></div>
                  <div
                    class="page-sub-section"
                    v-for="education in resume.educations"
                    :key="education.id"
                  >
                    <div class="page-section-content">
                      <div class="page-section-content-title-1">
                        {{ education.schoolName }}
                      </div>
                      <div class="page-section-content-title-1">
                        {{ education.schoolLocation }}
                      </div>
                    </div>
                    <div class="page-section-content">
                      <div class="page-section-content-title-2">
                        {{ education.degree }}
                      </div>
                      <div class="page-section-content-title-3">
                        {{ formatDate(education.startDate) }} -
                        {{ formatDate(education.endDate) }}
                      </div>
                    </div>

                    <div class="page-section-list-group">
                      <!-- {{ education.jobDescription }} -->
                      <ul>
                        <li v-for="e in education.edDescription">
                          {{ e }}
                        </li>
                        <!-- <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li>
                        <li>Dolore cupidatat aliquip consequat sit.</li> -->
                      </ul>
                    </div>
                  </div>
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
import EducationCard from '../components/EducationCard.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import RichTextEditor from '../components/RichTextEditor.vue'
import SingleInput from '../components/SingleInput.vue'
import DoubleInput from '../components/DoubleInput.vue'
import CertificateCard from '../components/CertificateCard.vue'
import References from '../components/References.vue'
import { generateHashUniqueID } from '../helpers'
import moment from 'moment'

export default {
  components: {
    ExperienceCard,
    EducationCard,
    RichTextEditor,
    SingleInput,
    DoubleInput,
    CertificateCard,
    References,
  },
  data() {
    return {
      expPanels: 0,
      edPanels: 0,
      skPanels: 0,
      langPanels: 0,
      refPanels: 0,
      portPanels: 0,
      certPanels: 0,
      resume: {
        summary: '',
        personalInfo: {
          firstname: 'First Name',
          middlename: '',
          lastname: 'Last Name',
          email: 'user@example.com',
          phone: '+66123456789',
          jobTitle: 'Manager',
          nationality: '',
          address: '1A,20-Home',
          country: 'Thailand',
          city: 'Bangkok',
          postalCode: '10110',
          dateOfBirth: '20-22-100',
        },
        educations: [],
        experiences: [],
        skills: [],
        certificates: [],
        languages: [],
        socialLinks: [],
        references: [],
        portfolios: [],
        sections: [],
      },
    }
  },
  watch: {
    expPanels(val) {
      console.log(val)
    },
  },
  methods: {
    formatDate(val) {
      return moment(val).format('MMMM YYYY')
    },
    addSkills() {
      const id = generateHashUniqueID()
      this.resume.skills.push({
        id: id,
        name: 'Skill',
      })
    },
    removeSkills(id) {
      const current = this.resume.skills.findIndex((e) => e.id == id)
      this.resume.skills.splice(current, 1)
    },
    updateSkills(newData) {
      const index = this.resume.skills.findIndex((e) => e.id === newData.id)
      if (index !== -1) {
        this.resume.skills[index] = newData
      }
    },
    addLanguages() {
      const id = generateHashUniqueID()
      this.resume.languages.push({
        id: id,
        name: 'Language',
      })
    },
    removeLanguages(id) {
      const current = this.resume.languages.findIndex((e) => e.id == id)
      this.resume.languages.splice(current, 1)
    },
    updateLanguages(newData) {
      const index = this.resume.languages.findIndex((e) => e.id === newData.id)
      if (index !== -1) {
        this.resume.languages[index] = newData
      }
    },
    addCertificates() {
      const id = generateHashUniqueID()
      this.resume.certificates.push({
        id: id,
        certName: 'Title',
        link: 'url',
        startDate: moment().format('DD-MM-YYYY'),
        endDate: moment().format('DD-MM-YYYY'),
        certDescription: [],
        certDesContent: '',
      })
      this.certPanels = this.resume.certificates.findIndex((e) => e.id === id)
    },
    removeCertificates(id) {
      const current = this.resume.certificates.findIndex((e) => e.id == id)
      this.resume.certificates.splice(current, 1)
    },
    updateCertificates(newData) {
      const index = this.resume.certificates.findIndex(
        (e) => e.id === newData.id
      )
      if (index !== -1) {
        this.resume.certificates[index] = newData
      }
    },
    addReferences() {
      const id = generateHashUniqueID()
      this.resume.references.push({
        id: id,
        name: 'Fullname',
        employer: 'Employer',
        email: 'name@employer.com',
        phone: '+12435668998',
      })
      this.refPanels = this.resume.references.findIndex((e) => e.id === id)
    },
    removeReferences(id) {
      const current = this.resume.references.findIndex((e) => e.id == id)
      this.resume.references.splice(current, 1)
    },
    updateReferences(newData) {
      const index = this.resume.references.findIndex((e) => e.id === newData.id)
      if (index !== -1) {
        this.resume.references[index] = newData
      }
    },
    addSoicalLinks() {
      const id = generateHashUniqueID()
      this.resume.socialLinks.push({
        id: id,
        value1: 'Name',
        value2: 'Link',
      })
    },
    removeSoicalLinks(id) {
      const current = this.resume.socialLinks.findIndex((e) => e.id == id)
      this.resume.socialLinks.splice(current, 1)
    },
    updateSoicalLinks(newData) {
      const index = this.resume.socialLinks.findIndex(
        (e) => e.id === newData.id
      )
      if (index !== -1) {
        this.resume.socialLinks[index] = newData
      }
    },
    addPortfolios() {
      const id = generateHashUniqueID()
      this.resume.portfolios.push({
        id: id,
        value1: 'Name',
        value2: 'Link',
      })
    },
    removePortfolios(id) {
      const current = this.resume.portfolios.findIndex((e) => e.id == id)
      this.resume.portfolios.splice(current, 1)
    },
    updatePortfolios(newData) {
      const index = this.resume.portfolios.findIndex((e) => e.id === newData.id)
      if (index !== -1) {
        this.resume.portfolios[index] = newData
      }
    },
    addEducation() {
      const id = generateHashUniqueID()
      this.resume.educations.push({
        id: id,
        schoolName: 'School Name',
        degree: 'Degree or Subject',
        edDescription: [],
        edDesContent: '',
        startDate: moment().format('DD-MM-YYYY'),
        endDate: moment().format('DD-MM-YYYY'),
        schoolLocation: 'Location',
      })
      this.edPanels = this.resume.educations.findIndex((e) => e.id === id)
    },
    removeEducation(id) {
      const current = this.resume.educations.findIndex((e) => e.id == id)
      this.resume.educations.splice(current, 1)
    },
    updateEducation(newData) {
      const index = this.resume.educations.findIndex((e) => e.id === newData.id)
      if (index !== -1) {
        this.resume.educations[index] = newData
      }
    },
    addExperience() {
      const id = generateHashUniqueID()
      this.resume.experiences.push({
        id: id,
        companyName: 'Employer',
        jobTitle: 'Job Title',
        jobDescription: [],
        jobDesContent: '',
        startDate: moment().format('DD-MM-YYYY'),
        endDate: moment().format('DD-MM-YYYY'),
        companyLocation: 'Location',
      })
      this.expPanels = this.resume.experiences.findIndex((e) => e.id === id)
    },
    removeExperience(id) {
      const current = this.resume.experiences.findIndex((e) => e.id == id)
      this.resume.experiences.splice(current, 1)
    },
    updateExperience(newData) {
      const index = this.resume.experiences.findIndex(
        (e) => e.id === newData.id
      )

      if (index !== -1) {
        this.resume.experiences[index] = newData
      }
    },
  },

  created() {
    this.addExperience()
    this.addEducation()
    this.addCertificates()
    this.addCertificates()
  },
}
</script>

<style lang="css" scoped>
.page-document {
  font-family: Arial, sans-serif !important;
  color: black;
  background-color: white;
  width: 21cm;
  height: 27.9cm;
  padding: 0.5in;
}

.page-title {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 8px;
}

.page-role-title {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin-bottom: 8px;
}

.page-subtitle-1 {
  font-size: 12px;
  text-align: center;
  margin-bottom: 8px;
}

.page-section {
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
}

.page-sub-section {
  margin-bottom: 2em;
}

.page-section-content {
  display: flex;
  justify-content: space-between;
}

.page-section-content-title-1 {
  font-weight: bold;
  font-size: 12px;

  margin-bottom: 8px;
}

.page-section-content-title-2 {
  font-weight: 400;
  font-size: 12px;
  font-style: italic;
  margin-bottom: 8px;
}

.page-section-content-title-3 {
  font-weight: 400;
  font-size: 12px;

  margin-bottom: 8px;
}

.page-divider {
  width: 100%;
  background-color: black;
  height: 1.33px;
  margin-bottom: 8px;
}

.page-section-title {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin: 16px 0;
}

.page-summary-text {
  padding: 0;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 8px;
}

.page-section-list-group ul {
}

.page-section-list-group ul,
.page-section-list-group ul li {
  font-weight: 500;
  text-align: left;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.page-section-child {
  line-break: normal;
  word-break: break-all;
  padding: 0 0;
}

.page-section-list-group {
  line-break: normal;
  word-break: break-all;
  padding: 0 2.5em;
}

.page-list-section {
}

.page-regular-section {
}

.page-line-between-section {
}

.page-ref-section {
}

.page-social-section {
}

.page-portfolio-section {
}
</style>
