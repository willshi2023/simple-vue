<template>
  <div id="app">
    <header>
      <div class="logo-container">
        <span class="logo">赛博积德</span>
      </div>
      <div class="nav-container">
        <nav>
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/about" class="nav-link">关于我们</router-link>
          <router-link to="/merit" class="nav-link">功德项目</router-link>
          <router-link to="/how" class="nav-link">如何参与</router-link>
          <router-link to="/contact" class="nav-link">联系我们</router-link>
          <router-link to="/problem" class="nav-link">常见问题</router-link>
          <router-link to="/word" class="nav-link">禅语</router-link>
          <router-link to="/users" class="nav-link">用户管理</router-link>
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
  background-color: #111; /* Dark background color */
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
}

.logo {
  font-size: 40px;
  color: #fff; /* White color for the logo */
}

.nav-container {
  display: flex;
  justify-content: center; /* Align links to the center */
  width: 100%;
}

nav {
  display: flex;
}

nav a {
  margin: 0 15px; /* Increase margin between links */
  text-decoration: none;
  color: #fff; /* White color for links */
  font-size: 18px; /* Adjust font size */
  transition: all 0.3s ease; /* Smooth transition */
}

nav a:hover {
  text-decoration: underline;
  cursor: pointer; /* Change cursor to pointer on hover */
  transform: scale(1.1); /* Increase size on hover */
}

/* Active link styles */
nav a.router-link-exact-active {
  color: #39ff14; /* Green color for active link */
}

</style>
