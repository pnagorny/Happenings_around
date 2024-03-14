<template>
    <!-- Existing template code -->
    <button @click="showModal = true" class="px-4 py-2 border-2 border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white transition-colors duration-300">Add Event</button>
    <ModalComponent v-model:isVisible="showModal">
      <EventForm/>
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
  