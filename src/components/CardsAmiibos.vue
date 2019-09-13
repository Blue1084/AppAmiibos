<template>
  <div>
    <button class="arriba" @click="$router.go(-1)">&#60;Back</button>
    <div clas="bodyCards" v-for=" a in amiibosCards" :key="a">
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
    amiibosCards() {
      return this.$store.getters.getamiiboStore.filter(a => a.type == "Card");
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
.bodyCards {
  display: flex;
  justify-items: center;
}
p {
  text-decoration: none;
  color: black;
  text-align: center;
}
</style>