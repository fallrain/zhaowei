<template>
  <title class="jhm-articleTitle">{{value}}</title>
</template>
<script>
export default {
  props: ['value', 'size']
};
</script>
<style lang="scss">
  .jhm-articleTitle {
    color: #333;
    font-size: 22px;
    font-weight: 600;
  }
</style>
