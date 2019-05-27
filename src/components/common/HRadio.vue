<template>
  <div>
    <ol class="HRadio-list">
      <li
        class="HRadio-item"
        v-for="(item,i) in data"
        :key="i"
        @click="radioClick(i)"
      >
        <i :class="['HRadio-icon','iconfont',value===i?'icon-danxuan':'icon-guanbi']"></i>
        <span class="HRadio-cnt">{{item.label}}</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
    },
    value: {}
  },
  data () {
    return {};
  },
  methods: {
    radioClick (index) {
      this.$emit('input', index);
    }
  }
};
</script>
<style lang="scss">
  .HRadio-icon {
    color: #479FE3;
    margin-right: 8px;
  }

  .HRadio-cnt {
    font-size: 14px;
    color: #666;
  }

  .HRadio-list {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
  }

  .HRadio-item{
    font-size: 0;
    min-width: 80px;
    margin-right: 4px;
  }
</style>
