<script>
import { store } from "../store";

export default {
  components: {},
  data() {
    return {
      store,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <div v-if="store.homeUser" class="body text-white">
    <div>
      <h1 class="display-1 fw-bold">Chi vuole guardare Boolflix?</h1>
    </div>
    <div class="d-flex gap-5 text-secondary">
      <!-- al click home user diventa false -->
      <div @click="store.homeUser = false" class="text-center hover">
        <div class="user user-img user-img-1"></div>
        <h4 class="pt-2">User 1</h4>
      </div>
      <div class="text-center hover">
        <div class="user user-img user-img-2"></div>
        <h4 class="pt-2">User 2</h4>
      </div>
      <div class="text-center hover">
        <div class="user user-img user-img-3"></div>
        <h4 class="pt-2">Bambini</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  height: 100vh;
  background-color: rgb(20, 20, 20);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  width: 100%;
}
.user {
  margin-top: 50px;
  width: 200px;
  aspect-ratio: 1/1;
  border-radius: 5px;
  border: 4px solid transparent;
}
.user:hover {
  border: 4px solid white;
  cursor: pointer;
}

.hover:hover h4 {
  color: white;
}
.user-img {
  background-position: center;
  background-size: contain;
}
.user-img-1 {
  background-image: url(../assets/img/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png);
}
.user-img-2 {
  background-image: url(../assets/img/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png);
}

.user-img-3 {
  background-image: url(../assets/img/AAAABRJDNcBmlpfTeqvy1nir8kb6BTy7sJjSihTNn1kHWsAuEE0Pj3TZIafxSpCnbmssrYA4QKUMEMgXPoEsfH1CKwUtxJUdp_S9xgHx.png);
}
</style>
