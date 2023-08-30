import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    userTextFilm: "",
    movie: {},
})

/* argomento i singoli url */
export function searchFilm(urls) {
    /* svuoto movie così che non si sovrascrivano */
    store.movie = [];
    /* creo con la costante requests ogni singolo axios */
    const requests = urls.map((url) => axios.get(url, {
        params: {
            api_key: `e18bd326b1f37c5ea1e097b2f4c62927`,
            query: `${store.userTextFilm}`,
        }
    }));

    /*  con axios.all faccio la chiamata di ogni singola requests  */
    /* stessa cosa con responses che faccio la chiamata di ogni singola response */
    axios.all(requests).then((responses) => {
        /* responses.forEach per riuscire a prendere le singole response */
        responses.forEach((response) => {
            store.movie.push(...response.data.results)
            store.userTextFilm = ""
        })
    })
}

/* come argomento do il numero delle recesioni totali */
export function reviewFilm(x) {
    let review = parseFloat(x)
    const resultReview = review / 2;

    /* Totale Stelle */
    const starTotal = 5;
    /* il risultato delle recensioni / il totale delle stelle * 100 (così da renderlo un numero in percentuale) */
    const starPercentage = `width:${(resultReview / starTotal) * 100}%`;

    return starPercentage

}
