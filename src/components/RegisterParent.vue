<template>
    <div>
      <button @click="openModal" class="rounded-md border-0 bg-violet-500 px-12 py-2 text-base text-white shadow-lg shadow-violet-300 transition hover:bg-violet-600 hover:shadow-violet-400 dark:shadow-violet-900">Register now</button>
    </div>
    <SignInModal :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal">
    </SignInModal>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import SignInModal from "../components/SignInModal.vue";
  
  const isModalOpened = ref(false);
  
  const openModal = () => {
    isModalOpened.value = true;
  };
  const closeModal = () => {
    isModalOpened.value = false;
  };
  
  const submitHandler = ()=>{
    window.alert("Witamy")
    isModalOpened.value = false;
  }
  </script>
  