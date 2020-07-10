<template>
  <v-row>
    <v-col
      v-for="(project, i) in projects"
      :key="i"
      v-bind:class="[i < 3 ? 'pt-0' : '', 'pa-2']"
      height="40vh"
      cols="12"
      sm="6"
      md="4"
    >
      <div class="image-container">
        <v-img height="40vh" :src="project.src"></v-img>
        <div class="image-overlay">
          <div></div>
          <h3 class="project-name font-weight-bold">{{project.name}}</h3>
          <h4 class="project-description font-weight-light">{{project.description}}</h4>
          <div>
            <v-btn class="mr-2">
              <v-icon class="mr-2">mdi-code-tags</v-icon>View Code
            </v-btn>
            <v-btn>
              <v-icon class="mr-2">mdi-laptop</v-icon>View Project
            </v-btn>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Project 1",
          src: "project-1.jpg",
          description:
            "This will be a description of the project, once it has been created"
        },
        {
          name: "Project 2",
          src: "project-2.jpg",
          description:
            "This will be a description of the project, once it has been created"
        },
        {
          name: "Project 3",
          src: "project-3.jpeg",
          description:
            "This will be a description of the project, once it has been created"
        },
        {
          name: "Project 4",
          src: "project-4.jpg",
          description:
            "This will be a description of the project, once it has been created"
        },
        {
          name: "Project 5",
          src: "project-5.jpg",
          description:
            "This will be a description of the project, once it has been created"
        },
        {
          name: "Project 6",
          src: "project-6.jpg",
          description:
            "This will be a description of the project, once it has been created"
        }
      ]
    };
  }
};
</script>
<style scoped>
.image-container {
  position: relative;
}
.image-overlay {
  height: 40vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  opacity: 0;
  transition: opacity 0.4s ease-in-out 0s;
}
.image-overlay:hover {
  opacity: 1;
}
.project-description {
  max-width: 60%;
  text-align: center;
}
</style>