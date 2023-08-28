<script>
import CountryFlag from "vue-country-flag-next";
import { reviewFilm, store } from "../store";
export default {
  components: {
    CountryFlag,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    reviewFilm,
  },
  mounted() {},
};
</script>

<template>
  <div style="padding-top: 120px" class="d-flex flex-wrap gap-5 container pb-3">
    <div v-for="singleMovies in store.movie" class="col">
      <div class="card" style="width: 18rem">
        <img
          :src="`http://image.tmdb.org/t/p/w500/${singleMovies.poster_path}`"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body overlay text-center">
          <div class="card-title text-center">
            <h4 class="pb-3">
              <span class="fw-bold">Titolo:</span> {{ singleMovies.title }}
            </h4>
            <div class="pb-3">
              <span class="fw-bold">Titolo originale: </span>
              {{ singleMovies.original_title }}
            </div>
          </div>
          <div class="card-text">
            <div class="pb-3">
              <div
                class="align-items-center d-flex justify-content-center align-items-center"
              >
                <div class="fw-bold me-1">Lingua Originale:</div>
                <div>
                  <country-flag
                    :country="singleMovies.original_language"
                    size="normal"
                  />
                </div>
              </div>
            </div>
            <div>
              <span class="fw-bold">Voto: </span>
              {{ reviewFilm(parseFloat(singleMovies.vote_average)) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 100%;
}
.overlay {
  opacity: 0;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}
.card:hover .overlay {
  opacity: 1;
  color: white;
}
</style>
