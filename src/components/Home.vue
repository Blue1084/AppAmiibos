<template>
  <div id="app" class="row">
    <div v-for="(amiibo,i) in filtercards" :key="i">
      <amiibo :amiibo="amiibo"></amiibo>
    </div>
    <div v-for="(amiibo,j) in filterfigures" :key="j">
      <amiibo :amiibo="amiibo"></amiibo>
    </div>
    <div v-for="(amiibo,k) in filteryarns" :key="k">
      <amiibo :amiibo="amiibo"></amiibo>
    </div>

    <div class="contenido container col-5" v-for="(a, index) in amiibos2" :key="index">
      <!-- <img :src="'https://nintendo.com/' + a.boxArtUrl" alt /> -->
      <img class="amiibo" :src="'https://nintendo.com/' + a.figureURL" alt />
      <p class="name" v-html="a.amiiboName"></p>
      <!-- <h1 v-html="a.price"></h1> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import amiibo from "@/components/Amiibo.vue";

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
    filteryarns() {
      return this.amiibos.filter(amiibo => amiibo.type == "Yarn");
    }
  }
};
</script>

<style>
.contenido {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 200px;
  width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.amiibo {
  height: 100%;
  width: auto;
}
.name {
  height: 50%;
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.name:hover {
  width: auto;
  white-space: initial;
  overflow: visible;
  cursor: pointer;
}
</style>
