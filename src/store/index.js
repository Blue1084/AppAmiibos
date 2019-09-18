import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import VueChatScroll from 'vue-chat-scroll'


Vue.use(VueChatScroll)
Vue.use(vuex)



export default new vuex.Store({
    state: { // es como si mandaramos la informacion a una base de datos
        amiibos: [],
        user: null

    },
    getters: {
        getamiiboStore(state) { //recibe la informacion directamente de state
            return state.amiibos; // no es necesario incluir this por que ya recibe la informacion directamente de state
        }
    },
    mutation: {
        setamiiboStore(state, payload) {
            state.amiibos = payload;

        }
    },
    actions: { // podemos hacer un fetch para tener toda la informacion directamente en el store
        getAmiibos(context) {
            axios('https://cors-anywhere.herokuapp.com/https://www.nintendo.com/content/noa/en_US/amiibo/line-up/jcr:content/root/responsivegrid/lineup.model.json').then(data => context.state.amiibos = data.data.amiiboList)

        },

    }

})