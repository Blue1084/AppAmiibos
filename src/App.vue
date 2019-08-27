<template>
  <div>
    <router-link to="/inicial">
      <h2>inicial</h2>
    </router-link>
    <router-link to="/home">
      <h2>Home</h2>
    </router-link>
    <!-- <router-link to="/Amiibo">
      <h2>Amiibo/h2>
    </router-link>-->
    <router-link to="/Chat">
      <h2>Chat</h2>
    </router-link>
    <router-link to="/Loging">
      <h2>Loging</h2>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
