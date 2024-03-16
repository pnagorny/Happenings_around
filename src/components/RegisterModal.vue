<template>
    <div v-if="showModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center items-center z-50" @click.self="showModal = false">
      <div class="bg-white shadow-2xl rounded-lg p-6  max-w-sm w-full m-4">
        <button class="float-right  bg-gray-200 hover:bg-gray-300 rounded-full p-2" @click="showModal = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="mt-4">
          <div v-if="isLogin" >
            
            <!-- Komponent logowania -->
            <Register />
            <p class="text-center mt-6 text-sm font-medium">Masz już konto? <button class="text-purple-500 " @click="switchAuthMode">Zaloguj się</button></p>
          </div>
          <div v-else>
            <!-- Komponent rejestracji -->
            <Login />
            <p class="text-center mt-6 text-sm font-medium">Nie masz konta? <button class="text-purple-500 " @click="switchAuthMode">Zarejestruj się</button></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <!-- Komponent logowania -->
  
  
  <script>
  import Login from './Login.vue';
  import Register from './Register.vue';
  
  export default {
    components: {
      Login,
      Register
    },
    data() {
      return {
        showModal: false,
        isLogin: true
      };
    },
    methods: {
      switchAuthMode() {
        this.isLogin = !this.isLogin;
      }
    }
  };
  </script>