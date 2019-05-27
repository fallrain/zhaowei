<template>
  <div class="HButtonTab">
    <ol class="HButtonTab-list">
      <li
        :class="['HButtonTab-list-item',selectIndex===i && 'active']"
        v-for="(item,i) in list"
        :key="i"
        @click="itemClick(i)"
      >{{item.val}}
      </li>
    </ol>
  </div>
</template>
<script>
/*
    *event:on-item-click
    *
    * */

export default {
  model: {
    prop: 'activeIndex',
    event: 'updateActiveIndex'
  },
  props: {
    activeIndex: {
      type: Number
    },
    list: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      selectIndex: this.activeIndex || 0
    };
  },
  methods: {
    itemClick (i) {
      this.selectIndex = i;
      this.$emit('on-item-click', i);
    }
  },
  watch: {
    activeIndex (val) {
      this.selectIndex = val;
    },
    selectIndex (val) {
      this.$emit('updateActiveIndex', val);
    }
  }
};
</script>
<style lang="scss">
  .HButtonTab {
  }

  .HButtonTab-list {
    display: flex;
  }

  .HButtonTab-list-item {
    flex-grow: 1;
    font-size: 14px;
    color: #41A0E9;
    border: 1px solid #41A0E9;
    height: 26px;
    line-height: 26px;
    text-align: center;
    &.active {
      background: #41A0E9;
      color: #fff;
    }
    &:first-child {
      border-right: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
</style>
