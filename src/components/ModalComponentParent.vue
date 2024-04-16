<template>
    <!-- Existing template code -->
    <button @click="showModal = true" class="text-white font-mono text-xl select-none bg-1_color font-medium py-2 px-4 rounded transition-transform duration-300 transform hover:scale-110">Dodaj wydarzenie</button>
    <ModalComponent v-model:isVisible="showModal">
      <EventForm @close-modal="showModal = false"/>
    </ModalComponent>
    <!-- Rest of the template -->
  </template>
  
  <script>
  import ModalComponent from './ModalComponent.vue';
  import EventForm from '../components/EventForm.vue';
  
  export default {
    components: {
      ModalComponent,
      EventForm,
    },
    data() {
      return {
        showModal: false,
      };
    },
  }
  </script>
  