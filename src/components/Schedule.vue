<template>
  <v-row justify="center" align="center">
    <v-col cols="3">
      <v-select 
        :items="days" 
        label="dia"
        v-model="chosenDay"
        dense
      ></v-select>
    </v-col>
    <v-col cols="4">
      <v-select 
        :items="hour" 
        label="inicio"
        v-model="chosenBeginHour"
        dense
      ></v-select>
    </v-col>
    <v-col cols="4">
      <v-select 
        :items="hour" 
        label="fin"
        v-model="chosenEndHour"
        @change="returnSchedule"
        dense
      ></v-select>
    </v-col>
    <v-col cols="1" style="margin-left: -2em">
      <v-btn color="error" @click="deleteSchedule" fab icon text small>
        <v-icon small>mdi-delete</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Schedule",
  props:[
    "schedule"
  ],
  data: () => ({
    days: ["Lu", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
    hour: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
    chosenDay: "Lu",
    chosenBeginHour: "8:00",
    chosenEndHour: "8:00",
    disabledBegin: true,
    disabledEnd: true,
  }),
  mounted(){
    console.log(this.schedule)
    const splitSchedule = this.schedule.split(" ")
    if (splitSchedule.length > 1) {
      this.chosenDay = splitSchedule[0]
      this.chosenBeginHour = splitSchedule[1] 
      //3 porque el formato de ingreso de una fecha es
      // day beginHour - endHour
      //Entonces cuando se hace el split hay un elemento que contiene
      //un -, el cual está en la posicion 2
      this.chosenEndHour = splitSchedule[3]
    }
  },
  methods: {
    returnSchedule(value){
      this.chosenEndHour = value
      const finalSchedule = `${this.chosenDay} ${this.chosenBeginHour} - ${value}`
      console.log("final schedule: "+finalSchedule)
      this.$emit('schedule', finalSchedule)
    },
    deleteSchedule(){
      this.$emit("delete", true)
    }
  }
  /*watch: {
    chosenEndHour(val){//Se retorna con este campo, porque es el ultimo en seleccionar
      if(this.schedule == ){
        const finalSchedule = `${this.chosenDay} ${this.chosenBeginHour} - ${this.chosenEndHour}`
        this.$emit('schedule', finalSchedule)
      }
    }
  }*/
} 
</script>
