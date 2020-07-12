<template>
  <v-container>
    <v-row class="px-4">
      <v-col cols="12">
        <h1 style="letter-spacing:4px" class="text-center mb-10">Contact</h1>
      </v-col>
      <v-col cols="12">
        <v-card class="contact-card mx-auto" max-width="650">
          <v-card-text class="pa-0">
            <v-text-field v-model="name" label="Name" single-line outlined></v-text-field>
            <v-text-field v-model="address" label="Email address" single-line outlined></v-text-field>
            <v-text-field v-model="subject" label="Subject" single-line outlined></v-text-field>
            <v-textarea v-model="message" outlined label="Your message" rows="4"></v-textarea>
          </v-card-text>
          <v-card-actions class="pa-0">
            <v-btn @click="sendEmail" large class="mb-4 px-0" style="width:100%">Send</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      address: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    sendEmail() {
      this.name = "";
      this.address = "";
      this.subject = "";
      this.message = "";
    }
  }
};
</script>

<style scoped>
.contact-card {
  box-shadow: none !important;
}
</style>