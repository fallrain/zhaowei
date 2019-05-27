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
            v-model="form.phone"
            placeholder="联系方式"
          ></x-input>
        </group>
        <group>
          <x-input
            title=""
            v-model="form.work"
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
            v-model="filedVals"
          ></h-checkbox>
        </div>
        <div class="signUp-question-card signUp-question-card">
          <p class="signUp-question-card-title">意向对接企业 <span>(可多选)</span></p>
          <h-checkbox
            :data="companyList"
            v-model="companyVals"
          ></h-checkbox>
        </div>
      </div>
      <div class="signUp-btn-par">
        <button
          type="button"
          class="signUp-btn"
          @click="submit"
        >提交</button>
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
        phone: '',
        work: '',
        duty: '',
        filed: '',
        company: ''
      },
      filedList: [
        {
          label: '1.人工智能'
        },
        {
          label: '2.工业互联网'
        },
        {
          label: '3.工业软件/工业APP'
        },
        {
          label: '4.智慧城市'
        },
        {
          label: '5.大数据和云计算'
        },
        {
          label: '6.移动通信'
        },
        {
          label: '7.虚拟现实'
        },
        {
          label: '8.信息安全'
        },
        {
          label: '9.物联网'
        },
        {
          label: '10.3D打印'
        },
        {
          label: '11.区块链'
        },
        {
          label: '12.IC设计'
        },
        {
          label: '13.海洋信息'
        }
      ],
      filedVals: [],
      companyList: [
        {
          label: '1.海尔'
        },
        {
          label: '2.海信'
        },
        {
          label: '3.华通'
        },
        {
          label: '4.ABB'
        },
        {
          label: '5.华录'
        },
        {
          label: '6.东华'
        },
        {
          label: '7.建投'
        },
        {
          label: '8.其他'
        }
      ],
      companyVals: []
    };
  },
  methods: {
    submit () {
      /* 提交 */
      this.$router.replace({
        name: 'SignUpSuc'
      });
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
