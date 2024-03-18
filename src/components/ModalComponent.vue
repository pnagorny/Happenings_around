<template>
    <div v-if="isVisible" class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center items-center z-50" @click.self="closeModal">
      <div class="p-5 border md:w-2/3  xl:w-1/3 shadow-2xl rounded-md bg-white">
        <div class="text-center ">
          <button class="float-right mb-3 bg-gray-200 hover:bg-gray-300 rounded-full p-2" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
          <slot></slot> <!-- This is where your form will be injected -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['isVisible'],
    methods: {
      closeModal() {
        this.$emit('update:isVisible', false);
      },
    },
  }
  </script>
  