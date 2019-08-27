<template>
  <div class="picture" :style="'background-color:'+a.hexCode">
    <!-- <img :src="amiibo.image">
   <h3>{{amiibo.character}}</h3>
    <p>{{amiibo.amiiboSeries}}</p>-->

    <h1>Hola</h1>
  </div>
</template>

<script>
export default {
  name: "amiibo",
  props: ["amiibo"]
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
