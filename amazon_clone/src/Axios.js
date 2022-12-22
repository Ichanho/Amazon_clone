import axios from "axios"

const instance = axios.create({
  baseURL: "..."
  // Firebase's functions emulators API url
})

export default instance;