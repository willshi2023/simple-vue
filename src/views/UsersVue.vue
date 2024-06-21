<template>
  <div class="container">
    <h1>用户列表</h1>
    <div class="search-box">
      <input
        type="text"
        v-model="searchName"
        placeholder="搜索用户名"
        class="search-input"
      />
      <input
        type="text"
        v-model="searchEmail"
        placeholder="搜索邮箱"
        class="search-input"
      />
      <button @click="fetchUsers" class="search-button">搜索</button>
    </div>
    <table class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="user-row">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.mail }}</td>
          <td>
            <button @click="viewUserDetails(user)" class="details-button">
              查看详情
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  // 其他用户属性
}

const users = ref<User[]>([]); // 用户列表数据
const searchName = ref(""); // 搜索用户名关键字
const searchEmail = ref(""); // 搜索邮箱关键字

const fetchUsers = () => {
  // 发起获取用户列表数据的请求
  axios
    .post<{ data: { records: User[] } }>("/api/users/list", {
      pageNo: 1,
      pageSize: 10,
      searchReq: {
        id: 0,
        name: searchName.value,
        mail: searchEmail.value,
        password: "",
        checked: 0,
      },
    })
    .then((response) => {
      users.value = response.data.data.records; // 将获取到的用户列表数据赋值给 users
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

const viewUserDetails = (user: User) => {
  // 查看用户详情
  console.log("查看用户详情:", user);
};

onMounted(fetchUsers); // 在组件加载时获取用户列表数据
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.search-box {
  margin-bottom: 20px;
}

.search-input {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-button {
  padding: 8px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th,
.user-table td {
  padding: 10px;
  border: 1px solid #ccc;
}

.user-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
}

.user-row:hover {
  background-color: #f2f2f2;
}

.details-button {
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
