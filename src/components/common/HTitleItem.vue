<template>
  <div :class="['HTitleItem',btmLine && 'btm-line']">
    <p class="HTitleItem-title">{{title}}</p>
    <div class="HTitleItem-cnt">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {

    },
    btmLine: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss">
  .HTitleItem {
    padding-top: 20px;
    // border-bottom: 6px solid #EFEEF5;
    &:last-child {
      border-bottom: none;
    }
    &.btm-line::after{
      content: '';
      display: block;
      height: 1px;
      background: #DFDBDB;
      width: percentage(337/375);
      margin-right: auto;
      margin-left: auto;
      margin-top: 14px;
    }
  }

  .HTitleItem-title {
    margin-left: 22px;
    border-left: 4px solid #4486FF;
    padding-left: 8px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: #333;
  }

  .HTitleItem-cnt {
    margin-top: 18px;
    padding-right: 30px;
    padding-left: 30px;
  }
</style>
