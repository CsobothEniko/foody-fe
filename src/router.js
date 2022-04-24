import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Registration from './components/Registration.vue';
import Forgot from './components/Forgot.vue';

import Ch from './ch/Ch.vue';
import AddCh from './ch/AddCh.vue';
import EditCh from './ch/EditCh.vue';

import Protein from './protein/Protein.vue';
import EditProtein from './protein/EditProtein.vue';
import AddProtein from './protein/AddProtein.vue';

import Fruit from './fruit/Fruit.vue';
import AddFruit from './fruit/AddFruit.vue';
import EditFruit from './fruit/EditFruit.vue';

import Fat from './fat/Fat.vue';
import AddFat from './fat/AddFat.vue';
import EditFat from './fat/EditFat.vue';

import Vegetable from './vegetable/Vegetable.vue';
import AddVegetable from './vegetable/AddVegetable.vue';
import EditVegetable from './vegetable/EditVegetable.vue';

import MainCrud from './components/MainCrud.vue';
import Plan from './plan/Plan.vue';
import Breakfast from './plan/Breakfast.vue';
import Lunch from './plan/Lunch.vue';
import Dinner from './plan/Dinner.vue';
import Sum from './plan/Sum.vue';

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

        {path: "/protein",name: "protein", component: Protein},
        {path: "/addProtein",name: "addProtein", component: AddProtein},
        {path: "/editProtein/:id",name: "editProtein", component: EditProtein},

        {path: "/fruit",name: "fruit", component: Fruit},
        {path: "/editFruit/:id",name: "editFruit", component: EditFruit},
        {path: "/addFruit",name: "addFruit", component: AddFruit},

        {path: "/fat",name: "fat", component: Fat},
        {path: "/editFat/:id",name: "editFat", component: EditFat},
        {path: "/addFat",name: "addFat", component: AddFat},

        {path: "/vegetable",name: "vegetable", component: Vegetable},
        {path: "/editVegetable/:id",name: "editVegetable", component: EditVegetable},
        {path: "/addVegetable",name: "addVegetable", component: AddVegetable},

        {path: "/mainCrud",name: "mainCrud", component: MainCrud},

        {path: "/breakfast",name: "breakfast", component: Breakfast},
        {path: "/lunch",name: "lunch", component: Lunch},
        {path: "/dinner",name: "dinner", component: Dinner},

        {path: "/plan",name: "plan", component: Plan},
        {path: "/sum",name: "sum", component: Sum},
    ]
})