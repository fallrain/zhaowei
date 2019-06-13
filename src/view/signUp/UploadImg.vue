<template>
<div class="uploadImg">
  <div class="InformationWallForm-img-par">
    <span>上传证件照：</span>
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
      :max-file-size="1024*1024*20"
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
  </div>
</div>
</template>

<script>

import VueCoreImageUpload from 'vue-core-image-upload';
import HUpload from '../../components/common/HUpload';
export default {
  name: 'UploadImg',
  components: {
    HUpload,
    VueCoreImageUpload
  },
  data () {
    return {
      form: {
        imgUrl: ''
      },
      uploadUrl: '/rbh/document/uploadWithZip'
    };
  },
  methods: {
    imageUploaded (r) {
      if (r.code === '200') {
        const data = r.value;
        this.form.imgUrl = data.url;
        this.form.imgCode = data.docId;
      }
    },
    uploadError (res) {
      const errorObj = {
        'FILE IS TOO LARGER MAX FILE IS': '图片最大不能超过1M'
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

<style scoped>

</style>
