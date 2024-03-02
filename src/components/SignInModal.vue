<script setup>
import { defineProps, defineEmits, ref, reactive } from "vue";
import { onClickOutside } from '@vueuse/core';
import Login from './Login.vue';
import Register from './Register.vue';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null);
onClickOutside(target, () => emit('modal-close'));

const state = reactive({
  activeTab: 'login', 
});
</script>

<template>
    <div v-if="isOpen" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" ref="target">
          <div class="tabs">
            <button :class="{ active: state.activeTab === 'login' }" @click="state.activeTab = 'login'">Login</button>
            <button :class="{ active: state.activeTab === 'register' }" @click="state.activeTab = 'register'">Register</button>
          </div>
          <component :is="state.activeTab === 'login' ? Login : Register" /><br>
          <button @click.stop="emit('modal-close')">Exit</button>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  width: 300px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #2c3e50;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.tabs button {
  background-color: transparent;
  border: none;
  color: white;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
}
.tabs button.active {
  border-bottom: 2px solid white;
}

</style>