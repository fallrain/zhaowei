<template>
  <div class="contact-par btm-bg">
    <div class="contact-map" @click="showMap">
      <img src="@/assets/img/ditu.jpg">
    </div>
    <ol>
      <li
        class="contact-item"
        v-for="(item,i) in list"
        :key="i"
      >
        <span class="name">{{item.name}}</span>
        <a class="num" :href="'tel:'+item.num">
          <i class="iconfont icon-dianhua"></i>
          {{item.num}}
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      list: [
        {
          name: '市南区科技局',
          num: '88729024'
        },
        {
          name: '市北区科技局',
          num: '68620709'
        },
        {
          name: '崂山区工信局',
          num: '88999176'
        },
        {
          name: '西海岸新区工信局',
          num: '86168249'
        },
        {
          name: '保税区发改局',
          num: '86769351'
        },
        {
          name: '高新区经发局',
          num: '82020765'
        },
        {
          name: '李沧区发改局',
          num: '87619875'
        }
      ]
    };
  },
  methods: {
    showMap () {
      this.$wechat.openLocation({
        latitude: 36.1045955608, // 纬度，浮点数，范围为90 ~ -90
        longitude: 120.4730272293, // 经度，浮点数，范围为180 ~ -180。
        name: '', // 位置名
        address: '', // 地址详情说明
        scale: 1 // 地图缩放级别,整形值,范围从1~28。默认为最大
      });
    }
  }
};
</script>

<style scoped>

</style>
