import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import router from "./routes/index.js";
import i18n from "./i18n.js";
import {Avatar, Button, Card, Drawer, InputText, Menu, Menubar, SelectButton, Toolbar, Tooltip} from "primevue";


const app = createApp(App);

app
    .use(router)
    .use(i18n)
    .use(PrimeVue,
    {
            ripple: false,
            theme:{
                preset: Aura,
               options:{
                    darkModeSelector: false,
               }
                }
            }
        )
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-drawer', Drawer)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-tooltip', Tooltip)
    .component('pv-image', Image)
    .component('pv-input-text', InputText)

    .mount('#app');
