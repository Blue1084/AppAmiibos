<template>
  <div id="app" class="row">
    <!-- <div v-for="(amiibo,i) in filtercards" :key="i">
      <amiibo :amiibo="amiibo"></amiibo>
    </div>
    <div v-for="(amiibo,j) in filterfigures" :key="j">
      <amiibo :amiibo="amiibo"></amiibo>
    </div>
    <div v-for="(amiibo,k) in filteryarns" :key="k">
      <amiibo :amiibo="amiibo"></amiibo>
    </div>-->

    <div class="contenido container col-5" v-for="(a, index) in amiibos" :key="index">
      <img class="amiibo" :src="'https://nintendo.com/' + a.figureURL" alt />
      <!--ponemos  https://nintendo.com/  para llamar a la seccion de la figura por que en la api tenemos una string de texto de una url inacabada
      y para que el src la pueda coger necesitamos ponerle el inicio de la url para que pueda localizarla y traerla-->
      <p class="name">{{a.amiiboName}}</p>
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
  // computed: {
  //   filtercards() {
  //     return this.amiibos.filter(amiibo => amiibo.type == "Card");
  //   },
  //   filterfigures() {
  //     return this.amiibos.filter(amiibo => amiibo.type == "Figure");
  //   },
  //   filteryarns() {
  //     return this.amiibos.filter(amiibo => amiibo.type == "Yarn");
  //   }
  // }
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
