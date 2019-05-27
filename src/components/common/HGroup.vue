<template>
  <div class="HGroup">
    <slot></slot>
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
  .HGroup {
    margin-top: 4px;
    .HCell {
      border-bottom: 1px solid #E4E3E6;
    }
    .HCell:last-child {
      border-bottom: none;
    }
  }
</style>
