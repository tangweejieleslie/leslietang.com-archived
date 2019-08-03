<template>
  <v-flex>
    <v-layout col wrap class="green fill-height ma-0 pa-0" justify-center sm12>
      <v-flex sm6 md3 class="pa-1" v-for="item in sample" v-bind:key="item">
        <div class="blue lighten-2 pa-1 fill-height">
          <h1>{{ item.title }}</h1>
          <p>{{ item.text }}</p>
        </div>
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
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?"
      },
      {
        title: "Hello World",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?"
      },
      {
        title: "Hello World",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?"
      },
      {
        title: "Hello World",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?"
      },
      {
        title: "Hello World",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?"
      },
      {
        title: "Hello World",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores consectetur, illo aliquam nemo a ab illum aliquid quidem consequatur, doloremque rem beatae soluta iste esse. Modi tenetur accusamus harum pariatur?"
      }
    ]
  })
};
</script>

<style scoped>
</style>
