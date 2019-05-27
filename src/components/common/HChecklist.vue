<template>
  <div :class="['HChecklist',isSuccess && 'sucesss',isReverse && 'reverse']">
    <check-icon
      :value.sync="tempVal"
      @click.native="checkClick"
    ></check-icon>
    <div class="HChecklist-cnt">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {
  CheckIcon
} from 'vux';

export default {
  components: {
    CheckIcon
  },
  props: {
    checkVal: {},
    isSuccess: {
      default: false
    },
    isReverse: {
      default: false
    }
  },
  data () {
    return {
      tempVal: this.checkVal
    };
  },
  watch: {
    checkVal (val) {
      this.tempVal = val;
    },
    tempVal (val) {
      this.$emit('update:checkVal', val);
    }
  },
  methods: {
    checkClick () {
      this.$emit('check-click', this.tempVal);
    }
  }
};
</script>
<style>

</style>
