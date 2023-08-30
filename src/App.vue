<script>
import TheHeader from "./components/TheHeader.vue";
import TheHomeUser from "./components/TheHomeUser.vue";
import TheMain from "./components/TheMain.vue";

export default {
  components: {
    TheHomeUser,
    TheHeader,
    TheMain,
  },
};
</script>

<template>
  <TheHomeUser></TheHomeUser>
  <TheHeader></TheHeader>
  <TheMain></TheMain>
</template>

<style lang="scss"></style>
