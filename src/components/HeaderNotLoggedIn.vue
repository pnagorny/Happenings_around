<template>
    <header class="bg-2_color py-8  shadow-2xl">
  <div class="container mx-auto flex justify-between items-center">
    <div class="w-full text-lg font-extrabold md:w-fit md:text-left">
        <span class="text-violet-500 text-2xl">Happenings</span>
        <span class="text-white text-2xl">Around</span>
      </div>
    <div class="flex justify-end items-center space-x-8">
      <nav class="hidden md:flex space-x-8">
        <button @click="$router.push('/')" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Strona Główna</button>
        <a href="#" @click="$router.push('/events')" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Wydarzenia</a>
        <button @click="$router.push('about')" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">O Nas</button>

      </nav>
      
      <SignInParent/>
    </div>
  </div>
</header>
</template>
<script>
import { ref, onMounted } from 'vue';
import SignInParent from '../components/SignInParent.vue';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';




import '../assets/tailwind.css'

export default {
  components: {
    SignInParent
  },
  setup () {
    const name = ref("");
    const isLoggedIn = ref(false);


    let auth;
    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true;
        }
        else {
          isLoggedIn.value = false;
        }
      })
    });

    const Logout = () => {
      signOut(auth)
    };


    return {
      name,
      Logout
    }
  }
}


</script>