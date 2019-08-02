<template>
  <v-app>
    <v-app-bar app flat hide-on-scroll>
      <v-toolbar-title class="hidden-xs-only headline text-uppercase">
        <span>Leslie</span>
        <span class="font-weight-light">Tang</span>
      </v-toolbar-title>
      <v-spacer class="hidden-xs-only"></v-spacer>

      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Dev Log</span>
      </v-btn>

      <v-btn
        text
        href="#"
        
      >
        <span class="mr-2">Apps</span>
      </v-btn>

      <v-btn
        text
        href="#"
        
      >
        <span class="mr-2 hidden-xs-only">Contact</span>
      </v-btn>

      <v-btn
        text
        href="#"
        
      >
        <span class="mr-2 hidden-xs-only">Résumé</span>
      </v-btn>      

    </v-app-bar>

    <v-content class="ma-2">

      <v-container class="" >
        
        <v-layout column class="">

          <v-layout row class="ma-2" justify-center>
            <v-flex sm12 class="title pa-2 ma-2">
              <h1 class="display-3">Dev Log</h1>
            </v-flex>
            
            <v-flex xs12 sm6 md4 class="" >
              <v-card class="ma-1 pa-1">
                <v-card-title>App Name</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!
                </v-card-text>

                <v-card-actions>
                  <v-btn text class="hidden-xs-only">
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

            <v-flex xs12 sm6 md4 class="" >
              <v-card class="ma-1 pa-1">
                <v-card-title>App Name</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!
                </v-card-text>

                <v-card-actions>
                  <v-btn text>
                    Github
                  </v-btn>
                  <v-btn text>
                    View App
                  </v-btn>    
                  <v-btn text>
                    Read more...
                  </v-btn>                                  
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12 sm6 md4 class="" >
              <v-card class="ma-1 pa-1">
                <v-card-title>App Name</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!
                </v-card-text>

                <v-card-actions>
                  <v-btn text>
                    Github
                  </v-btn>
                  <v-btn text>
                    View App
                  </v-btn>    
                  <v-btn text>
                    Read more...
                  </v-btn>                                  
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12 sm6 md4 class="" >
              <v-card class="ma-1 pa-1">
                <v-card-title>App Name</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!
                </v-card-text>

                <v-card-actions>
                  <v-btn text>
                    Github
                  </v-btn>
                  <v-btn text>
                    View App
                  </v-btn>    
                  <v-btn text>
                    Read more...
                  </v-btn>                                  
                </v-card-actions>
              </v-card>
            </v-flex>  

            <v-flex xs12 sm6 md4 class="" >
              <v-card class="ma-1 pa-1">
                <v-card-title>App Name</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eligendi soluta in maxime delectus velit consequuntur rem. Ipsa in eligendi ad nobis totam quisquam molestias adipisci enim atque, tempora quo!
                </v-card-text>

                <v-card-actions>
                  <v-btn text>
                    Github
                  </v-btn>
                  <v-btn text>
                    View App
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

    </v-content>

    <v-footer app absolute>
      <v-layout row justify-center >
        <v-flex>
          
        </v-flex>
        <v-flex>
          <v-btn
            text
            href="#"
            
          >
            <span class="mr-2">Contact</span>
          </v-btn>
          <v-btn
            text
            href="#"
            
          >
            <span class="mr-2">Résumé</span>
          </v-btn>          
          
        </v-flex>

      </v-layout>
    </v-footer>    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.column-layout {
  max-width: 80%;
}

.title{
  text-align: center;
}

.text-center{
  text-align: center;
}

</style>
