<template>
  <v-col
    class="center"
  >
    <v-text-field
      :label="title"
      @keyup.enter="search"
      v-model="dataToSearch"
      append-icon="mdi-send"
      @click:append="search"
      type="text"
      rounded
      dense
      filled
      outlined
    >
    </v-text-field>
  </v-col>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: "SeachField",
  props:[
    "title",
    "type"
  ],
  data: () => ({
    dataToSearch: ''
  }),
  methods: {
    ...mapMutations(["setSearchStudent", "setSearchSubject"]),
    search(){
      if(this.type == "student") {

        this.setSearchStudent({ idStudent: this.dataToSearch })

        setTimeout(() => {
          this.$emit("result", this.getStudent)
        }, 1000)
      }else if(this.type == "subject"){

        this.setSearchSubject({ idSubject: this.dataToSearch })

        setTimeout(() => {
          this.$emit("result", this.getSubject)
        }, 1000)
      }
    }
  },
  computed: {
    ...mapGetters(["getSubject", "getStudent"])
  }
} 
</script>
