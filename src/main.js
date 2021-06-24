import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from "./App.vue";
import store from "./store";

import './assets/index.scss'

createApp(App)
  .use(store)
  .use(ElementPlus)
  .mount("#app");
