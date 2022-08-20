import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from "element-plus";
import store from "./store";
const app = createApp(App);
app
    .use(store)
    .use(router)
    .use(ElementPlus, { size: "mini" })
    .mount('#app');
