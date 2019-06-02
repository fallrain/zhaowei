<template>
  <div class="signUp-par">
    <div class="sign-title-par">
      <p class="sign-title">2019中国（青岛）</p>
      <p class="sign-title-cnt">国际软件融合创新博览会</p>
    </div>
    <div class="signUp-question-par">
      <div class="signUp-question-title">
        参会报名<span class="signUp-question-title-tip">（请填写以下报名信息）</span>
      </div>
      <div class="signUp-question-body">
        <group>
          <x-input
            title=""
            v-model="form.name"
            placeholder="姓名"
          ></x-input>
        </group>
        <group>
          <x-input
            title=""
            v-model="form.linkPhone"
            placeholder="联系方式"
          ></x-input>
        </group>
        <group>
          <x-input
            title=""
            v-model="form.companyName"
            placeholder="所在单位"
          ></x-input>
        </group>
        <group>
          <x-input
            title=""
            v-model="form.duty"
            placeholder="职务"
          ></x-input>
        </group>
        <div class="signUp-question-card">
          <p class="signUp-question-card-title">意向对接领域 <span>(可多选)</span></p>
          <h-checkbox
            :data="filedList"
            v-model="form.filedVals"
          ></h-checkbox>
        </div>
        <div class="signUp-question-card signUp-question-card">
          <p class="signUp-question-card-title">意向对接企业 <span>(可多选)</span></p>
          <h-checkbox
            :data="companyList"
            v-model="form.companyVals"
          ></h-checkbox>
        </div>
      </div>
      <div class="signUp-btn-par">
        <button
          type="button"
          class="signUp-btn"
          @click="submit"
        >提交
        </button>
      </div>
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
        linkPhone: '',
        companyName: '',
        duty: '',
        filedVals: [],
        companyVals: []
      },
      filedList: [],
      companyList: []
    };
  },
  created () {
    this.getData();
    this.genVdt();
  },
  methods: {
    genVdt () {
      this.vdt = new this.HValidate({
        _this: this,
        formData: this.form,
        rules: {
          name: {
            'required': true,
            maxLength: 20
          },
          linkPhone: {
            'required': true,
            mobile: true
          },
          companyName: {
            'required': true,
            maxLength: 50
          },
          duty: {
            'required': true,
            maxLength: 10
          },
          filedVals: {
            'arrayRequired': true
          },
          companyVals: {
            'arrayRequired': true
          }
        },
        messages: {
          name: {
            'required': '姓名不能为空',
            maxLength: '职务最多20个字符'
          },
          linkPhone: {
            'required': '联系方式不能为空'
          },
          companyName: {
            'required': '单位不能为空',
            maxLength: '职务最多50个字符'
          },
          duty: {
            'required': '职务不能为空',
            maxLength: '职务最多10个字符'
          },
          filedVals: {
            'arrayRequired': '请选对接领域'
          },
          companyVals: {
            'arrayRequired': '请选对接企业'
          }
        }
      });
    },
    async getData () {
      const {code, value} = await this.axPostJson('signUp/initSignUp');
      if (code === '200') {
        if (value.havesign && value.havesign === 1) {
          this.$router.replace({
            name: 'SignUpSuc'
          });
          return;
        }
        this.filedList = value.industrys.map((v, i) => {
          return {
            id: v.id,
            label: (i + 1) + v.metaName
          };
        });
        this.companyList = value.likeCompanys.map((v, i) => {
          return {
            id: v.id,
            label: (i + 1) + v.metaName
          };
        });
      }
    },
    async submit () {
      /* 提交 */
      if (this.vdt.valid()) {
        const data = await this.axPostJson(
          'signUp/saveSignInfo',
          {
            industrys: this.form.filedVals.join(','),
            likeCompanys: this.form.companyVals.join(','),
            name: this.form.name,
            linkPhone: this.form.linkPhone,
            companyName: this.form.companyName,
            duty: this.form.duty
          }
        );
        if (data.code === '200') {
          this.$router.replace({
            name: 'SignUpSuc'
          });
        }
      }
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
