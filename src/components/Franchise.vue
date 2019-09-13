<template>
  <div>
    <div class="bodyfranchise">
      <button @click="$router.go(-1)">&#60;Back</button>
      <div class="amiiboFranchise" v-for="(a,i) in amiibos" :key="i">
        <h5 v-html="a.amiiboName"></h5>
        <router-link :to="'/Amiibo/' + a.upc">
          <img class="amiibo" :src="'https://nintendo.com/' + a.figureURL" alt />
        </router-link>
        <p>{{a.series}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["franchise"], // utilizamos props para pasar un valor inicial.
  computed: {
    amiibos() {
      return this.$store.getters.getamiiboStore.filter(a => {
        //con la propiedad filter le decimos que nos retorne
        //cada cada propiedad franchise de cada uno de los amiibos.
        if (a.franchise) {
          //para que no de error he tenido que colocar un if para que no muestre los null.
          return a.franchise.replace(" ", "") == this.franchise; //he tenido que poner aqui el replacepara
          //que coincida con el nombre de la propiedad puesto que en la seccion de gamescolections se los hemos quitado tambien.
        }
      });
    }
  }
};
</script>
<style scoped>
.bodyfranchise {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}
img {
  height: 200px;
  width: 200px;
}
.amiiboFranchise {
  height: auto;
  width: 350px;
  border-style: solid;
  border-radius: 10px;
  margin-bottom: 15px;
  border-color: darkgrey;
  margin-left: 15px;
}
button {
  float: left;
}
</style>