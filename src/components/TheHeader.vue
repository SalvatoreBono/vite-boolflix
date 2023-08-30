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
  <div class="bg-black fixed">
    <div
      class="container d-flex align-items-center justify-content-between pt-3 pb-3"
    >
      <div>
        <img
          class="logo"
          src="../assets/img/504e88f1a30f968e13f4cdd854aab685.png"
          alt=""
        />
      </div>
      <div class="d-flex">
        <input
          @keyup.enter="searchFilm(`https://api.themoviedb.org/3/search/multi`)"
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Cerca film o serie TV"
          v-model="store.userTextFilm"
        />
        <button
          @click="searchFilm(`https://api.themoviedb.org/3/search/multi`)"
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
.logo {
  width: 75%;
}
.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.5);
  border-color: rgb(255, 255, 255);
}

.fixed {
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>
