<template>
  <div class="HSuggestion">
    <div class="HSuggestion-title">
      <label>发布时间：<span>{{titleVal}}</span></label>
      <button
        type="button"
        class="HSuggestion-del-btn"
        @click="delHandler(id)"
      ><i class="iconfont icon-shanchu1"></i>删除
      </button>
    </div>
    <p class="HSuggestion-cnt">
      {{question}}
    </p>
    <div
      v-if="answer"
      class="HSuggestion-answer"
    >
      物业回复：{{answer}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HSuggestion',
  props: {
    id: {
    },
    titleVal: {
      type: String
    },
    question: {
      type: String
    },
    answer: {
      type: String
    },
    delHandler: {
      type: Function
    }
  }
};
</script>

<style lang="scss">
  .HSuggestion {
    border-top: 14px solid #F8F8F8;
    border-bottom: 1px solid #D0D0D0;
    padding-right: 20px;
    padding-bottom: 16px;
    padding-left: 20px;
    background: #fff;
  }

  .HSuggestion-title {
    padding-top: 10px;
    padding-left: 4px;
    padding-bottom: 10px;
    padding-right: 1px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    font-size: 14px;
  }

  .HSuggestion-del-btn {
    width: 70px;
    height: 30px;
    color: #FF6666;
    font-size: 13px;
    border-radius: 15px;
    border: 1px solid #FF6666;
    background: #fff;
  }

  .HSuggestion-cnt {
    margin-top: 15px;
    margin-bottom: 15px;
    color: #333;
    font-size: 16px;
    max-height: 300px;
    overflow: hidden;
  }

  .HSuggestion-answer {
    position: relative;
    background: #F5F8FF;
    border-radius: 10px;
    line-height: 24px;
    color: #999;
    font-size: 14px;
    padding: 16px 19px 16px 13px;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 14px;
      top: -6px;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #F5F8FF;
      border-left: 6px solid transparent;
    }
  }
</style>
