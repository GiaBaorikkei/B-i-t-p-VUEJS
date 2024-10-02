<template>
  <div>
    <h2>Danh sách sách đã mượn</h2>
    <div>
      <label for="filter">Lọc theo trạng thái:</label>
      <select v-model="filterStatus" id="filter" @change="filterBooks">
        <option value="">Tất cả</option>
        <option value="Đã trả">Đã trả</option>
        <option value="Chưa trả">Chưa trả</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>Tiêu đề sách</th>
          <th>Ngày mượn</th>
          <th>Ngày trả</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in filteredBooks" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.borrowDate }}</td>
          <td>{{ book.returnDate }}</td>
          <td>
            <div>
              <select v-model="book.status" @change="updateStatus(book)">
                <option value="Đã trả">Đã trả</option>
                <option value="Chưa trả">Chưa trả</option>
              </select>
            </div>
          </td>
          <td>
            <button @click="$emit('edit', book)">Sửa</button>
            <button @click="$emit('delete', book)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  books: Array
});

const filterStatus = ref('');

const filteredBooks = computed(() => {
  return filterStatus.value
    ? props.books.filter(book => book.status === filterStatus.value)
    : props.books;
});

const updateStatus = (book) => {
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
