<template>
    <div>
      <main class="content">
      <section class="welcome">
        <h1>欢迎来到善行平台</h1>
        <p>积累功德，传播慈悲，共建和谐世界。</p>
        <p>点滴善行，汇聚大爱：在这里，每一个善举都能带来无尽的功德。</p>
      </section>
      <section class="mission">
        <h2>使命宣言</h2>
        <p>我们的使命：帮助每一个人通过善行积累功德，提升自我，传播佛法的智慧与慈悲。</p>
        <p>传递善意，净化心灵：我们致力于让更多人参与到善行中来，共同修身养性，积累福报。</p>
      </section>
    </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeVue'
  }
  </script>
  
  <style scoped>
  .welcome, .mission {
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f4f4; /* Light Gray */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

.welcome h1, .mission h2 {
  color: #1e90ff; /* Deep Sky Blue */
  text-align: center;
}

.welcome h1 {
  font-size: 36px;
  font-weight: bold;
}

.mission h2 {
  font-size: 30px;
  font-weight: bold;
}

.welcome p, .mission p {
  color: #333; /* Dark Gray */
  text-align: center;
  line-height: 1.6;
}

  </style>
  