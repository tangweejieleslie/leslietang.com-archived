<template>
    <v-app>
      <navbar></navbar>
      <v-content class="main-width">
        <v-container class="fill-height">
          <v-layout col wrap class="grey ma-0 pa-4">

              <ContentFour></ContentFour>
              <ContentCenter></ContentCenter>
              <!-- Each piece of content is basically a flex-box -->

          </v-layout>
        </v-container>




      </v-content>  
    </v-app>
</template>

<script>
import Navbar from './sandbox/Nav';
import Content from './sandbox/Content';
import ContentFour from './sandbox/ContentFour';
import ContentCenter from './sandbox/ContentCenter';

export default {
  name: "App",
  components: {
    Navbar,
    Content,
    ContentFour,
    ContentCenter
  },
  data: () => ({
  })
};
</script>

<style scoped>
a {  
  text-decoration: none;
}

.main-width{
  /* min-width: 80%; */
  margin: auto;
}

</style>
