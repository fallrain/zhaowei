<template>
<div class="HPaper">
  <div
    v-if="headHandle"
    class="HPaper-head-handle"
  ></div>
  <div
    v-if="headTransition"
    class="HPaper-head-transition"
  ></div>
  <slot></slot>
  <footer class="HPaper-foot">
    <img src="@/assets/img/down-arrows@2x.png">
  </footer>
</div>
</template>

<script>
export default {
  props: {
    headHandle: {
      type: Boolean,
      default: false
    },
    headTransition: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>

</style>
