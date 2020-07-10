<template>
  <v-container class="py-0">
    <v-row class="px-4">
      <v-col cols="12">
        <h1 style="letter-spacing:4px" class="text-center mb-10">About</h1>
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center py-0" cols="12" md="6">
        <v-img class="profile-image mb-10" src="r.JPG"></v-img>
      </v-col>
      <v-col class="py-0" cols="12" md="6">
        <div class="mb-10">
          <h3>Skills</h3>
          <hr class="my-2" />
          <p>
            <b>Front-end:</b> HTML, CSS, JavaScript, Vue.js, Vuex, Nuxt.js
          </p>
          <p>
            <b>Backend:</b> MySQL, MongoDB, PHP, Node.js
          </p>
          <p>
            <b>Other:</b> Git/GitHub, WordPress, Firebase
          </p>
        </div>
        <div class="mb-10">
          <h3>Other Interests</h3>
          <hr class="my-2" />
          <p>
            <b>Entrepreneurship:</b>
            One of the main reasons I began writing code was because I wanted to take my ideas and bring them to life.
            I enjoy spending my free time thinking of new ideas and how I can build them.
          </p>
          <p>
            <b>Investing:</b>
            Another reason I began writing code is because I believed I could write a script that would help me predict the stock market.
            I was extremely wrong, but still really enjoy looking into new ways of investing.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-image {
  max-width: 80%;
}
</style>
