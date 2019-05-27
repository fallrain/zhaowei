import util from '@/lib/util/util';

const checkUrlUid = function () {
  return util.getUrlVal('uid');
};
const check = function () {
  const uid = localStorage.getItem('uid');
  if (!uid) {
    if (checkUrlUid()) {
      util.setUserInfToStorage();
      return true;
    } else {
      let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + process.env.app_id;
      const params = new Map([
        ['redirect_uri', window.encodeURIComponent(process.env.back_auth_url)],
        ['response_type', 'code'],
        ['scope', 'snsapi_userinfo'],
        ['state', window.encodeURIComponent(process.env.front_base_url + window.decodeURIComponent(util.getUrlVal('pageUrl')))]
      ]);
      params.forEach((v, key) => {
        url += '&' + key + '=' + v;
      });
      url += '#wechat_redirect';
      location.replace(url);
    }
  } else {
    return true;
  }
};

export default {check};
