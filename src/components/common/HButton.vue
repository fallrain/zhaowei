<template>
<button
  class="HButton"
  type="button"
  :style="{
    width:width+'px',
    height:height+'px',
    color:color
  }"
>
  {{cnt}}
</button>
</template>
<script>
export default {
  props: {
    color: {
      type: String
    },
    width: {
      default: 100
    },
    height: {
      default: 30
    },
    cnt: {
    }
  }
};
</script>
<style>

</style>
