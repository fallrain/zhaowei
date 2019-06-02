<template>
  <div>
    <ol class="HCheckbox-list">
      <li
        class="HCheckbox-item"
        v-for="(item,i) in data"
        :key="i"
        @click="checkboxClick(item.id)"
      >
        <i
          :class="['HCheckbox-icon','iconfont',value.some(v=>v===item.id)?'icon-guifanduoxuanxuanzhong':'icon-guifanduoxuanweixuanzhong']"></i>
        <span class="HCheckbox-cnt">{{item.label}}</span>
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
    value: {
      type: Array
    }
  },
  data () {
    return {};
  },
  methods: {
    checkboxClick (index) {
      const i = this.value.findIndex(v => index === v);
      if (i === -1) {
        this.value.push(index);
      } else {
        this.value.splice(i, 1);
      }
      this.$emit('input', this.value);
    }
  }
};
</script>
<style lang="scss">
  .HCheckbox-icon {
    color: #479FE3;
    margin-right: 8px;
  }

  .HCheckbox-cnt {
    font-size: 14px;
    color: #666;
  }

  .HCheckbox-list {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
  }

  .HCheckbox-item {
    font-size: 0;
    min-width: 80px;
    margin-right: 4px;
  }
</style>
