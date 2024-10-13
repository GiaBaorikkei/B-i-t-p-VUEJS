<template>
  <div class="task-manager">
    <h2>Quản lý công việc</h2>
    <div class="task-input">
      <input type="text" placeholder="Nhập tên công việc"/>
      <button class="add-task-btn">Thêm công việc</button>
    </div>

    <div class="filter-buttons">
      <button>Tất cả</button>
      <button>Hoàn thành</button>
      <button>Đang thực hiện</button>
    </div>

    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id">
        <label>
          <input type="checkbox"  />
          <span>{{ task.name }}</span>
        </label>
        <div class="task-actions">
          <button class="edit-task-btn">
            <font-awesome-icon class="pen" icon="pen" />
          </button>
          <button class="delete-task-btn">
            <font-awesome-icon class="trash" icon="trash" />
          </button>
        </div>
      </li>
    </ul>

    <div class="delete-buttons">
      <button class="delete-completed-btn">Xóa công việc hoàn thành</button>
      <button class="delete-all-btn">Xóa tất cả công việc</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const tasks = ref([]);

const getAllTask = async () => {
  let res = await axios.get("http://localhost:3000/tasks");
  tasks.value = res.data
};
onMounted(() => {
  getAllTask();
});


</script>
  
  <style scoped>
  .trash{
    color: red
  }
  .pen{
    color: rgb(211, 211, 54)
  }
  .task-manager {
    width: 400px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #fff;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .task-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .task-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .add-task-btn {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .filter-buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .filter-buttons button {
    flex: 1;
    padding: 10px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  
  .task-list {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
  }
  
  .task-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .task-list label {
    display: flex;
    align-items: center;
  }
  
  .task-list input[type="checkbox"] {
    margin-right: 10px;
  }
  
  .task-completed {
    text-decoration: line-through;
    color: gray;
  }
  
  .task-actions {
    display: flex;
    gap: 10px;
  }
  
  .edit-task-btn, .delete-task-btn {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .edit-task-btn i, .delete-task-btn i {
    font-size: 16px;
    color: #f39c12;
  }
  
  .delete-task-btn i {
    color: red;
  }
  
  .delete-buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .delete-completed-btn, .delete-all-btn {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  