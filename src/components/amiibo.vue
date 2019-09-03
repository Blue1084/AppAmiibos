<template>
  <div>
    <div id="app">
      <div class="picture" :style="'background-color:'+amiibo.hexCode">
        <h2 class="name">{{amiibo.amiiboName}}</h2>
        <p>{{amiibo.series}}</p>
        <img class="amiibo" :src="'https://nintendo.com/' + amiibo.figureURL" alt />
        <p v-html="amiibo.overviewDescription"></p>
        <!-- colocamos v-html para transformar el formato y que html lo lea y lo muestre en el formato correcto -->
        <img :src="'https://nintendo.com/' + amiibo.boxArtUrl" alt />
        <!-- colocamos https://nintendo.com/ para completar la url de esta seccion en la api para que  
        nos lo pueda pintar-->
        <h3>{{amiibo.price}}$</h3>
      </div>
    </div>
    {{$route.params.upc}}
  </div>
</template>

<script>
export default {
  props: ["upc"],

  computed: {
    amiibo() {
      return this.$store.getters.getamiiboStore.find(a => a.upc == this.upc);
    }
  }
};
</script>

<style scoped>
.picture {
  height: 100%;
  width: 100%;
  text-align: center;
  border-style: solid;
  border-color: lightslategrey;
  padding-bottom: 20px;
}
.amiibo {
  width: 300px;
  height: 300px;
}
.name {
  margin-top: 50px;
}
</style>
