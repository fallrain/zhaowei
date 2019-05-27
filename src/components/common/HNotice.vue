<template>
  <div>
    <div class="HNotice-item">
      <p class="HNotice-item-type">
        <i :class="['iconfont',iconTypeCls]"></i>
        <span class="HNotice-item-type-inf">{{iconTypeInf}}</span>
      </p>
      <p class="HNotice-item-detail img100per" v-if="contentHtml" v-html="content"></p>
      <p class="HNotice-item-detail" v-else>{{content}}</p>
    </div>
    <div class="HNotice-btm">
      <span class="status" :style="{'color': isRead?'#3693DA':'#FF0000'}">
        <!--<i :style="{'background': isRead?'#3693DA':'#FF0000'}"></i>{{isRead?'已读':'未读'}}-->
      </span>
      <span class="time">{{time}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    iconType: {
      type: String
    },
    contentHtml: {
      type: Boolean,
      default: false
    },
    content: {
      type: String
    },
    isRead: {
      type: Boolean
    },
    time: {
      type: String
    }
  },
  data () {
    return {
    };
  },
  computed: {
    iconTypeCls () {
      const iconType = {
        urgent: 'icon-lingdang',
        'sys': 'icon-lingdang',
        'news': 'icon-diqiu-copy'
      };
      return iconType[this.iconType];
    },
    iconTypeInf () {
      const iconTypeInf = {
        'urgent': '紧急通知',
        'sys': '系统通知'
      };
      return iconTypeInf[this.iconType];
    }
  }
};
</script>
<style lang="scss">
  .HNotice-item {
    width: 100%;
    min-height: 89px;
    background: #fff;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    padding-top: 12px;
    padding-right: 4px;
    padding-bottom: 14px;
    padding-left: 4px;
    overflow: hidden;
  }

  .HNotice-item-type {
    padding-bottom: 6px;
    padding-left: 9px;
    border-bottom: 1px solid #E4E3E6;
    color: #333;
    font-size: 16px;
    .iconfont {
      font-size: 15px;
      color: #41A0E9;
    }
  }

  .HNotice-item-type-inf {
    margin-left: 4px;
  }

  .HNotice-item-detail {
    font-size: 14px;
    padding-top: 12px;
    padding-right: 16px;
    padding-left: 16px;
    color: #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .HNotice-btm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    margin-top: 6px;
    .status {
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        margin-right: 4px;
      }
    }
    .time {
      color: #999;
    }
  }
</style>
