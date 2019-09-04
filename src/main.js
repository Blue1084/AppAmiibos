import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.state.user = user;
  } else {
    store.state.user = null;
  }
})