<template>
  <div class="container">
    <ul>
      <li class="item">慈善捐赠：向需要帮助的人或组织捐款或捐赠物品，如食品、衣物、医疗用品等。</li>
      <li class="item">义工服务：参与社区服务、环境保护、教育支持等义工活动，为社会做出贡献。</li>
      <li class="item">教育支持：提供奖学金、学习资源、教育培训等支持，帮助贫困地区的学生接受教育。</li>
      <li class="item">环保行动：参与植树造林、垃圾清理、环境保护等活动，为地球环境做出贡献。</li>
      <li class="item">健康促进：提供医疗援助、健康教育、疾病预防等服务，帮助改善健康状况。</li>
      <li class="item">文化传承：支持文化艺术活动、传统手工艺品制作、语言教育等项目，保护和传承文化遗产。</li>
      <li class="item">灾难救援：提供紧急救援、物资支援、心理辅导等服务，帮助受灾地区的人们渡过难关。</li>
      <li class="item">敬老爱幼：关爱老年人和儿童，提供陪伴、照顾、教育等服务，传递温暖和关怀。</li>
      <li class="item">心灵抚慰：提供心理咨询、心灵疏导、精神支持等服务，帮助人们度过生活中的困难时刻。</li>
      <li class="item">动物保护：参与动物救助、动物收容所支持、动物福利宣传等活动，保护动物权益。</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MeritVue'
}
</script>

<style scoped>
.container {
  max-width: 800px; /* 设置容器最大宽度 */
  margin: 0 auto; /* 在页面中居中显示 */
  padding: 20px;
}

ul {
  padding: 0;
}

.item {
  font-size: 18px;
  color: #f0f0f0; /* 设置文字颜色为白色 */
  line-height: 1.6;
  margin-bottom: 15px; /* 增加列表项之间的间距 */
  padding: 20px; /* 增加内边距 */
  border-radius: 5px; /* 圆角边框 */
  background-color: #222; /* 设置背景颜色为深灰色 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加盒子阴影 */
  transition: all 0.3s ease; /* 添加过渡效果 */
}

.item:hover {
  background-color: #333; /* 鼠标悬停时变为稍浅的灰色 */
}
</style>
