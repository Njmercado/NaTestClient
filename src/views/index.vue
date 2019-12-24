<template>
  <v-container 
    class="vertical--center" 
    wrap 
    grid-list-md grid-list-sm
  >
    <v-row justify="center">
      <v-col 
        cols="12" 
        sm="12" 
        xs="12" 
        md="6" 
        lg="5" 
        xl="5"
      >

        <v-card>
          <v-card-title> 
            <label class="center" style="color: grey">Estudiante</label>
          </v-card-title>
          <v-card-text>
            <SearchField 
              style="width:70%" 
              title="buscar estudiante"
              type="student"
              @result="resultFromStudentSearchHandler"
            ></SearchField>
            <FormStudent 
              :update="resultFromStudentSearch"></FormStudent>
          </v-card-text>
        </v-card>

      </v-col>
      <v-col 
        cols="12" 
        sm="12" 
        xs="12" 
        md="6" 
        lg="5" 
        xl="5"
      >
        <v-card>
          <v-card-title> 
            <label
              class="center" 
              style="color:grey"
            >Curso</label>
          </v-card-title>
          <v-card-text style="margin-top: -.9em">
            <v-row 
              align="center" 
              style="margin-right: auto; margin-left: auto"
            >
              <v-col cols="9">
                <SearchField 
                  style="width:70em" 
                  title="buscar curso"
                  type="subject"
                  @result="resultFromSubjectSearchHandler"
                ></SearchField>
              </v-col>

              <v-col cols="1">
                <Top3></Top3>
              </v-col>

            </v-row>
            <FormSubject 
              style="margin-top: -.8em" 
              :update="resultFromSubjectSearch"
            ></FormSubject>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormStudent from "../components/FormStudent.vue";
import FormSubject from "../components/FormSubject.vue";
import SearchField from "../components/SearchField.vue";
import Top3 from "../components/Top3.vue";

import {mapGetters} from 'vuex'

export default {
  name: "Index",
  data: () => ({
    resultFromSubjectSearch: '',
    resultFromStudentSearch: ''
  }),
  computed: {
    ...mapGetters(["getStudent", "getSubject"]),
  },
  methods: {
    resultFromSubjectSearchHandler(val) {
      this.resultFromSubjectSearch = val
    },
    resultFromStudentSearchHandler(val) {
      this.resultFromStudentSearch = val
    },
  },
  components:{
    FormStudent,
    SearchField,
    FormSubject,
    Top3
  },
};
</script>

<style>
.center{
  margin-right: auto;
  margin-left: auto;
}

.vertical--center {
  margin-bottom: auto;
  margin-top: auto;
}
</style>
