<template>
  <div>
    <input type="search" v-model="Search" placeholder="Search" />

    <div id="app" class="row">
      <div class="container col-5" v-for="(a, h) in filterAllAmiibos" :key="h">
        <router-link class="contenido" :to="'/Amiibo/' + a.upc">
          <img class="amiibo" :src="'https://nintendo.com/' + a.figureURL" alt />
          <p class="name" v-html="a.amiiboName"></p>
        </router-link>
      </div>

      <!--ponemos  https://nintendo.com/  para llamar a la seccion de la figura por que en la api tenemos una string de texto de una url inacabada
      y para que el src la pueda coger necesitamos ponerle el inicio de la url para que pueda localizarla y traerla-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Search: []
    };
  },
  created() {
    this.$store.dispatch("getAmiibos");
  },
  computed: {
    amiibos() {
      return this.$store.getters.getamiiboStore;
    },

    filterAllAmiibos() {
      return this.$store.getters.getamiiboStore.filter(a =>
        a.amiiboName.toLowerCase().includes(this.Search)
      );
    }
  }
};
</script>

<style scoped>
.contenido {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 200px;
  width: 150px;
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
  color: black;
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
input {
  margin-top: 50px;
}
</style>
