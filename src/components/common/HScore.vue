<template>
  <ol class="HScore">
    <li
      class="HScore-star"
      v-for="index in num"
      :key="index"
      @click="setStar(index)"
    >
      <i :class="['iconfont','icon-iconfontxingxing',index <= value && 'active']"></i>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'HScore',
  props: {
    num: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    noClick: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setStar (index) {
      if (this.noClick) {
        return;
      }
      /* 设置星星数 */
      this.$emit('input', index);
    }
  }
};
</script>

<style lang="scss">
  .HScore {
    display: inline;
    font-size: 0;

    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .HScore-star {
    display: inline-block;
    color: #C0C0C0;

    .iconfont {
      font-size: 24px;

      &.active {
        color: #F0C000;
      }
    }
  }
</style>
