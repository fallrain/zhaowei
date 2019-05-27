<template>
<div class="HTextarea">
  <textarea
    class="HTextarea-ta"
    :placeholder="placeHolder"
    :maxlength="maxNumber"
    v-model="taValue"
  ></textarea>
  <p
    v-if="conuntMaxNumber"
    class="HTextarea-fontNumber"
  >{{taValueLength}}/{{maxNumber}}</p>
</div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    },
    conuntMaxNumber: {
      type: Boolean,
      default: true
    },
    maxNumber: {
      type: Number,
      default: 200
    },
    placeHolder: {
      type: String,
      default: '请输入'
    }
  },
  data () {
    return {
      taValue: this.value
    };
  },
  watch: {
    value (newV, oldV) {
      if (oldV !== newV) {
        this.taValue = newV;
      }
    },
    taValue (newV, oldV) {
      if (oldV !== newV) {
        this.$emit('input', newV);
        this.$emit('change', newV);
      }
    }
  },
  computed: {
    taValueLength () {
      return this.taValue.length;
    }
  }
};
</script>
<style lang="scss">
  .HTextarea-ta {
    width: 100%;
    height: 150px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #BBBBBB;
    resize: none;
    padding: 10px 14px;
    font-size: 14px;
    color: #999;
    -webkit-appearance: none;

  }

  .HTextarea-fontNumber {
    text-align: right;
    color: #999;
    font-size: 12px;
    letter-spacing: 1px;
  }
</style>
