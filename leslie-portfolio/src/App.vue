<template>
  <v-app class="pa-0 ma-0">
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0" cols="0" sm="3">
        <v-card class="mx-0 fill-height" width="100%">
          <v-navigation-drawer
            absolute
            dark
            text
            src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            width="100%"
            floating
            class=""
          >
            <v-list>
              <v-list-item v-for="([icon, text], i) in items" :key="i" link>
                <v-list-item-icon>
                  <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>

      <v-col>
        <v-main>
          <HelloWorld />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            debitis dolorum velit repellat corporis omnis repudiandae sunt vero
            illo praesentium recusandae odio quibusdam soluta nemo voluptates!
            Quas a distinctio voluptate.
          </p>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    items: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
  }),
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
