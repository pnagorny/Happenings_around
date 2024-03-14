<template>
    <div v-if="isVisible" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" @click.self="closeModal">
      <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-lg rounded-md bg-white">
        <div class="mt-3 text-center">
          <span class="top-0 right-0 cursor-pointer text-gray-400 hover:text-gray-500 float-right text-2xl leading-none px-3 py-1" @click="closeModal">&times;</span>
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
  
  <style>
  /* Add any additional styles here */
  </style>
  