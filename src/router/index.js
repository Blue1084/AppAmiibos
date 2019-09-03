import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// import Amiibo from '@/components/Amiibo'
import Home from '@/components/Home'
import Amiibo from '@/components/Amiibo'
import Chat from '@/components/Chat'
import GamesCollections from '@/components/GamesCollections'



Vue.use(VueRouter)

export default new VueRouter({
    routes: [{


            path: "/Home",
            component: Home
        },
        {
            path: "/Chat",
            component: Chat
        },
        {
            path: "/GamesCollections",
            component: GamesCollections
        },
        {
            path: "/Amiibo/:upc",
            component: Amiibo,
            props: true
        },
    ]
})