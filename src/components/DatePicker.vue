<template>
  <v-menu
    v-model="open"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-on="on"
        v-model="chosenDate"
        :label="title"
        readonly
        dense
        filled
        rounded
        outlined
      ></v-text-field>
    </template>
    <v-date-picker v-model="chosenDate" @input="returnDate"></v-date-picker>
  </v-menu> 
</template>

<script>
export default {
  name: "DatePicker",
  props:[
    "title",
    "date"
  ],
  data: () => ({
    chosenDate: new Date().toISOString().substr(0, 10),
    open: false
  }),
  methods:{
    returnDate(){
      this.$emit('date',this.chosenDate)
      this.open = false
    }
  },
  watch: {
    date(val) {
      console.log(val)
      this.chosenDate = new Date(val).toISOString().substr(0, 10);
    }
  },
  components:{
  }  
} 
</script>
