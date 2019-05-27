<template>
  <div id="app" class="app">
    <div class="app-container">
      <keep-alive
        :exclude="aliveExclude"
      >
        <router-view/>
      </keep-alive>
    </div>
    <!--<footer class="app-footer">
      <img
        class="app-footer-img"
        src="@/assets/img/zjkbank-logo@2x.png"
      ><span class="app-footer-inf"></span>
    </footer>-->
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'App',
  computed: mapState([
    'aliveExclude'
  ])
};
</script>
<style lang="less">
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/reset.less';
</style>
<style lang="scss">
  @import 'assets/css/base';
</style>
<style>
  @import 'assets/font/iconfont.css';
</style>
<style lang="scss">
  @import 'assets/css/common';
</style>
