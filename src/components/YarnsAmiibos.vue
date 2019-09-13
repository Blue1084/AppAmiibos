<template>
  <div>
    <button class="arriba" @click="$router.go(-1)">&#60;Back</button>
    <div clas="bodyYarns" v-for=" a in amiibosYarns" :key="a">
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
    amiibosYarns() {
      return this.$store.getters.getamiiboStore.filter(a => a.type == "Plush");
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
.bodyYarns {
  display: flex;
  justify-items: center;
}
p {
  text-decoration: none;
  color: black;
  text-align: center;
}
</style>
