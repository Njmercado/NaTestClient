<template>
  <v-dialog max-width="40em">
    <template v-slot:activator="{ on }">
      <v-btn
        style="margin-bottom: 5vh"
        @click="getTop3"
        v-on="on"
        color="deep-purple accent-4"
        small
        rounded
        dark
      >top 3</v-btn>
    </template>
    <v-card  style="color: darkgrey;">
      <v-card-title style="background-color: #6200EA;">
        <label class="center--horizontal color--white">
          Best Top 3
        </label>
      </v-card-title>
      <v-card-text>
        <v-row justify="center">
          <v-col 
            cols="12" 
            xs="12" 
            sm="12" 
            md="4" 
            lg="4" 
            xl="4" 
            v-for="(subject, index) in getTop" :key="index"
          >
            <v-card style="color:grey" color="#F9F3FE">
              <v-card-title>
                <label style="margin-right: auto; margin-left: auto">
                  {{ subject._id }}
                </label>
              </v-card-title>
              <v-card-text style="font-weight: 500">
                <v-row justify="center" style="margin-bottom: 2vh">
                  <label>Estudiantes: {{ subject.studentsLength }}</label>
                </v-row>
                <v-row justify="center" style="background-color: #9A6BFF; border-radius: 10px; margin-bottom: 1vh">
                  <label class="color--white">
                    Inicio: 
                    <span style="margin-left: 1em"> {{ subject.begin.data }}</span>
                  </label>
                </v-row>
                <v-row justify="center" style="background-color: #6200EA; border-radius: 10px; margin-bottom: 2vh">
                  <label class="color--white">
                    Fin: 
                    <span style="margin-left: 1em"> {{ subject.end.data }} </span>
                  </label>
                </v-row>
                <v-row justify="center" align="center" style="margin-top: 2vh">
                  <div class="schedules">
                    <div 
                      v-for="(schedule, index) in subject.schedule" 
                      :key="index"
                      style="margin-bottom: .5vh; margin-top: .5vh"
                    >
                      <v-icon small dark>mdi-clock-outline</v-icon>
                      {{ schedule }}
                    </div> 
                  </div>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: "Top3",
  methods: {
    ...mapMutations(["setTop"]),
    async getTop3(){
      await this.setTop({top: 3})
    }
  },
  computed: {
    ...mapGetters(["getTop"])
  }
} 
</script>

<style>
.schedules {
  border-radius: 10px; 
  background-color: #FF0095; 
  width: 100vw; 
  color:white; 
  padding: 1vh 0 1vh 0;
}

.center--horizontal{
  margin-right: auto;
  margin-left: auto;
}

.color--white{
  color: white
}
</style>
