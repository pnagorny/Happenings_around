<template>
  <div>
    <button @click="openModal" class="px-4 py-2 border-2 border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white transition-colors duration-300">Join Us</button>
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
