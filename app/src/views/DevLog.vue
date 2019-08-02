<template>
    <v-container class="" fill-height >
      
      <v-layout column class="">

        <v-layout row class="ma-2" justify-center>
          <v-flex sm12 class="title pa-2 ma-2">
            <h1 class="display-3">Dev Log</h1>
          </v-flex>
          
          <v-flex xs12 sm6 md4 class="" v-for="app in apps" v-bind:key="app.title" >
            <v-card class="ma-1 pa-1">
              <v-card-title>{{app.title}}</v-card-title>
              <v-card-text>
                {{ app.desc}}
              </v-card-text>

              <v-card-actions>
                <v-btn text class="hidden-sm-and-down">
                  Github
                </v-btn>
                <v-btn text>
                  Go To App
                </v-btn>    
                <v-btn text>
                  Read more...
                </v-btn>                                  
              </v-card-actions>
            </v-card>
          </v-flex>


        </v-layout>

  
      </v-layout>
      


    </v-container>
</template>

<script>


export default {
  name: 'Apps',
  components: {
  },
  data: () => ({
    apps: [
      {
        "title": "App name 1",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        "github": "#git",
        "app": "#app",
        "docs": "#docs"
      },
      {
        "title": "App name 2",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        "github": "#git",
        "app": "#app",
        "docs": "#docs"
      },
      {
        "title": "App name 3",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        "github": "#git",
        "app": "#app",
        "docs": "#docs"
      },
      {
        "title": "App name 4",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        "github": "#git",
        "app": "#app",
        "docs": "#docs"
      },
      {
        "title": "App name 5",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!",
        "github": "#git",
        "app": "#app",
        "docs": "#docs"
      },                        
    ]
  }),
};
</script>

<style scoped>


</style>
