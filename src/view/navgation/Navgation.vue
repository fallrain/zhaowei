<template>
  <div class="navation-par">
    <div class="navgation-tab-par">
      <h-button-tab
        :list="tabList"
        v-model="tabIndex"
      ></h-button-tab>
    </div>
    <div
      v-if="tabIndex===0"
      class="navgation-main"
    >
      <img class="img1" src="@/assets/img/navation3d@2x.png">
      <div class="btm-img-par">
        <img src="@/assets/img/bottom-bg@2x.png">
      </div>
    </div>
    <div
      v-else
      class="navgation-main"
    >
      <ol class="navgation-switch">
        <li class="navgation-switch-item active">1号厅</li>
        <li class="navgation-switch-item">2号厅</li>
      </ol>
      <img class="img2" src="@/assets/img/zhanting1@2x.png">
      <div class="btm-img-par">
        <img src="@/assets/img/bottom-bg@2x.png">
      </div>
    </div>
  </div>
</template>

<script>
import HButtonTab from '../../components/common/HButtonTab';

export default {
  name: 'Navgation',
  components: {
    HButtonTab
  },
  data () {
    return {
      tabIndex: 0,
      tabList: [
        {
          val: '室外3D图'
        },
        {
          val: '室内导航图'
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
