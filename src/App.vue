<template>
  <div id="app" class="app">
    <div class="app-container">
      <keep-alive
        :exclude="aliveExclude"
      >
        <router-view/>
      </keep-alive>
    </div>
    <footer class="app-footer">
     <span class="app-footer-inf">2019中国（青岛）国际软件融合创新博览会<br>www.ciscic.com</span>
    </footer>
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
