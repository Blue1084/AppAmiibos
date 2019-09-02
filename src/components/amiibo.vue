<template>
  <div id="app" v-for="(a, index) in amiibos" :key="index">
    <div class="picture" :style="'background-color:'+a.hexCode">
      <img class="amiibo" :src="'https://nintendo.com/' + a.figureURL" alt />
      <p>{{a.overviewDescription}}</p>

      <p>{{a.}}</p>
      <img :src="'https://nintendo.com/' + a.boxArtUrl" alt />
      <h1 v-html="a.price"></h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getAmiibos");
  },
  computed: {
    amiibos() {
      return this.$store.getters.getamiiboStore;
    }
  }
};
</script>

<style>
.picture {
  height: 100%;
  width: 100%;
  text-align: center;
  border-style: solid;
  border-color: lightslategrey;
  padding-top: 20px;
}
</style>
