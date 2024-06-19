<template>
  <div id="app">
    <header>
      <div class="logo-container">
        赛博积德
      </div>
      <div class="nav-container">
        <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于我们</router-link>
          <router-link to="/merit">功德项目</router-link>
          <router-link to="/how">如何参与</router-link>
          <router-link to="/contact">联系我们</router-link>
          <router-link to="/problem">常见问题</router-link>
          <router-link to="/word">禅语</router-link>
          <!-- Add more links here if needed -->
        </nav>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Add your styles here */
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #f8f9fa;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  font-size: 40px; 
  color: #333; 

}

.logo {
  height: 40px;
}

.nav-container {
  display: flex;
  justify-content: flex-start; /* Align links to the left */
  width: 100%;
}

nav {
  display: flex;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

nav a:hover {
  text-decoration: underline;
}
</style>
