<template>
  <div class="HCell">
    <div class="HCell-cnt">
      <slot></slot>
    </div>
    <i
      v-if="hasIcon"
      :class="['iconfont',iconClass,'HCell-icon']"
      :style="{color:iconColor}"
    ></i>
  </div>
</template>
<script>
export default {
  props: {
    'hasIcon': {
      default: true
    },
    'iconClass': {
      default: 'icon-youjiantou1'
    },
    'iconColor': {
      default: '#707070'
    }
  }
};
</script>
<style lang="scss">
  .HCell {
    //position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 8px;
    padding-left: 10px;
    padding-right: 10px;
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .HCell-cnt {
    flex-grow: 1;
    word-break: break-all;
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .HCell-icon {
    //position: absolute;
    //font-size: 16px;
    //top: 50%;
    //transform: translateY(-50%);
    //right: 0;
  }
</style>
