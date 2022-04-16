import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Registration from './components/Registration.vue';
import Forgot from './components/Forgot.vue';
import Ch from './ch/Ch.vue';
import AddCh from './ch/AddCh.vue';
import EditCh from './ch/EditCh.vue';
import GetCh from './ch/GetCh.vue';
import Protein from './protein/Protein.vue';
import GetProtein from './protein/GetProtein.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home },
        {path: '/login', component: Login},
        {path: '/registration', component: Registration},
        {path: '/forgot', component: Forgot},
        {path: "/editCh/:id", name: "EditCh", component: EditCh },
        {path: "/addCh", name: "AddCh", component: AddCh },
        {path: "/ch",name: "Ch", component: Ch},
        {path: "/getCh",name: "getCh", component: GetCh},

        {path: "/protein",name: "protein", component: Protein},
        {path: "/getProtein",name: "getProtein", component: GetProtein}
    ]
})