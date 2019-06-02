<template>
  <div class="signUp-par">
    <div class="sign-title-par">
      <p class="sign-title">2019中国（青岛）</p>
      <p class="sign-title-cnt">国际软件融合创新博览会</p>
    </div>
    <div class="signUp-question-par">
      <div class="signUp-question-title">
        报名确认<!--<span class="signUp-question-title-tip">（请填写以下报名信息）</span>-->
      </div>
      <div class="signSuc-body">
        <ol>
          <li class="signSuc-item">
            <label class="signSuc-item-name">姓名：</label>
            <span>{{form.name}}</span>
          </li>
          <li class="signSuc-item">
            <label class="signSuc-item-name">单位：</label>
            <span>{{form.companyName}}</span>
          </li>
          <li class="signSuc-item">
            <label class="signSuc-item-name">编号：</label>
            <span>{{form.userCode}}</span>
          </li>
        </ol>
        <div class="signSuc-img-par">
          <img class="signSuc-img" :src="form.qrCodePath">
        </div>
      </div>
    </div>
    <div class="signSuc-btm">
      恭喜您，报名成功！
      以上为您的参会入场二维码。
      入场时需出示给工作人员确认。
    </div>
  </div>
</template>

<script>
import {Group, XInput} from 'vux';
import HCheckbox from '../../components/common/HCheckbox';
export default {
  name: 'signUp',
  components: {
    HCheckbox,
    Group,
    XInput
  },
  data () {
    return {
      form: {
        name: '',
        companyName: '',
        userCode: '',
        qrCodePath: ''
      }
    };
  },
  created () {
    this.getOneSignUpInfo();
  },
  methods: {
    async getOneSignUpInfo () {
      const {code, value} = await this.axPostJson('signUp/getOneSignUpInfo');
      if (code === '200') {
        const content = value.content;
        this.form.name = content.name;
        this.form.companyName = content.companyName;
        this.form.userCode = content.userCode;
        this.form.qrCodePath = 'http://rbhmgr.nonggaogroup.com/filetemp/' + content.qrCodePath;
      }
    }
  }
};
</script>

<style lang="scss">
  .signUp-par {
    .weui-cells{
      margin-top: 12px;
      font-size: 14px;
    }

    .weui-cell{
      padding-top: 3px;
      padding-bottom: 3px;
      padding-left: 16px;
    }

    .HCheckbox-icon{
      color: #979797;
      margin-right: 4px;
    }

    .HCheckbox-item{
      width: 45%;
      margin-right: 0;
      margin-top: 4px;
      &:nth-child(odd){
        width: 55%;
      }
    }
  }
</style>
