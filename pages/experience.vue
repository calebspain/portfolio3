<template>
  <v-container>
    <v-row class="px-4">
      <v-col cols="12">
        <h1 style="letter-spacing:4px" class="text-center mb-10">Experience</h1>
      </v-col>
      <v-col cols="12">
        <div class="mb-10">
          <div class="d-flex justify-space-between align-end">
            <div>
              <h3>
                Imagine Fertility
                <span class="d-inline desktop">-</span>
                <span class="font-weight-light d-inline desktop">Software Developer</span>
              </h3>
            </div>
            <h4 class="font-weight-light desktop">May 2019 - Present</h4>
          </div>
          <hr class="my-2" />
          <ul>
            <li>Utilized Google Maps API to build out a UI which allows patients to find and contact their preferred clinic.</li>
            <li>Created a 3rd party module which allows donor and 3rd party reproductive staff to manage the entire cycle without the need of multiple spreadsheets and sticky notes. (HTML, CSS, Bootstrap, JavaScript, jQuery, SQL, MariaDB, and PHP)</li>
            <li>Developed multiple features which sent out documents for patients to sign through the use of DocuSign’s eSignature REST API.</li>
            <li>Began migrating the Imagine Patient Relationship Manager to a new technology stack. (Git/GitHub, Material-UI, React, Sequelize, Node.js, Express, and Google Cloud)</li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-4">
      <v-col cols="12">
        <div class="mb-10">
          <div class="d-flex justify-space-between align-end">
            <div>
              <h3>
                Nan and Company Properties
                <span class="d-inline desktop">-</span>
                <span class="font-weight-light d-inline desktop">Web Developer</span>
              </h3>
            </div>
            <h4 class="font-weight-light desktop">November 2018 - May</h4>
          </div>
          <hr class="my-2" />
          <ul>
            <li>Created responsive and interactive web pages using multiple front-end technologies, such as HTML, CSS, JavaScript, jQuery, and Bootstrap.</li>
            <li>Worked as part of the marketing team to create landing pages for retargeting ads, improve page performance/SEO, and decrease bounce rates.</li>
            <li>Automated repetitive tasks by creating spreadsheets which would populate the contents of an HTML document for emails and landing pages.</li>
            <li>Assisted with email campaigns by adding custom features to existing templates.</li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.desktop {
  display: block;
}
.mobile {
  display: none;
}
@media only screen and (max-width: 960px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: block;
  }
}
</style>
