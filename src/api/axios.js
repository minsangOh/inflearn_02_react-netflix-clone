import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:{
    api_key:"02f1a9f9fbbe9d262d63c36449dec87e",
    language:"ko-KR",
  }
})

export default instance