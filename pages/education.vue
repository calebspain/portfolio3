<template>
  <v-container>
    <v-row class="px-4">
      <v-col cols="12">
        <h1 style="letter-spacing:4px" class="text-center mb-10">Education</h1>
      </v-col>
    </v-row>
    <div class="mx-auto pa-10" style="max-width:650px">
      <v-row>
        <v-col cols="12">
          <div class="mb-10">
            <div class="education-container d-flex justify-space-between align-end">
              <div>
                <h3 class="school">
                  University of Houston
                  <br />
                  <span class="font-weight-light degree">Bachelor of Science in Computer Science</span>
                </h3>
              </div>
              <h4 class="font-weight-light desktop">2017 - Present</h4>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="mb-10">
            <div class="education-container d-flex justify-space-between align-end">
              <div>
                <h3 class="school">
                  San Jacinto College
                  <br />
                  <span class="font-weight-light degree">Associate of Science in Mathematics</span>
                </h3>
              </div>
              <h4 class="font-weight-light desktop">2015 - 2017</h4>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.desktop {
  display: block;
}
@media only screen and (max-width: 960px) {
  .desktop {
    display: none !important;
  }
  .school,
  .degree {
    text-align: center;
  }
  .education-container {
    justify-content: center !important;
  }
}
</style>
