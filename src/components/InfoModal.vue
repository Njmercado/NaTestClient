<template>
  <v-dialog>
    <template v-slot:activator="{ on }">
      <v-icon ref="activate" v-on="on"></v-icon>
    </template>
    <v-card>
      <v-card-title>hola</v-card-title>
    </v-card>
  </v-dialog>    
</template>

<script>
  
  export default {

    name: "InfoModal",
    props:[
      "open"
    ],
    methods:{

    },
    watch: {
      open(val) {
        console.log(val)
        this.$refs.activate.$el.click() 
      } 
    },
    components:{

    }  
  } 
</script>
