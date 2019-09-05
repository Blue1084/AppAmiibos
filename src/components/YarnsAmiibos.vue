<template>
  <div>
    <div clas="bodyYarns" v-for="(a,p) in amiibosYarns" :key="p">
      <!-- <img class="amiiboimg" :src="'https://nintendo.com/' + a.figureURL" alt /> -->
      <div>{{a}}</div>
    </div>
  </div>
</template>
<script>
export default {
  //   created() {
  //     this.$store.dispatch("getAmiibos");
  //   },

  computed: {
    amiibosYarns() {
      return this.$store.getters.getamiiboStore.filter(a => a.type == "Yarns");
    }
  }
};
</script>
<style scoped>
</style>
