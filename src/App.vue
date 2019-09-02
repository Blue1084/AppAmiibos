<template>
<body>
  <div class="navbar">
    <nav class="navbar navbar-light fixed-top" style="background-color: #ddeeff">
      <a href="#" class="navbar-brand">
        <img src="./assets/amiibo_logo.png" height="28" alt=" " />
      </a>
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          <router-link to="/home" class="nav-item nav-link active">Home</router-link>
          <router-link to="/GamesCollections" class="nav-item nav-link">Games collections</router-link>
          <router-link to="/Chat" class="nav-item nav-link">Chat</router-link>
        </div>
        <div class="navbar-nav ml-auto">
          <button id="login" class="button is-info" v-on:click="login">Login</button>
        </div>
      </div>
    </nav>
  </div>

  <div class="container routerview">
    <router-view></router-view>
  </div>

  <footer style="background-color: #ddeeff" class="navbar fixed-bottom">
    <div class="container">
      <div class="col-12 text-center">
        <div>
          <p class="footer-links font-weight-bold"></p>
          <p class="copyright text-black">&copy;2019 Blue1084@</p>
        </div>
      </div>
    </div>
  </footer>
</body>
</template>

<script>
export default {
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => alert("Logged"));
    }
  }
};
</script>

<style>
footer {
  height: 50px;
  display: flex;
  text-align: center;
  align-content: center;
}
.routerview {
  padding-top: 20px;
}
</style>
