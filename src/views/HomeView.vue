<template>
  <body>
  <header class="bg-2_color py-8  shadow-2xl">
  <div class="container mx-auto flex justify-between items-center">
    <!-- Logo and Happenings Around -->
    <div class="flex justify-start items-center space-x-8">
      <!-- Logo -->
      <!-- Happenings Around -->
      <a href="#" class="text-white text-2xl font-mono font-bold ">placeholder</a>
    </div>

    <!-- Navigation and Sign Up to the right -->
    <div class="flex justify-end items-center space-x-8">
      <!-- Navigation -->
      <nav class="hidden md:flex space-x-8">
        <button @click="$router.push('/')" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Home</button>
        <a href="#" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Events</a>
        <button @click="$router.push('about')" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">About us</button>
        <a href="#" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Profile</a>

      </nav>

      <!-- Sign Up button -->
      <a href="#" class="text-white font-mono text-xl  bg-1_color font-medium py-2 px-4 rounded transition-transform duration-300 transform hover:scale-110">Sign Up</a>
      
    </div>
  </div>
 

</header>
<section>
<h1>Hejka</h1>
  <div>
    <div>
      <button @click="$router.push('about')">About</button>
      <SignInParent/>
    </div>
  </div>
  <div class="content">
    <div class="eventList">
      <EventList/>
    </div>
    <div class="googleMap">
      <GoogleMap/>
    </div>
    
</div>
</section>
</body>
  
</template>

<script>
import { ref, onMounted } from 'vue';
import SignInParent from '../components/SignInParent.vue';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import GoogleMap from '../components/GoogleMap.vue';
import EventList from '../components/EventList.vue';
import ModalComponentParent from '../components/ModalComponentParent.vue';

import '../assets/tailwind.css'

export default {
  components: {
    SignInParent, GoogleMap, EventList, ModalComponentParent
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




