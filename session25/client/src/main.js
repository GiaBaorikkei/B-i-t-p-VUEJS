// import './assets/main.css'

import { library } from "@fortawesome/fontawesome-svg-core";

import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash,faPen);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
