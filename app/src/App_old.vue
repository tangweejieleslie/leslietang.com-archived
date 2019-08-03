<template>
  <v-app>
    <v-app-bar app flat hide-on-scroll>
      <v-toolbar-title class="hidden-xs-only headline text-uppercase">
        <span>Leslie</span>
        <span class="font-weight-light">Tang</span>
      </v-toolbar-title>
      <v-spacer class="hidden-xs-only"></v-spacer>



      <router-link to="/devlog">
        <v-btn text>
          <span class="mr-2">Dev Log</span>
        </v-btn>
      </router-link>

      <router-link to="/apps">
        <v-btn text>
          <span class="mr-2">Apps</span>
        </v-btn>
      </router-link>

      <router-link to="/#">
        <v-btn text>
          <span class="mr-2 hidden-xs-only">Contact</span>
        </v-btn>
      </router-link>

      <router-link to="/resume">
        <v-btn text>
          <span class="mr-2">Résumé</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-content class="ma-2">
      <router-view></router-view>
    </v-content>

    <v-footer app absolute>
      <v-layout row justify-center>
        <v-flex></v-flex>
        <v-flex>
          <v-btn text href="#">
            <span class="mr-2">Contact</span>
          </v-btn>
          <router-link to="/resume">
            <v-btn text>
              <span class="mr-2">Résumé</span>
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    apps: [
      {
        title: "App name 1",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        github: "#git",
        app: "#app",
        docs: "#docs"
      },
      {
        title: "App name 2",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        github: "#git",
        app: "#app",
        docs: "#docs"
      },
      {
        title: "App name 3",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        github: "#git",
        app: "#app",
        docs: "#docs"
      },
      {
        title: "App name 4",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        github: "#git",
        app: "#app",
        docs: "#docs"
      },
      {
        title: "App name 5",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        github: "#git",
        app: "#app",
        docs: "#docs"
      }
    ]
  })
};
</script>

<style scoped>
.column-layout {
  max-width: 80%;
}

.title {
  text-align: center;
}

.text-center {
  text-align: center;
}

a {  
  text-decoration: none;
}
</style>
