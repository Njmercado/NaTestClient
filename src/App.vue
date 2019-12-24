<template>
  <v-app>
    <v-app-bar 
      color="deep-purple accent-4"
      dense
      dark
      >
      <v-btn class="btn" dark text icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-toolbar-title>NaTest</v-toolbar-title>
    </v-app-bar>
    <Index></Index>
  </v-app>
</template>

<script>

import Index from './views/index.vue'
import {mapMutations} from "vuex"

export default {

  name: "App",
  async mounted(){
    await this.setSubjectsList() 
  },
  methods: {
    ...mapMutations(["setSubjectsList"])
  },
  components:{
    Index
  }  
} 
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ECEFF1;
  text-align: center;
}
</style>
