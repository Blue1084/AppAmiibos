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
          <router-link to="#" class="nav-item nav-link">Login</router-link>
        </div>
      </div>
    </nav>
  </div>

  <section>
    <router-view></router-view>
  </section>

  <footer style="background-color: #ddeeff" class="navbar fixed-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-center text-md-left">
          <div>
            <!-- <h3 class="my-4 text-white">
                
                <span class="mx-2 font-italic text-warning"></span>
            </h3>-->

            <p class="footer-links font-weight-bold">
              <router-link to="/home" class="text-black">Home</router-link>|
              <router-link to="/GamesCollections" class="text-black">Games Collections</router-link>|
              <router-link to="/Chat" class="text-black">Chat</router-link>|
              <router-link to="#" class="text-black">Login</router-link>
            </p>
            <p class="copyright text-black mb-4">&copy;2019 Blue1084@</p>
          </div>
        </div>

        <!-- <div class="col-md-4 text-white text-center text-md-left">
        <div class="py-2 my-4">-->
        <!-- <div>
                <p class="text-white">
                  <i class="fa fa-map-marker mx-2"></i>
                  309 - Rupa Solitaire,
                  Bldg. No. A - 1, Sector - 1
                  Mahape, Navi Mumbai - 400710
                </p>
        </div>-->

        <!-- <div>
                <p>
                  <i class="fa fa-phone mx-2"></i> +91 22-27782183
                </p>
        </div>-->
        <!-- <div>
                <p>
                  <i class="fa fa-envelope mx-2"></i>
                  <a href="mailto:support@eduonix.com">support@eduonix.com</a>
                </p>
              </div>
            </div>
        </div>-->

        <!-- <div class="col-md-4 text-white my-4 text-center text-md-left">
            <span class="font-weight-bold">About the Company</span>
            <p
              class="text-warning my-2"
            >We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
            <div class="py-2">
              <a href="#">
                <i class="fab fa-facebook fa-2x text-primary mx-3"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus fa-2x text-danger mx-3"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter fa-2x text-info mx-3"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube fa-2x text-danger mx-3"></i>
              </a>
            </div>
        </div>-->
      </div>
    </div>
  </footer>

  <!-- <router-link to="/Amiibo">
      <h2>Amiibo/h2>
  </router-link>-->
</body>
</template>

<script>
export default {};
</script>

<style>
</style>
