import axios from 'axios';

export default class UserServices {
  constructor () {
    this.axios = axios.create({
      baseURL: "http://localhost:8080/api/auth"
    })
  }

  async login (dados) {
    const {data} = await this.axios.post('/authenticate', dados)

    if (data) {
      //localStorage.setItem("email", data.user.email)
      localStorage.setItem("token", data.token.token)

      return true
    }

    return
  }

  async register (dados) {
    return this.axios.post('/register', dados)
  }

  userAuthenticate () {
    return localStorage.getItem("token") != undefined ? true : false
    // return typeof localStorage.getItem("token")
  }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async logout () {
    localStorage.removeItem("token")
    //localStorage.removeItem("email")
  }
}