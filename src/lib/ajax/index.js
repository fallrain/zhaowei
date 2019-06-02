import Vue from 'vue';
import ax from 'axios';
import {LoadingPlugin, ToastPlugin} from 'vux';

Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);

ax.defaults = Object.assign(
  ax.defaults,
  {
    baseURL: process.env.base_url,
    method: 'post'
    /* transformResponse : [function(data){
      return data;
    }], */
  }
);
ax.interceptors.request.use(config => {
  if (!config.params) {
    config.params = {};
  }
  if (!config.data) {
    config.data = {};
  }
  config.params.openid = localStorage.getItem('openId');
  config.data.openid = localStorage.getItem('openId');
  Vue.$vux.loading.show();
  return config;
});
ax.interceptors.response.use(function (response) {
  // 关闭遮罩
  Vue.$vux.loading.hide();
  if (!(response.config.params && response.config.params.requestNoToast)) {
    if (response.data.code !== '200') {
      Vue.$vux.toast.show({
        type: 'text',
        text: response.data.message || '请求失败'
      });
    }
  }

  return response.data;
}, function (error) {
  ;
  Vue.$vux.loading.hide();
  // return Promise.reject(error);
  Vue.$vux.toast.show({
    type: 'text',
    text: '请求失败'
  });
  error.response.data = {
    data: {
      code: '06'
    }
  };
  return error.response.data;
});
const axGet = function (url, params) {
  return ax.get(url, {
    params: params
  });
};

const axPost = function (url, data, params) {
  return ax({
    url: url,
    data: data,
    params: params,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  });
};

const axPostJson = function (url, data, params) {
  return ax({
    url: url,
    data: data,
    params: params
  });
};
export default ax;

export {axGet, axPost, axPostJson};
