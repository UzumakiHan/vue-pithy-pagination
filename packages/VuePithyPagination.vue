<template>
  <div class="pageBox" @click="showPage = false">
    <div class="pageTotal">
      共<span>{{ allCount }}</span
      >条
    </div>
    <div class="pageContent">
      <button
        class="firstPage"
        :disabled="currentPage === 1"
        :class="[currentPage === 1 ? 'disableStyle' : '']"
        @click="firstPage"
      >
        首页
      </button>
      <button
        class="prevPage"
        :disabled="currentPage === 1"
        :class="[currentPage === 1 ? 'disableStyle' : '']"
        @click="prevPage"
      >
        <i class="iconfont icon-arrow-left"></i>
      </button>
      <button class="showPage">{{ currentPage }}</button>
      <button
        class="nextPage"
        :disabled="currentPage === Math.ceil(allCount / pageCount)"
        :class="[
          currentPage === Math.ceil(allCount / pageCount) ? 'disableStyle' : '',
        ]"
        @click="nextPage"
      >
        <i class="iconfont icon-youjiantou1"></i>
      </button>
      <button
        class="lastPage"
        :disabled="currentPage === Math.ceil(allCount / pageCount)"
        :class="[
          currentPage === Math.ceil(allCount / pageCount) ? 'disableStyle' : '',
        ]"
        @click="lastPage"
      >
        尾页
      </button>
    </div>
    <div class="selectSize">
      <div>
        <span class="numSelect">{{ pageCount }}</span> <span>条/页</span>
      </div>
      <div
        class="icona"
        @click.stop="showPageCount"
      ><i class="iconfont" :class="[showPage ? 'icon-arrow-up' : 'icon-tubiaozhizuo-']"></i></div>
    </div>
    <!-- <div id="test1" style="display: inline-block;margin-left: 210px;"></div> -->
    <div class="goPage">
      <span>跳至</span
      ><input type="text" @keyup.enter="jumpPage($event)" /><span>页</span>
    </div>
    <ul class="pageSelectShow" v-if="showPage">
      <li data-num="10" @click="choosePage(10)">10条/页</li>
      <li data-num="20" @click="choosePage(20)">20条/页</li>
      <li data-num="50" @click="choosePage(50)">50条/页</li>
      <li data-num="100" @click="choosePage(100)">100条/页</li>
    </ul>
    <div class="pageTotal">
      共<span>{{ Math.ceil(allCount / pageCount) }}</span
      >页
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-pithy-pagination",
  data() {
    return {
      currentPage: 1, //当前页
      showPage: false,
    };
  },
  mounted() {
  },
  props: {
    allCount: {
      type: Number,
      require: true,
    },
    pageCount: {
      type: Number,
      require: true,
    },
  },
  methods: {
    //首页
    firstPage() {
      this.currentPage = 1;
      this.$emit("getCurrentPage", this.currentPage);
    },
    //上一页
    prevPage() {
      this.currentPage -= 1;
      this.$emit("getCurrentPage", this.currentPage);
    },
    //下一页
    nextPage() {
      this.currentPage += 1;
      this.$emit("getCurrentPage", this.currentPage);
    },
    //尾页
    lastPage() {
      this.currentPage = Math.ceil(this.allCount / this.pageCount);
      this.$emit("getCurrentPage", this.currentPage);
    },
    //显示选择跳数
    showPageCount() {
      this.showPage = true;
    },
    //选择条数
    choosePage(pageCount) {
      this.showPage = false;
      this.$emit("choosePage", pageCount);
      this.firstPage();
      console.log(pageCount);
    },
    //键盘跳转
    jumpPage(e) {
      //   console.log(jumpPageCount);
      let jumpPageCount = Number(e.target.value);
      if (jumpPageCount > Math.ceil(this.allCount / this.pageCount)) return;
      this.currentPage = jumpPageCount;
      this.$emit("getCurrentPage", this.currentPage);
      e.target.value = "";
    },
  },
};
</script>

<style  scoped>
.pageBox {
  width: 70%;
  margin-left: 15%;
  margin-top: 200px;
  position: relative;
  height: 50px;
}

.pageBox > div {
  float: left;
  margin: 0 10px;
}

.pageContent > button {
  float: left;
  margin: 0px 4px;
  border: none;
  outline: none;
  cursor: pointer;
}

.goPage,
.pageTotal {
  height: 30px;
  vertical-align: middle;
  font-size: 14px;
}

.goPage {
  right: 50px;
}

.goPage span {
  display: inline-block;
  color: #999999;
}

.goPage input {
  display: inline-block;
  width: 50px;
  height: 30px;
  margin: 0px 5px;
  border: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.pageTotal {
  left: 50px;
  line-height: 30px;
  font-size: 15px;
  color: #999;
}

.pageTotal span {
  margin: 0 3px;
  color: #333;
}

.selectSize {
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  vertical-align: middle;
  position: relative;
}

.selectSize > div {
  float: left;
  margin-left: 5px;
}

.icona {
  width: 20px;
  height: 20px;
  /* background-image: url("../assets/images/down.png"); */
  background-size: 100% 100%;
  background-position: center center;
  cursor: pointer;
  position: absolute;
  right: 6px;
}

.pageSelectShow {
  padding: 0;
  width: 100px;
  height: 162px;
  border: 1px solid #ccc;
  overflow-y: auto;
  position: absolute;
  top: -180px;
  left: 412px;
  list-style: none;
  font-size: 15px;
  background: #fff;
  border-radius: 3px;
}

.pageSelectShow li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}

.pageContent > div {
  cursor: pointer;
  height: 30px;
}

.firstPage,
.lastPage {
  width: 60px;
}

.firstPage,
.lastPage,
.showPage {
  background: rgb(67, 133, 255);
  color: #fff;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
}

.showPage {
  width: 40px;
}

.prevPage,
.nextPage {
  height: 30px;
  width: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20px 20px;
}

.nowtouch {
  color: #009e94;
}
.disableStyle {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>