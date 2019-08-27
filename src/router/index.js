import Vue from 'vue'
import VueRouter from 'vue-router'
import Amiibo from '@/components/amiibo'
import Home from '@/components/Home'
import Test from '@/components/Test'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: "/",
            component: Home
        },
        {
            path: "/test",
            component: Test
        },
    ]
})