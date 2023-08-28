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
  <div class="bg-black">
    <div
      class="container d-flex align-items-center justify-content-between pt-3"
    >
      <div>
        <h1 style="color: red">BOOLFLIX</h1>
      </div>
      <div class="d-flex">
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Cerca film"
          v-model="store.userTextFilm"
        />
        <button
          @click="searchFilm()"
          type="button"
          style="background-color: red"
          class="btn btn-danger ms-3"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.5);
}
</style>
