import { reactive } from "vue";

export const store = reactive({
    userTextFilm: "",
})

export function searchFilm() {
    console.log(this.store.userTextFilm)
}