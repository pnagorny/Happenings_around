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
        <a href="#" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Profil</a>
      </nav>
      <ModalComponentParent/>
      <button @click="Logout" class="text-white font-mono text-xl bg-1_color font-medium py-2 px-4 rounded transition-transform duration-300 transform hover:scale-110">Wyloguj się</button>

    </div>
  </div>
</header>
</template>
<script>
import ModalComponentParent from './ModalComponentParent.vue';
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';
import {useRouter} from 'vue-router';

  export default {
    components: {
      ModalComponentParent,

    },
    setup () {
    const user = firebase.auth().currentUser;

    const name = ref("");
    const route = useRouter();

    onBeforeMount(() =>{
      if (user) {
        name.value = user.email.split('@')[0];
      }
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then((data) => {
          window.alert("Logged out!")
          route.push('/')
        })
        .catch(err => alert(err.message));
    }
    return {
        showModal: false,
        name,
        Logout
      };
    },
    }



</script>