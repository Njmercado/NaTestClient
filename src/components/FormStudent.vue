<template>
  <v-card width="25em" class="center">
    <v-card-title style="color: lightgrey">
      Agregar nuevo estudiante
    </v-card-title>
    <v-card-text>
      <v-text-field 
        label="nombre" 
        color="deep-purple accent-4" 
        :readonly="editableField" 
        v-model="name" 
        rounded dense filled outlined>
      </v-text-field>
      <v-text-field 
        label="apellido" 
        color="deep-purple accent-4" 
        :readonly="editableField" 
        v-model="lastname" 
        rounded dense filled outlined>
      </v-text-field>
      <v-text-field 
        label="email" 
        color="deep-purple accent-4" 
        :readonly="editableField" 
        v-model="email" 
        rounded dense filled outlined>
      </v-text-field>
      <v-slider
        v-model="age"
        label="edad"
        min="1"
        max="90"
        color="deep-purple accent-4"
        thumb-color="deep-purple accent-4"
        thumb-label="always"
      >
      </v-slider>

      <CoursesSelector 
        @chosen="subjectsSelectedHandler" 
        :chosen="subjects"
      ></CoursesSelector>

    </v-card-text>
    <v-card-actions>
      <v-btn
        class="text-lowercase center"
        color="deep-purple accent-4"
        dark
        rounded
        small
      >
        <label v-if="!editableField" @click="addStudentHandler">agregar</label>
        <label v-if="editableField" @click="updateStudentHandler">actualizar</label>
      </v-btn>

      <v-btn
        color="deep-purple accent-4"
        class="text-lowercase center"
        v-if="editableField"
        @click="deleteStudent"
        small
        rounded
        dark
      >
        eliminar 
      </v-btn>
      <v-btn
        color="deep-purple accent-4"
        class="text-lowercase center"
        @click="cleanFields"
        small
        rounded
        dark
      >
        cancelar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import CoursesSelector from "./CoursesSelector.vue";
import {mapMutations} from "vuex"
export default {
  name: "FormStudent",
  props: [
    "update",
  ],
  data: () => ({
    age: 15,
    name: '',
    lastname: '',
    email: '',
    subjects: [],
    editableField: false,
  }),
  watch: {
    update(val) {
      if(val){
        this.name = val.name 
        this.lastname = val.lastname 
        this.age = val.age 
        this.subjects = val.subject 
        this.email = val._id 

        this.editableField = true
      }
    }
  },
  methods: {
    ...mapMutations(["setStudent", "setUpdateStudent", "setDeleteStudent"]),
    addStudentHandler(){
      const request = {
        name: this.name,
        lastname: this.lastname,
        age: this.age,
        subjects: this.subjects,
        email: this.email
      }    
      this.setStudent(request)
      this.cleanFields()
    },
    updateStudentHandler(){
      const request = {
        idStudent: this.email,
        subjects: this.subjects 
      }

      this.cleanFields()

      this.setUpdateStudent(request) 
    },
    subjectsSelectedHandler(val){
      this.subjects = val 
    },
    async deleteStudent(){
     
      console.log(this.email)
      await this.setDeleteStudent(
        {
          id: this.email
        }
      )
      await this.cleanFields()
    },
    cleanFields() {
      this.age = 15
      this.name = ''
      this.lastname = ''
      this.email = ''
      this.subjects = []

      this.editableField = false
    }
  },
  components: {
    CoursesSelector
  }
} 
</script>

<style>
.center{
  margin-left: auto;
  margin-right: auto;
}
</style>

