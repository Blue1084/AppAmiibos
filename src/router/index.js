import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import AllAmiibos from '@/components/AllAmiibos'
import Amiibo from '@/components/Amiibo'
import Chat from '@/components/Chat'
import FranchiseCollections from '@/components/FranchiseCollections'
import Franchise from '@/components/Franchise'
import store from '../store'
import Login from '@/components/Login'
import YarnsAmiibos from '@/components/YarnsAmiibos'
import CardsAmiibos from '@/components/CardsAmiibos'
import FiguresAmiibos from '@/components/FiguresAmiibos'





Vue.use(VueRouter)

const router = new VueRouter({ //creamos una constante por que estamos haciendo referencia al router en 
    routes: [{ //en la seccion de beforEach. Ahora podemos guardar en la constante lo que renderiza el beforeEach


            path: "/AllAmiibos",
            component: AllAmiibos
        },
        {
            path: "/Chat",
            component: Chat,
            meta: {
                autentificado: true
            }
        },
        {
            path: "/FranchiseCollections",
            component: FranchiseCollections
        },
        {
            path: "/Amiibo/:unixTimestamp", //dynamic routing (se utiliza para enlazar un elemento con una vista vue)
            component: Amiibo,
            props: true
        },
        {
            path: "/Franchise/:franchise",
            component: Franchise,
            props: true
        },
        {
            path: "/Login",
            component: Login,

        },
        {
            path: "/YarnsAmiibos",
            component: YarnsAmiibos,

        },
        {
            path: "/CardsAmiibos",
            component: CardsAmiibos,

        },
        {
            path: "/FiguresAmiibos",
            component: FiguresAmiibos,

        },

    ]
})

router.beforeEach((to, from, next) => { //beforeEach antes de acceder a cada ruta comprueba los parametros indicados
    //to a donde vas from de donde vienes y next se puede validarse como true o false para dar paso o no dependiendo del estado (si estas login o no )
    let usuario = store.state.user;
    console.log(usuario)
    //true si me he identificado si no devuelve false o null. si si esta identificado esto devolvera los datos de un usuario 
    //ponemos store para recibir el usuario desde el store
    let authenticator = to.matched.some(record => record.meta.autentificado) // el metodo some testea si al menos uno de esos elementos corresponde
    // estrellamos cada uno de los registros (record) de el router y preguntando si alguno de ellos requiere autentificacion.
    if (authenticator && !usuario) { //con este if le digo que si la ruta necesita autentificacion y no tiene usuario entonces lo devuelva al login
        next({
            path: '/Login'
        })
    }
    next();



})

export default router; // debido a que hemos tenido que referenciar router hemos tenido que 
// exportarlo desde aqui.