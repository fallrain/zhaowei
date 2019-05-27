<template>
  <div class="articleAuthor">
    <span class="articleAuthor-item authorName">{{data.authorName}}</span>
    <span class="articleAuthor-item accountName">{{data.accountName}}</span>
    <span class="articleAuthor-item date">{{data.date}}</span>
  </div>
</template>
<script>
export default {
  props: ['data']
};
</script>
<style scoped lang="scss">
  .articleAuthor {
    line-height: 1;
    margin-bottom: 18px;
  }

  .articleAuthor-item {
    font-size: 14px;
  }

  .authorName {
    color: #B3B3B3;
  }

  .accountName {
    color: #576B95;
    margin-left: 17px;
  }

  .date {
    color: #B3B3B3;
    margin-left: 17px;
  }
</style>
