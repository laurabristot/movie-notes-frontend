import axios from "axios"

export const api = axios.create({
  baseURL: "https://movie-notes-backend.onrender.com/"
})
