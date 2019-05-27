<template>
  <div class="HEvent">
    <header class="HEvent-head">
      <span class="HEvent-head-eId">{{eId}}</span>
      <button
        v-if="isTask && !processed"
        type="button"
        class="handle"
      >处理
      </button>
      <span
        v-if="!isTask"
        :class="['HEvent-head-tag',headTag.cls]"
      >{{headTag.val}}</span>
    </header>
    <div @click="toDetail(data)">
      <div
        class="HEvent-cnt"
        v-if="question"
      >
        <ol>
          <li class="HEvent-cnt-item" v-if="isTask">
            <label class="name">上报人：</label><span class="val">{{question.reporter}}</span>
          </li>
          <li class="HEvent-cnt-item">
            <label class="name">上报时间：</label><span class="val">{{question.reportTime}}</span>
          </li>
          <li class="HEvent-cnt-item">
            <label class="name">事件分类：</label><span class="val">{{question.eventTypeName}}</span>
          </li>
          <li class="HEvent-cnt-item">
            <label class="name">上报留言：</label><span class="val">{{question.description}}</span>
          </li>
        </ol>
      </div>
      <div
        class="HEvent-cnt"
        v-if="processed"
      >
        <ol>
          <li class="HEvent-cnt-item">
            <label class="name">处理人：</label><span class="answerVal">{{handlerInfo.handler}}</span>
          </li>
          <li class="HEvent-cnt-item">
            <label class="name">处理时间：</label><span class="answerVal">{{handlerInfo.handlerTime}}</span>
          </li>
          <li class="HEvent-cnt-item">
            <label class="name">处理结果：</label><span class="answerVal">{{handlerInfo.replay}}</span>
          </li>
        </ol>
      </div>
    </div>
    <footer class="HEvent-footer">
      <div
        v-if="isTask && processed"
        class="HEvent-footer-btn-par active"
      >
        <h-score
          v-model="level"
          :noClick="true"
        ></h-score>
      </div>
      <div
        v-if="!isTask && processed"
        class="HEvent-footer-btn-par active"
      >
        <h-score
          v-model="level"
          :noClick="true"
        ></h-score>
        <button
          v-if="!isTask"
          type="button"
          class="HEvent-footer-btn"
          @click="toScore(data)"
        >重新评价
        </button>
      </div>
      <div
        class="HEvent-footer-btn-par"
        v-if="!isTask && !processed"
      >
        <button
          class="HEvent-footer-btn"
          type="button"
          @click="delEvent(eId)"
        >删除
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
import HScore from './HScore';

export default {
  name: 'HEvent',
  components: {HScore},
  props: {
    isTask: {
      type: Boolean,
      default: false
    },
    eId: {
      type: String
    },
    processed: {
      type: Boolean
    },
    data: {
      type: Object
    },
    question: {
      type: Object
    },
    handlerInfo: {
      type: Object
    },
    evaluateInfo: {
      type: Object
    },
    level: {
      type: Number
    },
    toScore: {
      type: Function,
      default: function () {}
    },
    delEvent: {
      type: Function,
      default: function () {}
    },
    toDetail: {
      type: Function,
      default: function () {}
    }
  },
  computed: {
    headTag () {
      const obj = {};
      if (this.processed) {
        obj.cls = 'active';
        obj.val = '已处理';
      } else {
        obj.cls = '';
        obj.val = '未处理';
      }
      return obj;
    }
  }
};
</script>

<style lang="scss">
  .HEvent {
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(208, 208, 208, 0.39);
    margin-top: 18px;
  }

  .HEvent-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 41px;
    border-bottom: 1px solid #F0F0F0;
    padding-right: 10px;
    padding-left: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    .handle {
      color: #5E8CF8;
      border: 1px solid #5E8CF8;
      width: 82px;
      height: 30px;
      border-radius: 15px;
      background: #fff;
      font-size: 14px;
    }
  }

  .HEvent-head-eId {
    font-size: 12px;
    color: #999;
  }

  .HEvent-head-tag {
    color: #FF6666;
    font-size: 14px;

    &.active {
      color: #5E8CF8;
    }
  }

  @mixin HEvent-cnt-pd {
    padding: 16px 10px;
  }

  .HEvent-cnt {
    @include HEvent-cnt-pd;
    border-bottom: 1px solid #F0F0F0;
  }

  .HEvent-cnt-item {
    display: flex;
    font-size: 14px;

    .name {
      width: 70px;
      color: #333;
      flex-shrink: 0;
    }

    .val {
      color: #999;
    }

    .answerVal {
      color: #5E8CF8;
    }
  }

  .HEvent-footer {
    padding-right: 12px;
    padding-left: 15px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .HEvent-footer-btn {
    width: 83px;
    height: 30px;
    border-radius: 15px;
    background: #fff;
    color: #FF6666;
    border: 1px solid #FF6666;
  }

  .HEvent-footer-btn-par {
    height: 45px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &.active {
      justify-content: space-between;

      .HEvent-footer-btn {
        color: #5E8CF8;
        border: 1px solid #5E8CF8;
      }
    }
  }
</style>
