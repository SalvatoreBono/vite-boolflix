import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    userTextFilm: "",
    movie: {},
})

export function searchFilm() {
    const url = "https://api.themoviedb.org/3/search/movie";
    axios.get(url, {
        params: {
            api_key: `e18bd326b1f37c5ea1e097b2f4c62927`,
            query: `${store.userTextFilm}`,
        }
    })
        .then((response) => {
            store.movie = response.data.results;
        })
}

/* come argomento mi do il numero delle recesioni totali */
export function reviewFilm(x) {
    let review = x.toFixed();
    const result = review / 2;
    return result;

}