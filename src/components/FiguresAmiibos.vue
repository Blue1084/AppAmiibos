<template>
  <div>
    <button class="arriba" @click="$router.go(-1)">&#60;Back</button>
    <div clas="bodyFigures" v-for=" a in amiibosFigures" :key="a">
      <router-link class="contenido" :to="'/Amiibo/' + a.upc">
        <img class="amiibo" :src="'https://nintendo.com/' + a.figureURL" alt />
        <p class="name" v-html="a.amiiboName"></p>
      </router-link>
    </div>
    <button class="abajo" @click="$router.go(-1)">&#60;Back</button>
  </div>
</template>
<script>
export default {
  computed: {
    amiibosFigures() {
      return this.$store.getters.getamiiboStore.filter(a => a.type == "Figure");
    }
  }
};
</script>
<style scoped>
.arriba {
  margin-top: 50px;
}
.abajo {
  margin-bottom: 50px;
  float: right;
}
.amiibo {
  height: 300px;
  width: 300px;
  align-content: center;
  margin-left: 20px;
}
.bodyFigures {
  display: flex;
  justify-items: center;
}
p {
  text-decoration: none;
  color: black;
  text-align: center;
}
</style>
