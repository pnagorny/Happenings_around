<template>
  <div class="font-sans">
    <div class="my-4">
      <div class="flex justify-end">
        <button class="px-4 py-2 border-2 border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white transition-colors duration-300" @click="$router.push('about') ">About</button>
        <ModalComponentParent/>
        <SignInParent/>
      </div>
    </div>
    <div class="flex flex-wrap md:flex-nowrap gap-4">
      <div class="flex-1">
        <EventList/>
      </div>
      <div class="flex-initial w-full md:w-1/2 lg:w-1/3">
        <GoogleMap/>
      </div>
    </div>
  </div>
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




