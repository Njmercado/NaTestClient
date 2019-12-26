<template>
  <v-app>
    <v-app-bar 
      color="deep-purple accent-4"
      dense
      dark
      >
      <v-btn class="btn" @click="openCloseModalHandler" dark text icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-toolbar-title>NaTest</v-toolbar-title>
    </v-app-bar>
    <Index></Index>

    <InfoModal :open="false"></InfoModal>
  </v-app>
</template>

<script>

import Index from './views/index.vue'
import InfoModal from './components/InfoModal.vue'
import {mapMutations} from "vuex"

export default {

  name: "App",
  data: () => ({
    openCloseModal: false
  }),
  async mounted(){
    await this.setSubjectsList() 
  },
  methods: {
    ...mapMutations(["setSubjectsList"]),
    openCloseModalHandler(){
      this.openCloseModal = !this.openCloseModal
    }
  },
  components:{
    Index,
    InfoModal
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
