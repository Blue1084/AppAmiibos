import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Amiibo from '@/components/Amiibo'
import Chat from '@/components/Chat'
import FranchiseCollections from '@/components/FranchiseCollections'
import Franchise from '@/components/Franchise'



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
            path: "/FranchiseCollections",
            component: FranchiseCollections
        },
        {
            path: "/Amiibo/:upc", //dynamic routing (se utiliza para enlazar un elemento con una vista vue)
            component: Amiibo,
            props: true
        },
        {
            path: "/Franchise/:franchise",
            component: Franchise,
            props: true
        },
    ]
})