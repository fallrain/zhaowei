export default {
  methods: {
    getSdkCfg () {
      /*return this.axPost(
        'wx/mp/jssdk/signature',
        null,
        {
          j_sub_system: sessionStorage.getItem('ownerSimpleCode'),
          url: location.href
        }
      ).then(r => {
        if (r.code === '200') {
          const data = r.value;
          const cfg = {
            // debug: true,
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名
            jsApiList: ['chooseWXPay']
          };
          this.$wechat.config(cfg);
          this.$wechat.ready(() => {
          });
        }
      });*/
    }
  }
};
