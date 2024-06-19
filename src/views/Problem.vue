<template>
  <div class="container">
    <div class="group">
      <h2>佛教的基本介绍</h2>
      <ul>
        <li>佛教是一种什么样的宗教？</li>
        <li>佛教的起源和历史是什么？</li>
        <li>佛教的核心信仰是什么？</li>
      </ul>
    </div>

    <!-- 其他分组以此类推 -->
  </div>
</template>

<script>
export default {
  name: 'ProblemVue'
}
</script>

<style scoped>
.container {
  max-width: 800px; /* 设置容器最大宽度 */
  margin: 0 auto; /* 在页面中居中显示 */
  padding: 20px;
}

.group {
  margin-bottom: 30px;
}

.group h2 {
  font-size: 24px;
  color: #ffffff; /* 白色 */
  margin-bottom: 10px;
}

ul {
  list-style-type: none; /* 移除默认列表符号 */
  padding: 0;
}

li {
  font-size: 18px;
  color: #66ff66; /* 绿色 */
  line-height: 1.6;
  margin-bottom: 10px; /* 增加列表项之间的间距 */
}

</style>
