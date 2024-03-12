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