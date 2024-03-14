<template>
  <div>
    <button @click="openModal" class="text-white font-mono text-xl  bg-1_color font-medium py-2 px-4 rounded transition-transform duration-300 transform hover:scale-110">Join Us</button>
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
