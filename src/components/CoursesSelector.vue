<template>
  <div>
    <v-container wrap>
      <v-row>
        cursos
        <v-spacer></v-spacer>
        <ChoicesPicker
          :choices="subjects"
          :chosen="chosenSubjectsFromSearch"
          :open="openCloseChoicesPicker"
          title="Cursos"
          subtitle="seleccione los cursos deseados"
          @chosen="selected"
        >
        </ChoicesPicker>

        <v-btn 
          color="deep-purple accent-4" 
          icon small text
          @click="openCloseChoicesPickerHandler"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-chip
          v-for="(subject, index) in chosenSubjects"
          :key="index"
          style="margin: 4px"
        >
          {{subject}}
        </v-chip>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ChoicesPicker from "./ChoicesPicker.vue";
import {mapGetters, mapMutations} from "vuex"
export default {
  name: "CoursesSelector",
  props:{
    chosen:{
      type: Array
    }
  },
  data: () => ({
    subjects: [],
    chosenSubjects: [],
    chosenSubjectsFromSearch: [],//cuando se realiza
    //una busqueda esta variable me permitirá
    //almacenar la informacion y marcar en el modal
    //de cursos los cursos del estudiante correspondiente
    openCloseChoicesPicker: false
  }),
  methods: {
    ...mapMutations(["setSubjectsList"]),
    selected(chosenElements) {
      this.chosenSubjects = [];
      for(var subject of chosenElements) {
        this.chosenSubjects.push(this.subjects[subject].title);
      }
      this.$emit('chosen', this.chosenSubjects)
    },
    async openCloseChoicesPickerHandler(){
      //este timeout me permitirá obtener la informacion 
      //de los cursos disponibles.
      //Uso este metodo porque necesito que la lista de 
      //los cursos se ingrese el modal que permitirá verlos,
      //pero se tiene que hacer cuando el elemento se
      //está creando, montando.
      await this.setSubjectsList()
      await setTimeout(() => {
        this.subjects = this.getSubjectsList
        this.subjects = this.subjects.map(el => ({title:el,description:"description"}))
      }, 500)
      this.openCloseChoicesPicker = await !this.openCloseChoicesPicker
    }
  },
  watch:{
    chosen(chosenElements){
      if(chosenElements.length <= 0){
        this.chosenSubjectsFromSearch = [] //si no se realizó una busqueda
      }else{
        this.chosenSubjects = chosenElements 
        this.chosenSubjectsFromSearch = []
        for(var subject of chosenElements){
          const index = this.getSubjectsList.indexOf(subject)
          //uso el index, y no el valor, porque el selector
          //de los cursos, el modal, solo admite los index de
          //la lista con la cual fue llenada, en este caso los
          //cursos disponibles
          //Cuando se le envia strings, nombres de los cursos, 
          //en vez de sus correspondientes indices en la lista
          //todo se va para el carajos
          this.chosenSubjectsFromSearch.push(index)
        }
      } 
    }
  },
  computed: {
    ...mapGetters(["getSubjectsList"]),
  },
  components: {
    ChoicesPicker
  }
} 
</script>
