// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import filtersMap from './filter';
// import mixin from './mixin';
import ax, {axGet, axPost} from '@/lib/ajax';
import util from '@/lib/util/util';
import hValidate from '@/lib/hValidate/hValidate';
import store from './store';
import {
  AlertPlugin,
  WechatPlugin,
  ConfirmPlugin
} from 'vux';
// 跳转回来的时候，重置uid等信息
if (util.getUrlVal('uid')) {
  util.setUserInfToStorage();
}
Vue.use(AlertPlugin);
Vue.use(WechatPlugin);
Vue.use(ConfirmPlugin);

Vue.config.productionTip = false;
// 注册filter
Object.keys(filtersMap).forEach(filterName => {
  Vue.filter(filterName, filtersMap[filterName]);
});
// 全局混入
// Vue.mixin(mixin);

Vue.prototype.ax = ax;
Vue.prototype.axGet = axGet;
Vue.prototype.axPost = axPost;
Vue.prototype.hUtil = util;
Vue.prototype.HValidate = hValidate;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  created () {
  },
  template: '<App/>'
});
