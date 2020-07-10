<template>
  <v-app>
    <v-navigation-drawer class="mobile" v-model="drawer" fixed app>
      <v-list>
        <v-list-item v-for="(page, i) in pages" :key="i" :to="page.to" router exact>
          <v-list-item-icon>
            <v-icon>{{page.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="page.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-footer class="justify-space-around" fixed>
        <v-btn v-for="(socialIcon, i) in socialIcons" :key="i" icon>
          <v-icon>{{socialIcon.name}}</v-icon>
        </v-btn>
      </v-footer>
    </v-navigation-drawer>
    <v-app-bar style="left:0" color="#fff" height="110" elevation="0" fluid fixed app>
      <v-container class="d-flex justify-center">
        <v-btn height="48" class="title-btn" to="/" router exact text>
          <v-toolbar-title class="font-weight-bold" v-text="title" />
        </v-btn>
        <v-spacer />
        <div class="desktop d-flex align-center text-center">
          <v-btn
            class="font-weight-bold"
            v-for="(page, i) in pages"
            :key="i"
            :to="page.to"
            router
            exact
            text
          >{{page.title}}</v-btn>
        </div>
        <v-spacer class="desktop" />
        <div class="desktop">
          <v-btn v-for="(socialIcon, i) in socialIcons" :key="i" icon>
            <v-icon>{{socialIcon.name}}</v-icon>
          </v-btn>
        </div>
        <div class="mobile">
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <v-main class="pl-0">
      <nuxt />
    </v-main>
    <v-footer color="#fff" fixed height="90" app>
      <v-container class="d-flex align-center">
        <span>
          &copy; {{ new Date().getFullYear() }}
          <span
            class="d-inline desktop"
          >Caleb Spain | All Rights Reserved</span>
        </span>
        <v-spacer />
        <a class="download" href="resume.pdf" download>
          <v-btn text>
            <v-icon class="mr-2">mdi-download</v-icon>Download CV
          </v-btn>
        </a>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      pages: [
        {
          title: "About",
          to: "/about",
          icon: "mdi-account-outline"
        },
        {
          title: "Experience",
          to: "/experience",
          icon: "mdi-briefcase-outline"
        },
        {
          title: "Education",
          to: "/education",
          icon: "mdi-school-outline"
        },
        {
          title: "Contact",
          to: "/contact",
          icon: "mdi-email-outline"
        }
      ],
      socialIcons: [
        {
          name: "mdi-github"
        },
        {
          name: "mdi-linkedin"
        },
        {
          name: "mdi-instagram"
        }
      ],
      title: "Caleb Spain"
    };
  }
};
</script>
<style scoped>
* {
  font-family: Arial !important;
  color: #555 !important;
}
.title {
  font-size: 20px !important;
}
.title-btn {
  padding-left: 0px !important;
}
.title-btn::before {
  opacity: 0 !important;
}
.desktop {
  display: block;
}
.mobile {
  display: none;
}
.download {
  text-decoration: none;
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