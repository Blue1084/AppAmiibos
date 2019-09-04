<template>
  <div>
    <div
      class="bodyfranchise"
      v-for="(franchise,index) in franchises"
      :key="franchise"
      v-if="franchise"
    >
      <!-- v-if='series' con esto le estamos diciendo que solo pinte las 
      que tengan contenido en serie. (si es null no los pintara).-->

      <router-link :to="'/Franchise/' + franchise.replace(' ', '')">
        <!-- remplace se utiliza para cambiar o remmplazar un elemento en este caso en concreto 
        lo utilizamos para quitar los espacios en el nombre de la serie-->
        <img
          class="sizeimage"
          :src="require('../assets/'+imagenFranchise(index)+'.png')"
          :alt="franchise"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageFranchise: []
    };
  },
  methods: {
    imagenFranchise(index) {
      return this.franchises[index].replace(" ", "");
    }
  },
  computed: {
    franchises() {
      return [
        ...new Set(this.$store.getters.getamiiboStore.map(a => a.franchise))
      ];
      //el map se utiliza para no repetir los elementos. crea un array  que contiene uno de cada elemento.
    }
    //siempre que necesitamos renderizar algo del store en el template lo ponemos en el computed
    //por que el computed siempre esta mirando si ha cambiado algo.
  }
};
</script>

<style scoped>
.sizeimage {
  height: auto;
  width: 300px;
  border-style: solid;
  border-color: darkgray;
  border-radius: 15px;
  padding: 15px;
}
.bodyfranchise {
  display: flex;
  justify-content: center;
  margin-bottom: 55px;
  margin-top: 25px;
}
</style>
