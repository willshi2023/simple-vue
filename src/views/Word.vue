<template>
  <div class="container">
    <div class="group">
      <h2>禅语</h2>
      <ul>
        <li class="zen-saying">放下执著，放下心中的烦恼，心即是佛。</li>
        <li class="zen-saying">前世因，今世果；今世因，来世果。</li>
        <li class="zen-saying">不用功夫寻找，皆是禅心。</li>
        <li class="zen-saying">见性成佛，不用刻意追求。</li>
        <li class="zen-saying">一花一世界，一叶一如来。</li>
        <li class="zen-saying">春有百花秋有月，夏有凉风冬有雪。若无闲事挂心头，便是人间好时节。</li>
        <li class="zen-saying">观看莲花如观自性，心地清净如出水芙蓉。</li>
        <li class="zen-saying">行住坐卧，自性清净。</li>
        <li class="zen-saying">心若无挂碍，天地即菩提。</li>
        <li class="zen-saying">山水心中，无一物不佛。</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordVue'
}
</script>

<style scoped>
.container {
  max-width: 800px; /* 设置容器最大宽度 */
  margin: 0 auto; /* 在页面中居中显示 */
  padding: 20px;
  background: linear-gradient(to bottom right, #c2e59c, #64b3f4); /* 使用渐变色背景 */
  border-radius: 10px; /* 圆角边框 */
}

.group {
  margin-bottom: 30px;
}

.group h2 {
  font-size: 32px; /* 更大的字体 */
  color: #fff; /* 白色 */
  text-align: center; /* 居中显示 */
  margin-bottom: 20px; /* 增加与下方列表的间距 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加文字阴影 */
}

ul {
  padding: 0;
}

li {
  font-size: 20px; /* 更大的字体 */
  color: #fff; /* 白色 */
  line-height: 1.6;
  margin-bottom: 15px; /* 增加列表项之间的间距 */
  padding: 10px; /* 增加内边距 */
  border-radius: 5px; /* 圆角边框 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 添加盒子阴影 */
  animation: fadeIn 1s ease; /* 添加淡入动画 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.zen-saying {
  font-family: 'Roboto', sans-serif; /* 使用特定字体 */
}

</style>
