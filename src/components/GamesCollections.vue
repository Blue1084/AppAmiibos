<template></template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  methods: {
    change() {
      this.$store.commit("setUser", this.user);
    }
  },
  computed: {
    //siempre que necesitamos renderizar algo del store en el template lo ponemos en el computed
    //por que el computed siempre esta mirando si ha cambiado algo.
  }
};
</script>

<style>
</style>
