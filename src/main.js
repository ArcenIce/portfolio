/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    OiHome,
    OiPerson,
    HiFolderOpen,
    BiMailbox,
    RiGithubLine,
    CoLinkedinIn
} from "oh-vue-icons/icons";

addIcons(
    OiHome,
    OiPerson,
    HiFolderOpen,
    BiMailbox,
    RiGithubLine,
    CoLinkedinIn,
    {
        name: 'logo-x',
        width: 380,
        height: 200,
        d: 'm236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z'
    }
);

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

registerPlugins(app)

app.mount('#app')
app.component("v-ico", OhVueIcon);
app.use(Particles, {
    init: async engine => { await loadSlim(engine); },
});