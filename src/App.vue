<template>
  <div id="app" class="container">
    <!-- <div v-for="(amiibo,i) in filtercards" :key="i">
      <amiibo :amiibo="amiibo"></amiibo>
    </div>
    <div v-for="(amiibo,j) in filterfigures" :key="j">
      <amiibo :amiibo="amiibo"></amiibo>
    </div>
    <div v-for="(amiibo,k) in filteryarns" :key="k">
      <amiibo :amiibo="amiibo"></amiibo>
    </div>-->
    <!-- <div v-for="a in amiibos2" :style="'background-color:'+a.hexCode">
      <img :src="'https://nintendo.com/' + a.boxArtUrl" alt />
      <img :src="'https://nintendo.com/' + a.figureURL" alt />
      <h1 v-html="a.price"></h1>
    </div>-->

    <router-link to="/test">
      <h2>Test</h2>
    </router-link>
    <router-link to="/">
      <h2>Home</h2>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import amiibo from "./components/amiibo.vue";

export default {
  name: "app",
  components: {
    amiibo
  },
  data() {
    return {
      amiibos: [],
      amiibos2: []
    };
  },
  methods: {
    getamiibo() {
      axios.get("https://www.amiiboapi.com/api/amiibo/").then(data => {
        this.amiibos = data.data.amiibo;
      });
    },
    getData() {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://www.nintendo.com/content/noa/en_US/amiibo/line-up/jcr:content/root/responsivegrid/lineup.model.json"
        )
        .then(data => (this.amiibos2 = data.data.amiiboList));
    }
  },
  created() {
    // this.getamiibo();
    this.getData();
  },
  computed: {
    filtercards() {
      return this.amiibos.filter(amiibo => amiibo.type == "Card");
    },
    filterfigures() {
      return this.amiibos.filter(amiibo => amiibo.type == "Figure");
    },
    filteryards() {
      return this.amiibos.filter(amiibo => amiibo.type == "Yarn");
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
