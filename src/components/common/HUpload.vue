<template>
  <div class="HUpload">
    <i class="iconfont icon-jia HUpload-icon"></i>
  </div>
</template>
<script>
export default {
  name: 'HUpload'
};
</script>
<style lang="scss">
  .HUpload {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border: 1px dashed #bbb;
    text-align: center;
    border-radius: 6px;
  }

  .HUpload-icon {
    color: #bbb;
    font-size: 20px;
  }
</style>
