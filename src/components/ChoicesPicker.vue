<template>
  <div>
    <v-dialog max-width="20em" v-model="openDialog" persistent>
      <template v-slot:activator="{ on }">
        <v-btn 
          color="deep-purple accent-4" 
          v-on="on"
          icon small text
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>{{title}}</v-card-title>
        <v-divider></v-divider>
        <v-subheader>{{subtitle}}</v-subheader>
        <div style="overflow-y: scroll; height: 20em; text-align: left">
          <v-list>
            <v-list-item-group multiple v-model="chosenSubjects">
              <v-list-item v-for="(choice,index) in choices" :key="index">
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox 
                      v-model="active" 
                      @click="toggle" 
                      color="primary"
                    >
                    </v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{choice.title}}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{choice.description}}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            class="btn text--lowercase" 
            color="deep-purple" 
            @click="showSubjectSelected"
            dark small rounded 
          >
            aceptar
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ChoicesPicker",
  props:{
    choices: Array,//todos los cursos disponibles
    title: String,
    subtitle: String,
    chosen:{
      type: Array,
    }
  },
  data: () => ({
    openDialog: false,
    chosenSubjects: []//cursos seleccionados 
  }),
  methods:{
    showSubjectSelected(){
      this.openDialog = !this.openDialog
      this.$emit('chosen', this.chosenSubjects)
    }
  },
  watch:{
    chosen(chosenElements) {
      if(chosenElements){//Si se ha realizado una busqueda
        this.chosenSubjects = chosenElements
      }
    },
  },
} 
</script>
