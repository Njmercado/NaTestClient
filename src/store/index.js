import Vue from "vue";
import Vuex from "vuex";
import Server from "./serverConfiguration.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: '', 
    subject: '',
    top: [],
    subjectsList: [],
  },
  mutations: {

    setSubjectsList(state){

      Server.getAllSubjects().then(result => {
        state.subjectsList = result.data.map(el => el._id)
      })
    },
    setStudent(state, data){
      Server.addStudent(data)
    },
    setSubject(state, data){

      Server.addSubject(data).then(result => {
        console.log(result)
      })
    },
    setSearchStudent(state, data) {

      Server.searchStudent(data).then(result => {
        state.student = result.data
      })
    },
    setSearchSubject(state, data){

      Server.searchSubject(data).then(result => {
        state.subject = result.data
      })
    },
    setUpdateStudent(state, data){

      Server.updateStudent(data).then(result => {
        console.log(result)
      })
    },
    setUpdateSubject(state, data){

      Server.updateSubject(data).then(result => {
        console.log(result)
      })
    },
    setDeleteSubject(state, data){
      Server.deleteSubject(data).then(result => {
        console.log(result)
      })
    },
    setDeleteStudent(state, data){

      Server.deleteStudent(data).then(result => {
        console.log(result)
      })
    },
    setTop(state, data){

      Server.getTop(data).then(result => {
        state.top = result.data
      })
    }
  },
  getters:{
    getStudent: state => state.student,
    getSubject: state => state.subject,
    getTop: state => state.top,
    getSubjectsList: state => state.subjectsList
  },
});
