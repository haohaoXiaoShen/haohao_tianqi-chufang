import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入AXIOS
import axios from "axios"
Vue.prototype.axios = axios
// 引入 mint ui 组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入area 
import {
  Area
} from 'vant';

Vue.use(Area)
Vue.use(MintUI)
// 引入tabbar
import {
  Tabbar,
  TabItem
} from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
// 引入搜索
import {
  Search
} from 'vant';
import {
  Card
} from 'vant';

Vue.use(Card);

// 折叠面板
Vue.use(Search);
// 引入 Swipe
import {
  Swipe,
  SwipeItem
} from 'vant';

Vue.use(Swipe).use(SwipeItem);
// 弹出
import {
  Popup
} from 'vant';

Vue.use(Popup);

// vant
import {
  Button
} from 'vant';
Vue.use(Button);

import {
  NavBar
} from 'vant';
Vue.use(NavBar);
import {
  NoticeBar
} from 'vant';
Vue.use(NoticeBar);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')