<template>
    <v-app>
      <navbar></navbar>
      <v-content align-center>
        <Content></Content>
      </v-content>  
    </v-app>
</template>

<script>
import Navbar from './sandbox/Nav';
import Content from './sandbox/Content';

export default {
  name: "App",
  components: {
    Navbar,
    Content
  },
  data: () => ({
  })
};
</script>

<style scoped>
a {  
  text-decoration: none;
}
</style>
