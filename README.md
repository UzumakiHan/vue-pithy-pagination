# vue-pithy-pagination

## 方式一：从Github下载

github地址：

```
https://github.com/Jane-He628/vue-pithy-pagination
```

```
yarn install
或者
cnpm install
```

运行：

```
yarn serve
```

## 方式二：从npm下载

npm packages地址：

```
https://www.npmjs.com/package/vue-pithy-pagination
```

```
cnpm install vue-pithy-pagination --save 
或者
yarn add vue-pithy-pagination
```

引入：

在`mian.js`中引入

```
import VuePithyPagination from 'vue-pithy-pagination'

import 'vue-pithy-pagination/dist/vue-pithy-pagination.css'

Vue.use(VuePithyPagination)
```

使用：

```
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

```

|      方法      | 是否必写 |       说明       | 返回结果 |
| :------------: | :------: | :--------------: | :------: |
| getCurrentPage |    是    | 获取点击的当前页 |  Number  |
|   choosePage   |    是    |  获取改变的页码  |  Number  |

|   参数    | 是否必传 |   说明   |  类型  |
| :-------: | :------: | :------: | :----: |
| allCount  |    是    |  总条数  | Number |
| pageCount |    是    | 每页条数 | Number |

效果：

![](https://i.loli.net/2021/05/11/verO7DzT9ocdKZa.png)