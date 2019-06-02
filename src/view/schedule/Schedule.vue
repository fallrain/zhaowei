<template>
  <div class="schedule-par">
    <ul>
      <li
        v-for="(item,i) in list"
        :key="i"
        class="schedule-item"
      >
        <div class="title">{{item.time}}</div>
        <ul class="time-line">
          <li
            v-for="(time,j) in item.children"
            :key="j"
            class="time-line-item"
          >
            <i class="iconfont icon-shijian"></i>
            <div class="time">{{time.time}}</div>
            <div class="cnt">{{time.cnt}}</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  data () {
    return {
      list: [
        {
          time: '2019年5月7号',
          children: [
            {
              time: '9:30--10:30',
              cnt: '开幕式入场，嘉宾入场'
            },
            {
              time: '10:30--11:30',
              cnt: '领导讲话，各展区介绍'
            },
            {
              time: '12:30',
              cnt: '吃饭，休息'
            },
            {
              time: '13:30--17:30',
              cnt: '领导讲话，各展区介绍'
            }
          ]
        },
        {
          time: '2019年5月8号',
          children: [
            {
              time: '9:30--10:30',
              cnt: '开幕式入场，嘉宾入场'
            },
            {
              time: '10:30--11:30',
              cnt: '领导讲话，各展区介绍'
            },
            {
              time: '12:30',
              cnt: '吃饭，休息'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
