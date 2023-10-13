import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});
