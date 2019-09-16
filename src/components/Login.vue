<template>
  <div class="bodylogin">
    <img src />
    <button class="button is-info botonlogin" v-on:click="login">
      <img src="../assets/google_bottom.png" />
    </button>
    <router-link :to="'/chat/'" class="botonchat">
      <button>
        <img class="backChat" src="../assets/mario_back.jpg" />
        Go to Chat
      </button>
    </router-link>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider);
    }
  },
  computed: {
    usuario() {
      return this.$store.state.user;
    }
  }
};
</script>
<style scoped>
img {
  width: 300px;
}

.bodylogin {
  height: 500px;
  width: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-right: 10px;
  flex-wrap: wrap;
  margin-top: 40px;
}
.botonchat {
  padding-top: 20px;
}
.backChat {
  height: 100px;
  width: 100px;
}
</style>
