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
            <span>李学猫</span>
          </li>
          <li class="signSuc-item">
            <label class="signSuc-item-name">单位：</label>
            <span>建投数据科技（山东）有限公司</span>
          </li>
          <li class="signSuc-item">
            <label class="signSuc-item-name">编号：</label>
            <span>00004</span>
          </li>
        </ol>
        <div class="signSuc-img-par">
          <img class="signSuc-img">
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
