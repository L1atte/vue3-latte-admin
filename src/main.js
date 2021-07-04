import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import I18n from './language';
import './js/svg';
import SvgIcon from '@/components/Svgicon'
import './styles/main.scss'
//axios
import Axios from "axios"

const app = createApp(App)
//注入axios
app.config.globalProperties.$axios = Axios

app
  .use(store)
  .use(router)
  .use(Antd)
  .use(I18n)
  .component("svg-icon",SvgIcon)
  .mount("#app");
