import Vue from 'vue'
import VueRouter from 'vue-router'
// import Amiibo from '@/components/Amiibo'
import Home from '@/components/Home'

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
        // {
        //     path: "/Amiibo",
        //     component: Amiibo
        // },
    ]
})