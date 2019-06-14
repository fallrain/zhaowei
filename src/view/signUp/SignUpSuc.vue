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
          <li class="signSuc-item">
          </li>
        </ol>
        <div class="signSuc-img-par">
          <img class="signSuc-img" :src="form.qrCodePath">
        </div>
        <div class="signSuc-btm">
          恭喜您，报名成功！
          以上为您的参会入场二维码。
          入场时需出示给工作人员确认。
        </div>
        <div
          v-if="!hadUpload"
          class="InformationWallForm-img-par"
        >
          <span class="name">上传证件照：</span>
          <div
            v-show="form.imgUrl"
            class="InformationWallForm-preshow"
          >
            <i class="iconfont del icon-shanchu" @click="delImg"></i>
            <img
              :src="form.imgUrl"
            >
          </div>
          <vue-core-image-upload
            v-show="!form.imgUrl"
            class="btn btn-primary"
            :crop="false"
            inputOfFile="file"
            @imageuploaded="imageUploaded"
            :max-file-size="1024*1024*5"
            :maxWidth="1280"
            :compress="70"
            extensions="png,jpg,jpeg"
            inputAccept="image/jpg,image/jpeg,image/png"
            :url="uploadUrl"
            :multiple-size="1"
            @errorhandle="uploadError"
          >
            <h-upload></h-upload>
          </vue-core-image-upload>
          <button
            type="button"
            class="signSuc-upbtn"
            @click="submit"
          >上传
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Group, XInput} from 'vux';
import HCheckbox from '../../components/common/HCheckbox';
import VueCoreImageUpload from 'vue-core-image-upload';
import HUpload from '../../components/common/HUpload';

export default {
  name: 'signUp',
  components: {
    HCheckbox,
    Group,
    XInput,
    HUpload,
    VueCoreImageUpload
  },
  data () {
    return {
      form: {
        name: '',
        companyName: '',
        userCode: '',
        qrCodePath: '',
        imgUrl: ''
      },
      hadUpload: false,
      uploadUrl: '/rbh/document/uploadWithZip'
    };
  },
  created () {
    this.getOneSignUpInfo();
  },
  methods: {
    async submit () {
      if (this.form.imgCode) {
        const data = await this.axPostJson(
          'signUp/saveSignInfo',
          {
            'headphoto': {
              docId: this.form.imgCode
            },
            id: this.form.id
          }
        );
        if (data.code === '200') {
          this.$vux.toast({
            title: '上传证件成功'
          });
        }
      }
    },
    async getOneSignUpInfo () {
      const {code, value} = await this.axPostJson('signUp/getOneSignUpInfo');
      if (code === '200') {
        const content = value.content;
        this.form.id = content.id;
        this.form.name = content.name;
        this.form.companyName = content.companyName;
        this.form.userCode = content.userCode;
        this.form.qrCodePath = 'http://rbhmgr.nonggaogroup.com/filetemp/' + content.qrCodePath;
        this.hadUpload = !!content.picUrl;
      }
    },
    imageUploaded (r) {
      if (r.code === '200') {
        const data = r.value;
        this.form.imgUrl = data.url;
        this.form.imgCode = data.docId;
      }
    },
    uploadError (res) {
      const errorObj = {
        'FILE IS TOO LARGER MAX FILE IS': '图片最大不能超过5M'
      };
      for (let p in errorObj) {
        if (new RegExp(p).test(res)) {
          this.$vux.toast.show({
            type: 'text',
            text: errorObj[p]
          });
          return;
        }
      }
      this.$vux.toast.show({
        type: 'text',
        text: '上传失败'
      });
    },
    delImg () {
      /* 删除图片 */
      this.form.imgUrl = '';
      this.form.imgCode = '';
    }
  }
};
</script>

<style lang="scss">
  .signUp-par {
    .weui-cells {
      margin-top: 12px;
      font-size: 14px;
    }

    .weui-cell {
      padding-top: 3px;
      padding-bottom: 3px;
      padding-left: 16px;
    }

    .HCheckbox-icon {
      color: #979797;
      margin-right: 4px;
    }

    .HCheckbox-item {
      width: 45%;
      margin-right: 0;
      margin-top: 4px;

      &:nth-child(odd) {
        width: 55%;
      }
    }
  }
</style>
