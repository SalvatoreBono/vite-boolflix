import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    userTextFilm: "",
    title: "",
})

export function searchFilm() {
    const url = "https://api.themoviedb.org/3/search/movie"
    axios.get(url, {
        params: {
            api_key: `e18bd326b1f37c5ea1e097b2f4c62927`,
            query: `${store.userTextFilm}`,
        }
    })
        .then((response) => {
            store.title = response.data.results.original_title;
        })
}