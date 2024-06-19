<template>
    <div>
      <div class="introduction">
  <h2>平台介绍</h2>
  <p>善行平台是一个致力于传播佛教慈悲精神的公益平台，通过线上善行、线下活动，帮助人们积累功德，提升心灵境界。</p>
</div>

<div class="about-us">
  <h2>关于我们</h2>
  <p>我们的愿景：让每一个人都能通过善行积累功德，享受内心的宁静与喜悦，共同创建一个充满爱与和平的世界。</p>
</div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutVue'
  }
  </script>
  
  <style scoped>
.container {
  max-width: 800px; /* 设置容器最大宽度 */
  margin: 0 auto; /* 在页面中居中显示 */
}

.introduction, .about-us {
  padding: 20px;
  border-radius: 8px;
  background-color: #f8f9fa; /* Light Gray */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
  margin-bottom: 30px;
}

.introduction h2, .about-us h2 {
  font-size: 28px;
  color: #1e90ff; /* Deep Sky Blue */
  margin-bottom: 15px; /* 增加标题和段落之间的间距 */
}

.introduction p, .about-us p {
  font-size: 18px;
  color: #333; /* Dark Gray */
  line-height: 1.8; /* 增加行高，提高可读性 */
}

/* 全局字体设置 */
body {
  font-family: Arial, sans-serif;
}

/* 如果需要调整页面背景颜色或全局样式，可以在此处添加 */
/*
body {
  background-color: #f4f4f4; // 设置页面背景颜色为浅灰色
}
*/

</style>
