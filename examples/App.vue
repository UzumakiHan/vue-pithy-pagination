<template>
  <div id="app">
    <vue-pithy-pagination
      :allCount="allCount"
      :pageCount="pageCount"
      @getCurrentPage="getCurrentPage"
      @choosePage="choosePage"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      allCount: 101,
      pageCount: 10,
    };
  },
  components: {},
  methods: {
    getCurrentPage(currentPage) {
      console.log(currentPage);
    },
    choosePage(pageCount) {
      this.pageCount = pageCount;
    },
  },
};
</script>

<style>
</style>
