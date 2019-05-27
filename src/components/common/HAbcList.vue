<template>
  <div>
    <ol>
      <li
        v-for="(alphabetList,alphabet) in list"
        :key="alphabet"
      >
        <p class="HAbc-head">
          {{alphabet | toUpperCase}}
        </p>
        <ul class="HAbc-list">
          <li
            class="HAbc-item"
            v-for="(item,i) in alphabetList"
            :key="i"
            @click="itemClick(item)"
          >
            {{item.name}}
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Object
    }
  },
  data () {
    return {
      alphabets: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ#'
    };
  },
  methods: {
    itemClick (item) {
      this.$emit('item-click', item);
    }
  }
};
</script>
<style lang="scss">
  .HAbc-head {
    padding-left: 21px;
    font-size: 16px;
    color: #333232;
    background: #F8F8F8;
    height: 25px;
    line-height: 25px;
  }

  .HAbc-list {
    background: #fff;
    padding: 2px 20px;
  }

  .HAbc-item {
    padding: 16px 11px;
    font-size: 16px;
    color: #333232;
    border-bottom: 1px solid #E4E3E6;
    &:last-child{
      border-bottom: 0;
    }
  }
</style>
