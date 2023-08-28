<script>
import { searchFilm, store } from "../store";
export default {
  components: {},
  data() {
    return {
      store,
    };
  },
  methods: {
    searchFilm,
  },
  mounted() {},
};
</script>

<template>
  <div class="container">
    <div
      class="mb-3 col-3 d-flex align-items-center justify-content-center m-auto pt-3"
    >
      <div>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Cerca film"
          v-model="store.userTextFilm"
        />
      </div>
      <div>
        <button
          @click="searchFilm()"
          type="button"
          class="btn btn-primary ms-3"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
