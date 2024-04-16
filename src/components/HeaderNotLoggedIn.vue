<template>
  <header class="bg-2_color py-8  shadow-2xl">
<div class="container mx-auto md:flex justify-between items-center">
  <div class="w-full text-lg font-extrabold md:w-fit md:text-left">
      <span class="text-violet-500 text-2xl ml-14 md:ml-0 select-none">Happenings</span>
      <span class="text-white text-2xl  select-none">Around</span>
      <button @click="MenuOpen()" class="md:hidden text-white">
        <svg class="ml-16  w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </div>
  <div class="md:flex md:justify-end md:items-center">
    
    <ul class="md:flex md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-gradient-to-t from-1_color from-60% to-2_color   md:bg-gradient-to-t from-2_color from-60% to-2_color md:w-auto w-full top-20 duration-700 ease-in" 
      :class="[open ? 'right-0' : 'right-[100%]']">
      <li class="md:mx-4 md:my-0 my-6" v-for="(link, index) in Links" :key="index">
        <button @click="$router.push(link.route)" class="select-none text-white font-mono text-xl hover:  hover:rounded-lg px-4 py-1 hover:-translate-y-1 transition-all duration-300 select-none">{{link.name}}</button>
      </li>
      <li>
        <SignInParent/>
      </li>
      
      </ul>
  </div>
</div>
</header>
</template>
<script>

import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';
import {useRouter} from 'vue-router';
import SignInParent from './SignInParent.vue';

export default {
  components: {
    SignInParent

  },
  setup () {
  const user = firebase.auth().currentUser;

  const name = ref("");
  const route = useRouter();
  const open = ref(false);
  const Links = ref([
    {name: "Strona główna", route: "/"},
    {name: 'Wydarzenia', route: "/events"},
    {name: 'O nas', route: "about"},

  ]);
  onBeforeMount(() =>{
    if (user) {
      name.value = user.email.split('@')[0];
    }

  });
  const MenuOpen = () => {
    open.value = !open.value;
  };
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
      Logout,
      Links,
      open,
      MenuOpen,
    };
  },
  }



</script>