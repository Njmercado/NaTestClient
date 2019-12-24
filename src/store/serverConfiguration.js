import axios from "axios"

//const serverName = "http://localhost:3000"
const serverName = "http://server-natitest.herokuapp.com"

class Server {

  static async getAllSubjects(){
    return axios.get(`${serverName}/subject`)
  }

  static async addStudent(data) {
    const name = data.name
    const lastname = data.lastname
    const email = data.email
    const age = data.age
    const subjects = data.subjects

    return axios(
      {
        url: `${serverName}/student`,
        method: "post",
        data:{
          name: name,
          lastname: lastname,
          email: email,
          age: age,
          subjects: subjects

        } 
      }
    )
  }

  static async addSubject(data) {
    const name = data.name
    const begin = data.begin
    const end = data.end
    const schedule = data.schedule
    const request = {
      name: name,
      begin: begin,
      end: end,
      schedule: schedule
    }
    const result = axios.post(`${serverName}/subject`, request)
    return result
  }

  static async searchStudent(data) {
    const idStudent = data.idStudent
    const request = `${serverName}/student?id=${idStudent}`
    const result = axios.get(request)
    return result
  }

  static async searchSubject(data) {
    const idSubject = data.idSubject
    const request = `${serverName}/subject/one?id=${idSubject}`
    const result = axios.get(request)
    return result
  }

  static async updateStudent(data) {
    const idStudent = data.idStudent
    const subjects = data.subjects
    return await axios(
      {
        url: `${serverName}/student/subject`,
        method: "put",
        data: {
          student: idStudent,
          subjects: subjects
        }
      }
    )
  }

  static async updateSubject(data) {
    const idSubject = data.id
    const schedules = data.schedules
    return await axios(
      {
        url: `${serverName}/subject/schedule`,
        method: "put",
        data: {
          id: idSubject,
          schedule: schedules 
        }
      }
    )
  }

  static async deleteSubject(data){
    const id = data.idSubject
    const request = `${serverName}/subject?id=${id}`
    return await axios.delete(request)
  }

  static async deleteStudent(data){
    const id = data.id
    const request = `${serverName}/student?id=${id}`
    return await axios.delete(request)
  }

  static async getTop(data){
    const top = data.top
    const request = `${serverName}/subject/top?top=${top}`
    return await axios.get(request)
  }
}

export default Server
