<template>
  <v-flex>
    <v-layout row wrap class="blue ma-1 fill-height">

        
        <v-flex sm6 md4 class="pa-1" v-for="item in sample" v-bind:key="item">
            <v-card>
                <v-card-title>
                    {{ item.title }}
                </v-card-title>
                <v-card-text>
                    {{ item.text }}
                </v-card-text>
                <v-card-actions>
                    <v-btn text v-for="action in item.actions" v-bind:key="action">
                        {{ action.name }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>

    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: "Content",
  components: {},
  data: () => ({
    sample: [
      {
        title: "Hello World",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?",
        actions: [
            {
                route: "sample",
                name: "Sample"
            }, 
            {
                route: "sample",
                name: "Sample Action 2"
            }, 
        ]
      },
      {
        title: "Hello World",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?",
        actions: [
            {
                route: "sample",
                name: "Sample"
            }, 
            {
                route: "sample",
                name: "Sample Action 2"
            }, 
        ]
      },      
      {
        title: "Hello World 2",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?",
        actions: {
            route: "sample",
            name: "Sample"
        }
      },
      {
        title: "Hello World 3",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?",
        actions: {
            route: "sample",
            name: "Sample"
        }
      }            
    ]
  })
};
</script>

<style scoped>
</style>
