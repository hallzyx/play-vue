import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";

const checkInComponent = () => import("../registration/pages/check-in.component.vue");

const routes=[
    {
        path: '/home',
        name: 'home',
        component: HomeComponent,
    },
    {
        path: '/check-in',
        name: 'check-in',
        component: checkInComponent(),
    },
    {
        path: '/',
        redirect: '/home',
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default  router;