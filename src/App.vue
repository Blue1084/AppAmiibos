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
        <div class="btn-group">
          <button
            class="btn btn-sm dropdown-toggle botonamiibo"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Amiibos</button>
          <div class="dropdown-menu">
            <router-link
              to="/AllAmiibos"
              class="nav-item nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >All Amiibos</router-link>
            <router-link
              to="/YarnsAmiibos"
              class="nav-item nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >Yarns</router-link>
            <router-link
              to="/CardsAmiibos"
              class="nav-item nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >Cards</router-link>
            <router-link
              to="/FiguresAmiibos"
              class="nav-item nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >Figures</router-link>
          </div>
        </div>

        <div class="navbar-nav">
          <router-link
            to="/FranchiseCollections"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >Fanchise collections</router-link>
          <router-link
            to="/Chat"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >Chat</router-link>
        </div>
        <div class="navbar-nav ml-auto">
          <button
            id="login"
            class="button is-info"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            v-on:click="login"
            v-if="!usuario"
          >Login</button>
          <button
            id="logout"
            class="button is-info"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            v-on:click="logout"
            v-if="usuario"
          >Logout</button>
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
        .then();
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("AllAmiibos"));
    }
  },
  created() {
    this.$store.dispatch("getAmiibos");
  },
  computed: {
    usuario() {
      return this.$store.state.user;
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
.botonamiibo {
  padding-left: 0px;
}
</style>
