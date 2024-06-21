<template>
  <div class="container">
    <h1>用户列表</h1>
    <div class="search-box">
      <el-input v-model="searchName" placeholder="搜索用户名"></el-input>
      <el-input v-model="searchEmail" placeholder="搜索邮箱"></el-input>
      <el-button type="primary" @click="fetchUsers">搜索</el-button>
    </div>
    <el-table :data="users" border style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="mail" label="邮箱"></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="primary" @click="viewUserDetails(row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  mail: string;
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
</style>
