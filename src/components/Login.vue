<template>
  <div>
    <button id="login" class="button is-info botonlogin" v-on:click="login">Login</button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider);
    }
  }
};
</script>
<style scoped>
.botonlogin {
  margin-top: 300px;
  margin-left: 150px;
}
</style>