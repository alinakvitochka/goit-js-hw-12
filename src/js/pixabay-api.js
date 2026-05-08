import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "55778076-28ca791bc77771c5473683f0d";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(response => response.data);
}