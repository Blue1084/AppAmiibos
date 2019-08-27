import Vue from 'vue'
import VueRouter from 'vue-router'
// import Amiibo from '@/components/Amiibo'
import Home from '@/components/Home'
import Inicial from '@/components/Inicial'
import Chat from '@/components/Chat'
import Loging from '@/components/Loging'



Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: "/inicial",
            component: Inicial
        },
        {
            path: "/Home",
            component: Home
        },
        {
            path: "/Chat",
            component: Chat
        },
        {
            path: "/Loging",
            component: Loging
        },
        // {
        //     path: "/Amiibo",
        //     component: Amiibo
        // },
    ]
})