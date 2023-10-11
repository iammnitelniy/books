import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  params: {
    key: "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU",
  },
});
