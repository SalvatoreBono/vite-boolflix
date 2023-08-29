<script>
import LangFlag from "vue-lang-code-flags";
import { reviewFilm, store } from "../store";
export default {
  components: {
    LangFlag,
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
              {{ singleMovies.name }}
            </h4>
            <div class="pb-3">
              <span class="fw-bold">Titolo originale: </span>
              {{ singleMovies.original_title }}
              {{ singleMovies.original_name }}
            </div>
          </div>
          <div class="card-text">
            <div class="pb-3">
              <div
                class="align-items-center d-flex justify-content-center align-items-center"
              >
                <div class="fw-bold me-1">Lingua Originale:</div>
                <div>
                  <lang-flag :iso="singleMovies.original_language" />
                </div>
              </div>
            </div>
            <div>
              <div class="stars-outer">
                <div
                  :style="`${reviewFilm(singleMovies.vote_average)}`"
                  class="stars-inner"
                ></div>
              </div>
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
.stars-outer {
  display: inline-block;

  position: relative;

  font-family: FontAwesome;
}

.stars-outer::before {
  content: "\f006 \f006 \f006 \f006 \f006";
}

.stars-inner {
  position: absolute;

  top: 0;

  left: 0;

  white-space: nowrap;

  overflow: hidden;

  width: 0;
}

.stars-inner::before {
  content: "\f005 \f005 \f005 \f005 \f005";

  color: #f8ce0b;
}
</style>
