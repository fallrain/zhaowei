<template>
  <div v-show="show" @click="toQuery" class="HLoadmore">
    <load-more
      :show-loading="loadingType===1"
      :tip="loadingTip"
    ></load-more>
  </div>
</template>
<script>
import {
  LoadMore
} from 'vux';

export default {
  components: {
    LoadMore
  },
  props: [
    'show', // 是否显示
    'loadingType', // 显示状态
    'data', // 分页数据
    'query'// 查询函数
  ],
  data () {
    return {};
  },
  computed: {
    loadingTip () {
      let str;
      if (this.loadingType === 1) {
        str = '点击加载更多...';
      } else if (this.loadingType === 2) {
        str = '数据已到底部';
      } else {
        str = '未查询到数据';
      }
      return str;
    }
  },
  methods: {
    toQuery () {
      // 有加载更多状态才会查询
      if (this.loadingType !== 1) {
        return;
      }
      // 页码+1，
      ++this.data.pageNum;
      if (this.query) {
        this.query();
      }
    },
    queryBack (r, _this) {
      if (r.code === '200') {
        const data = r.value;
        _this.pageCfg.loadingShow = true;
        if (data.pages === _this.pageCfg.page.pageNum) {
          _this.pageCfg.loadingType = 2;// 加载完毕
        } else {
          _this.pageCfg.loadingType = 1;
        }
        if (data.total === 0) {
          _this.pageCfg.loadingType = 3;// 无数据
        }
      } else {
        _this.pageCfg.loadingShow = false;
      }
    }
  }
};
</script>
<style lang="scss">
  .HLoadmore {
    .weui-loadmore {
      margin-bottom: 0;
      padding-bottom: 17px;
    }
    .vux-loadmore.weui-loadmore_line:after,
    .vux-loadmore.weui-loadmore_line:before {
      content: "";
      border-top: 1px solid #ccc;
      top: .9em;
    }
    .weui-loadmore_line .weui-loadmore__tips {
      top: 0;
    }
    .weui-loadmore__tips {
      color: #ccc;
    }
    .weui-loading {
      display: none;
    }
    .weui-loadmore_line {
      margin-top: 17px;
    }
  }
</style>
