<template>
  <v-card width="30em" class="center">
    <v-card-title style="color: lightgrey">
      Agregar nuevo curso
    </v-card-title>
    <v-card-text>
      <v-text-field label="nombre" color="deep-purple accent-4" v-model="name" rounded dense filled outlined></v-text-field>
      <v-row justify="center">
        <v-col cols="6">
          <DatePicker @date="beginDate" :date="begin" title="inicio"></DatePicker>
        </v-col>
        <v-col cols="6">
          <DatePicker @date="endDate" :date="end" title="fin"></DatePicker>    
        </v-col>
      </v-row>
      <v-row justify="center" style="margin-bottom: 3vh">
        <label>horarios</label>
        <v-spacer></v-spacer>
        <v-btn @click="increaseSchedulesCount" icon small>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>

      <Schedule 
        @schedule="addSchedule"
        @delete="deleteSchedule(index)"
        :schedule="schedule"
        v-for="(schedule, index) in schedules"
        :key="index"
      ></Schedule>

    </v-card-text>
    <v-card-actions>
      <v-btn
        class="text-lowercase center"
        color="deep-purple accent-4"
        dark rounded small
      >
        <label v-if="!update" @click="addSubject">agregar</label>
        <label v-if="update" @click="updateSubject">actualizar</label>
      </v-btn>

      <v-btn
        class="text-lowercase center"
        color="deep-purple accent-4"
        v-if="update"
        @click="deleteSubject"
        dark rounded small
      >
        eliminar
      </v-btn>

      <v-btn
        class="text-lowercase center"
        color="deep-purple accent-4"
        @click="cleanFields"
        dark rounded small
      >
        cancelar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Schedule from "./Schedule.vue"
import DatePicker from "./DatePicker.vue"
import {mapMutations} from "vuex"
export default {
  name: "FormSubject",
  props:[
    "update"
  ],
  data: () => ({
    name: "",
    schedules: [],
    begin: '',
    end: ''
  }),
  methods: {
    ...mapMutations(["setSubject", "setUpdateSubject", "setDeleteSubject"]),
    addSchedule(val){
      this.schedules[this.schedules.length-1] = val
    },
    increaseSchedulesCount(){
      this.schedules.push("")
    },
    beginDate(val){
      this.begin = val 
    },
    endDate(val){
      this.end = val 
    },
    addSubject(){
      console.log(this.schedules)
      const request = {
        name: this.name,
        schedule: this.schedules,
        begin: this.begin,
        end: this.end
      }
      this.cleanFields()
      this.setSubject(request)
    },
    async updateSubject() {
      await this.setUpdateSubject(
        {
          id: this.name,
          schedules: this.schedules 
        }
      )
      this.cleanFields()
    },
    deleteSubject(){
      this.setDeleteSubject(
        {
          idSubject: this.name 
        }
      ) 
    },
    cleanFields(){
      this.name = ""
      this.schedules = []
      this.begin = "2019-12-30"
      this.end = "2019-12-30"
    },
    deleteSchedule(index){
      this.schedules.splice(index, 1)
    }
  },
  watch: {
    async update(val){
      if(val) {
        this.name = val._id
        this.begin = val.begin
        this.end = val.end
        this.schedules = await val.schedule
      }
    }
  },
  components: {
    Schedule,
    DatePicker
  }
} 
</script>
