<template>
  <div>
    <h1>Quản lý mượn trả sách</h1>
    <button @click="showAddForm = true">Thêm thông tin</button>
    
    <AddBookForm v-if="showAddForm" @close="showAddForm = false" @add="addBook" />
    
    <BookList 
      :books="books" 
      @delete="confirmDelete" 
      @edit="openEditForm"
      @updateStatus="updateBookStatus"
    />
    
    <ConfirmationModal 
      v-if="showModal" 
      @close="showModal = false" 
      @confirm="deleteBook"
    />
    
    <EditBookForm 
      v-if="showEditForm" 
      :book="selectedBook" 
      @close="showEditForm = false" 
      @update="updateBook"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BookList from './components/BookList.vue';
import AddBookForm from './components/AddBookForm.vue';
import EditBookForm from './components/EditBookForm.vue';
import ConfirmationModal from './components/ConfirmationModal.vue';

const showAddForm = ref(false);
const showModal = ref(false);
const showEditForm = ref(false);
const selectedBook = ref(null);
const books = ref(JSON.parse(localStorage.getItem('books')) || []);

const addBook = (book) => {
  books.value.push(book);
  localStorage.setItem('books', JSON.stringify(books.value));
  showAddForm.value = false;
};

const confirmDelete = (book) => {
  selectedBook.value = book;
  showModal.value = true;
};

const deleteBook = () => {
  books.value = books.value.filter(book => book !== selectedBook.value);
  localStorage.setItem('books', JSON.stringify(books.value));
  showModal.value = false;
  selectedBook.value = null;
};

const openEditForm = (book) => {
  selectedBook.value = book;
  showEditForm.value = true;
};

const updateBook = (updatedBook) => {
  const index = books.value.findIndex(book => book.id === updatedBook.id);
  books.value[index] = updatedBook;
  localStorage.setItem('books', JSON.stringify(books.value));
  showEditForm.value = false;
};
</script>

<style>
</style>
